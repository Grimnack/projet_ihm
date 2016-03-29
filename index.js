Synthesizer = {}

Synthesizer.Selector = {}

// retourne le text selectionné.
Synthesizer.Selector.getSelected = function() {
  var selectedText = '';

  if(window.getSelection) {
    selectedText = window.getSelection();
  }
  else if(document.getSelection) {
    selectedText = document.getSelection();
  }
  else if(document.selection) {
    selectedText = document.selection.createRange().text;
  }

  return selectedText;
}

// listener sur le relachement de la souris, il récupère le texte si celui-ci a été selectionné.
Synthesizer.Selector.mouseup = function() {
  var selectedText = Synthesizer.Selector.getSelected();

  if(selectedText != '') {
    console.info('You selected: '+selectedText+'\n');
  }
}

$(document).ready(function() {
  // on met en place le listener correspondant.
  $(document).bind("mouseup", Synthesizer.Selector.mouseup);
})
