'use strict';
// used in conjuction with the compose.jade
// partial to get the editor ready for use
module.exports = function (url) {
    var editor;
    var formElement = document.getElementById('new_post_form');
    var xhr = require('xhr');
    var nojs = require('./showNoJS');
    var setupEditor = require('./setupEditor');
    
    nojs();
    setupEditor(formElement);
    
    // from setupEditor
    window.addEventListener('editor-loaded', function (e) {
        editor = e.detail.editor;
    });
    
    // ok so submitting an iframe in a form is not going to work
    // use editor.getHTML to get the value to submit
    formElement.addEventListener('submit', function (e) {
        var i;
        var postData = {};
        var formElements = formElement.elements;
        var numFormElements = formElement.elements.length;
        
        e.preventDefault();
        
        for (i = 0; i < numFormElements; i++) {
            if (formElements[i].name === 'id') {
                postData.id = formElements[i].value;
            } else if (formElements[i].name === 'threadId') {
                postData.threadId = formElements[i].value;
            } else if (formElements[i].name === 'userId') {
                postData.userId = formElements[i].value;
            }
        }
        
        postData.content = editor.getHTML();
        // check for non-empty posts
        if (postData.content && postData.content.indexOf('<div><br></div>') !== 0) {
            xhr({
                json: postData,
                url: url,
                method: 'POST'
            }, function (error, response, body) {
                if (error && error.message) {
                    alert(error.message);
                } else {
                    window.location = '/thread/' + postData.threadId;
                }
            });
        }
    });
};
