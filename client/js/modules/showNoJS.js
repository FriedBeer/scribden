// updates html to show any elements that need javascript to work
// NOTE: sd-no-js must be the last class in the set in order for
// this to work.
module.exports = function () {
    var i;
    var nojs;
    var numElements;
    var currentElement;
    
    // show all elements that require javascript
    nojs = document.querySelectorAll('.sd-no-js');
    numElements = nojs.length;

    for (i = 0; i < numElements; i++) {
        currentElement = nojs[i];
        currentElement.className = currentElement.className.substr(0, currentElement.className.length - 8);
    }
};
