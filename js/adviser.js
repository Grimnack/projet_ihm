var adviser = $('#adviser');

function pop(text) {
  adviser.popover('destroy');
  setTimeout(function() {
    adviser.popover({
      container: "body",
      content: text,
      html: true,
    });
    adviser.popover('show');
}, 200);
}

$(document).ready(function() {
  pop("Bonjour ! Je suis votre adviser, <strong>Mimie Mathy</strong> ! \
  Je suis ici pour vous assister dans votre longue quête pour la réussite !");

  $(document).keypress(function() {
    pop("Nous allons commencer ensemble. Cliquez sur les boutons “Éditeur” \
    ou “Charger fichier” pour commencer en un claquement de doigt !");

    $("#menu-item-editor").popover({
      container: "body",
      content: "Ici !",
      html: true,
      placement: 'bottom',
    });

    setTimeout(function() {
      $("#menu-item-editor").popover('show');
    }, 1000);
  });
});
