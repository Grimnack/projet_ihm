$(window).load(function(){

  function getSelectionText() {
    $('#targetArea').empty()
    var selection = ""
    text = window.getSelection()

    console.info(selection)
    return selection;
  }
  $(document).ready(function (){
    $('div').mouseup(function (e){
      var selected = window.getSelection();
      console.info(selected.toString())
      if(selected.toString() != '') {
        btn = $('<button\>', {
          text: 'Important',
          class: 'importantbtn',
          click: function() {
            $('.selected').attr('class', 'important')
            $('.importantbtn').remove()
          }
        })
        spn = '<span class="selected">'+selected+'</span>'

        $('.context').html($('.context').html().replace(selected.toString(), spn))
        $('.selected').append(btn).end()
      }
    })
    $('div').mousedown(function (e){
      var selected = getSelectionText();
    })
  });

});
