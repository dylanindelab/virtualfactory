// Dès que le document est charger les fonction peuvent être utiliser
jQuery(document).ready(function($) {
    console.log('Le document est prêt') // Affice dans la console la phrase le document est prêt des que le document est prêt.

    $( "#square_button" ).click(function() { // Dès que l'on clique sur le bouton carré les paramètres de celui ci apparaisent.
        $('.square_size').toggleClass('show'); // On rajoute une class a notre class pour pouvoir la masquer ou l'ajouter.
        // Cette fonctionnalité sera a copier pour chaque bloc de code en fonction de chaque géometrie de base choisis.
      });


      var canvas = new fabric.Canvas('myCanvas');
      canvas.setDimensions({width:640, height:500});


// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 320,
  top: 250,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 45,
});

canvas.add(rect);
canvas.toSVG();


  
})





