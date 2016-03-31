// sets up Squire, the html editor
// requirements: editor markup must match
// the markup on compose.jade, ids and classes
// especially
module.exports = function (formElement) {
    var bold, 
        italic, 
        link, 
        image,
        urlContainer,
        urlField,
        urlSubmitBtn,
        imageContainer,
        imageField,
        imageSubmitBtn,
        editor,
        addLink,
        addImage,
        toggleLink,
        toggleImage;
    var isBold = false;
    var isItalic = false;
    var addingLink = false;
    var addingImage = false;
    var editorElement = document.createElement('iframe');
    
    editorElement.src = '/js/squire/document.html';
    editorElement.className = 'sd-c-editor';
    
    // editor is loaded asynchronously, so let the caller
    // know that the editor has been loaded, and hand it over.
    editorElement.addEventListener('load', function () {
        editor = editorElement.contentWindow.editor;
        window.dispatchEvent(new CustomEvent('editor-loaded', {
                            detail: { editor: editor },
                            bubbles: true,
                            canceleable: false
                        }));
    });
    
    formElement.removeChild(document.getElementById('editor'));
    formElement.insertBefore(editorElement, document.querySelector('.sd-o-submit-btn'));
    
    bold = document.getElementById('editor_bold');
    italic = document.getElementById('editor_italic');
    link = document.getElementById('editor_link');
    image = document.getElementById('editor_image');
    urlContainer = document.getElementById('editor_url');
    urlField = document.getElementById('editor_url_field');
    urlSubmitBtn = document.getElementById('editor_url_btn');
    imageContainer = document.getElementById('editor_image_url');
    imageField = document.getElementById('editor_image_field');
    imageSubmitBtn = document.getElementById('editor_image_btn');
    
    addLink = function () {
        if (addingLink) {
            editor.makeLink(urlField.value, { target: '_blank' });
            urlField.value = '';
            urlContainer.className = 'sd-c-toolbar__url sd-u-hide';
            addingLink = false;
        }
    };
    
    addImage = function () {
        if (addingImage) {
            editor.insertImage(imageField.value);
            imageField.value = '';
            imageContainer.className = 'sd-c-toolbar__url sd-u-hide';
            addingImage = false;
        }
    };
    
    toggleLink = function () {
        if (urlContainer.className === 'sd-c-toolbar__url sd-u-hide') {
            urlContainer.className = 'sd-c-toolbar__url sd-u-show';
            addingLink = true;
        } else {
            urlContainer.className = 'sd-c-toolbar__url sd-u-hide';
            urlField.value = '';
            addingLink = false;
        }
    };
    
    toggleImage = function () {
        if (imageContainer.className === 'sd-c-toolbar__url sd-u-hide') {
            imageContainer.className = 'sd-c-toolbar__url sd-u-show';
            addingImage = true;
        } else {
            imageContainer.className = 'sd-c-toolbar__url sd-u-hide';
            imageField.value = '';
            addingImage = false;
        }
    };
    
    bold.addEventListener('click', function () {
        if (isBold) {
            editor.removeBold();
            isBold = false;
            bold.className = 'sd-t-btn--no-style';
        } else {
            editor.bold();
            isBold = true;
            bold.className = 'sd-t-btn--no-style is-active';
        }
    });
    
    italic.addEventListener('click', function () {
        if (isItalic) {
            editor.removeItalic();
            isItalic = false;
            italic.className = 'sd-t-btn--no-style';
        } else {
            editor.italic();
            isItalic = true;
            italic.className = 'sd-t-btn--no-style is-active';
        }
    });
    
    link.addEventListener('click', function () {
        // only have image or link active at a time
        if (addingImage) {
            toggleImage();
        }
        
        toggleLink();
    });
    
    image.addEventListener('click', function () {
        // only have image or link active at a time
        if (addingLink) {
            toggleLink();
        }
        
        toggleImage();
    });
    
    urlField.addEventListener('keyup', function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        
        if (key === 13) {
            addLink();
        }
    });
    
    imageField.addEventListener('keyup', function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        
        if (key === 13) {
            addImage();
        }
    });
    
    urlSubmitBtn.addEventListener('click', function () {
        addLink();
    });
    
    imageSubmitBtn.addEventListener('click', function () {
        addImage();
    });
};
