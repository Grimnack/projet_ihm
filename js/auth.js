function auth(e)
{
  var user = $('#username').val();
  var pwd = $('#password').val();
  if(user == 'joséphine' && pwd=="angegardien")
  {
    window.location.replace("selectFiles.html");
  }
  else {
    $('#displayAlert').empty();
    var messages = $('<\div>');
    messages.addClass('alert');
    messages.addClass('alert-danger');
    messages.text('Identifiants incorrects');
    messages.appendTo($('#displayAlert'));
  }
}
