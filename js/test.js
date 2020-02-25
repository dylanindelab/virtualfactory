jQuery(document).ready(function($) {

    $('.icon').on('click', function() {
        $(this).toggleClass('active');
        $('.select_shape').toggleClass('active');
      });
 });