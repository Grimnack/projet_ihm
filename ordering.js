/** List of blocks of paragraph */
var _blocks = [];
/** ID of the div containing the paragraphs */
var _notesNodeID = "notes";


/**
 * Creates the block objects and store them from the page.
 */
function createBlockObjects() {
    var notesNode = document.getElementById(_notesNodeID);
    var blockNodes = notesNode.getElementsByTagName('p');

    for (var i = blockNodes.length - 1; i >= 0; i--) {
        var blockNode = blockNodes[i];
        // var impString = blockNode.className.replace("importance_", "");
        var impString = blockNode.className;

        var impValue = parseInt(impString, 10);

        var blockObj = {
            id: blockNode.id,
            importance: impValue,
            node: blockNode.cloneNode(true) // Keep a copy of the node
        };

        _blocks.push(blockObj);
    }
}

/**
 * Sorts the block objets stored by order of importance and updates their class.
 */
function reorganiseBlocks() {
    _blocks.sort(function(a, b) {
        return a.importance - b.importance;
    })
}

/**
 * Removes and rebuild all the block nodes in the appropriate order.
 */
function rebuildBlockNodes() {
    var notesNode = document.getElementById(_notesNodeID)

    // Remove all notes nodes
    while (notesNode.lastChild) {
        notesNode.removeChild(notesNode.lastChild);
    }

    // Add them in appropriate order (from last to first)
    for (var i = _blocks.length - 1; i >= 0; i--) {
        var blockObj = _blocks[i];
        notesNode.appendChild(blockObj.node);
    }
}
