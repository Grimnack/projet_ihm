function impor()
{
  var file = $('#upfile').val();
  console.log(file);
  if(file!="")
  {
    var div = $('<\div>')
    div.addClass('textid');
    div.attr('style',"width:100px; margin:0 auto;");
    div.attr('onclick',"window.open('menu.html')");
    var image = $('<\img>');
    image.attr('src','text.png');
    image.attr('style',"width:128px;height:128px;");
    div.append(image);
    $('.parentid').append(div);
  }
}
