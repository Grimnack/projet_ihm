var _buttReorderID = "butt_reorder";

// Main
(function () {
    createBlockObjects();

    var buttReorder = document.getElementById(_buttReorderID);
    buttReorder.addEventListener("click", function() {
        reorganiseBlocks();
        rebuildBlockNodes();
    });
})();
