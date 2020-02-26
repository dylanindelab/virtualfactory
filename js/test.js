jQuery(document).ready(function($) {

  let blueprint = new svgBlueprint.Blueprint({ 
    parentSelector: ".draw_pattern",
    width: '100%',
    height: '100%'
    });


    $('.icon').on('click', function() {
        $(this).toggleClass('active');
        $('.select_shape').toggleClass('active');
      });

    $('.shape').on('click', function(){
      $('.setting_pattern').toggleClass('active');
    })

    $('.square_shape').on('click', function(){
      alert('Vous avais cliquez sur la carré');
    })

    $('.circle_shape').on('click', function(){
      alert('Vous avais cliquez sur la cercle');
    })

    $('.triangle_shape').on('click', function(){
      alert('Vous avais cliquez sur la triangle');
    })

    $('.draw_shape').on('click', function(){
      alert('Vous avais cliquez sur le dessin libre');
    })
 });