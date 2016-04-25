var adviser = $('#adviser');

adviser.popover({
  container: "body",
  content: "Bonjour ! Je suis votre adviser, <strong>Mimie Mathy</strong> !",
  html: true
});

$(document).ready(function() {
  adviser.popover('show');
});
