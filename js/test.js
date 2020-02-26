jQuery(document).ready(function($) {

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