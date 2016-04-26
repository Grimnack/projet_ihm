$(window).load(function(){

  $(document).ready(function (){

    $('div').mouseup(function (e){
      var selected = window.getSelection();
      console.info(selected.toString())
      if(selected.toString() != '') {
        btn = $('<button\>', {
          text: 'Important',
          class: 'importantbtn btn btn-primary',
          click: function() {
            $('.selected').attr('id', 'rightclick')
            $('.selected').attr('class', 'important_1')
            $('.importantbtn').remove()

            $('#rightclick').on('contextmenu', function(e) {
              console.info('right click')
              elmt = $(this)
              cl = $(this).attr('class')
              console.info(cl)
              btn = $('<button\>', {
                text: '+',
                class: 'important+ btn btn-primary',
                click: function() {
                  classsplit = elmt.attr('class').split('_')
                  console.info(classsplit);
                  num = parseInt(classsplit[1])
                  num += 1
                  newclass = 'important_'+num
                  console.info(newclass)
                  elmt.attr('class', newclass)
                }
              })
              $('.'+cl).append(btn).end()
            })
          }
        })
        spn = '<span class="selected">'+selected+'</span>'

        $('.context').html($('.context').html().replace(selected.toString(), spn))
        $('.selected').append(btn).end()
      }
    })
    $('div').mousedown(function (e){
    })
  });

});
