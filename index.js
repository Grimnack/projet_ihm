Synthesizer = {
  importantThings: []
};

Synthesizer.Selector = {
  btn: undefined
};

// retourne le text selectionné.
Synthesizer.Selector.getSelected = function() {
  var selectedText = '';
  var currentelmt = null;

  if(window.getSelection) {
    selectedText = window.getSelection();
    if(selectedText.rangeCount) {
      currentelmt = selectedText.getRangeAt(0).cloneRange();
    }
  }
  else if(document.getSelection) {
    selectedText = document.getSelection();
    if(selectedText.rangeCount) {
      currentelmt = selectedText.getRangeAt(0).cloneRange();
    }
  }
  else if(document.selection) {
    selectedText = document.selection.createRange().text;
    if(selectedText.rangeCount) {
      currentelmt = selectedText.getRangeAt(0).cloneRange();
    }
  }

  Synthesizer.Selector.currentelmt = currentelmt;

  return selectedText;
}

// listener sur le relachement de la souris, il récupère le texte si celui-ci a été selectionné.
Synthesizer.Selector.mouseup = function() {
  console.info('mouse up');

  var selectedText = Synthesizer.Selector.getSelected();

  if(selectedText !== '' && selectedText !== Synthesizer.Selector.currentSelectedText) {
    if(Synthesizer.Selector.btn != undefined) {
      console.info("bouton existant");
      Synthesizer.Selector.currentelmt.removeChild(Synthesizer.Selector.btn);
    }

    console.info('You selected: '+selectedText+'\n');
    Synthesizer.Selector.currentSelectedText = selectedText;
    Synthesizer.Selector.btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("important");
    Synthesizer.Selector.btn.appendChild(btnText);
    Synthesizer.Selector.btn.setAttribute("id", "importantbtn");
    var span = document.createElement('span');
    Synthesizer.Selector.currentelmt.surroundContents(span);
    span.appendChild(Synthesizer.Selector.btn);
    Synthesizer.Selector.currentelmt = span;

    $('#importantbtn').click(function() {
      console.info("important click");
      Synthesizer.Selector.currentelmt.className = '';

    });
  }
}

$(document).ready(function() {
  // on met en place le listener correspondant.
  $(document).bind("mouseup", Synthesizer.Selector.mouseup);
})
