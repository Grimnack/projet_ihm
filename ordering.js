/** List of blocks of paragraph */
var _blocks = [];
/** ID of the div containing the paragraphs */
var _notesNodeID = "notes";


/**
 * Creates the block objects and store them from the page.
 */
function createBlockObjects() {
    var notesNode = document.getElementByID(notesNodeID);
    var blockNodes = notesNode.getElementsByTagName('p');

    for (var i = blockNodes.length - 1; i >= 0; i--) {
        var blockNode = blockNodes[i];
        var importance = blockNode.class

        var blockObj = {
            id: blockNode.id,
            importance: blockNode.class
        }

        _blocks.push(blockObj);
    }
}