Synthesizer = {
  importantThings: []
};

Synthesizer.Selector = {
  btn: undefined
};

// retourne le text selectionné.
Synthesizer.Selector.getSelected = function() {
  var selectedText = '';
  var parent = null;

  if(window.getSelection) {
    selectedText = window.getSelection();
    if(selectedText.rangeCount) {
      parent = selectedText.getRangeAt(0).commonAncestorContainer;
      if(parent.nodeType != 1) {
        parent = parent.parentNode;
      }
    }
  }
  else if(document.getSelection) {
    selectedText = document.getSelection();
    if(selectedText.rangeCount) {
      parent = selectedText.getRangeAt(0).commonAncestorContainer;
      if(parent.nodeType != 1) {
        parent = parent.parentNode;
      }
    }
  }
  else if(document.selection) {
    selectedText = document.selection.createRange().text;
    if(selectedText.type != 'Control') {
      parent = selectedText.createRange().parentElement();
    }
  }

  Synthesizer.Selector.currentParent = parent;

  return selectedText;
}

// listener sur le relachement de la souris, il récupère le texte si celui-ci a été selectionné.
Synthesizer.Selector.mouseup = function() {
  console.info('mouse up');
  var selectedText = Synthesizer.Selector.getSelected();
  Synthesizer.Selector.currentSelectedText = selectedText;

  if(selectedText != '') {
    if(Synthesizer.Selector.btn != undefined) {
      if(selectedText = '') {
        console.info('click outside, remove button');
        Synthesizer.Selector.currentParent.suppressChild(Synthesizer.Selector.btn);
      }
      console.info("bouton existant");
      return;
    }
    console.info('You selected: '+selectedText+'\n');
    Synthesizer.Selector.btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("important");
    Synthesizer.Selector.btn.appendChild(btnText);
    Synthesizer.Selector.btn.setAttribute("id", "importantbtn");
    Synthesizer.Selector.currentParent.appendChild(Synthesizer.Selector.btn);

    $('#importantbtn').click(function() {
      console.info("important click");
    });
  }
}

$(document).ready(function() {
  // on met en place le listener correspondant.
  $(document).bind("mouseup", Synthesizer.Selector.mouseup);
})
