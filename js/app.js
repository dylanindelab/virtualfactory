// Dès que le document est charger les fonction peuvent être utiliser
jQuery(document).ready(function($) {
    console.log('Le document est prêt') // Affice dans la console la phrase le document est prêt des que le document est prêt.

    $( "#square_button" ).click(function() { // Dès que l'on clique sur le bouton carré les paramètres de celui ci apparaisent.
        $('.square_size').toggleClass('show'); // On rajoute une class a notre class pour pouvoir la masquer ou l'ajouter.
        // Cette fonctionnalité sera a copier pour chaque bloc de code en fonction de chaque géometrie de base choisis.
      });




// create a rectangle with angle of 45 degrees

var canvas = new fabric.Canvas('myCanvas'); // Je fabrique un nouveau canvas grâce a ma balise canvas prévu dans mon html
canvas.setDimensions({width:640, height:500}); // Je prévois des dimension par defaut a mon cavnas

$("#validate").click(function(){ // Lorsque l'on clique sur le bouton avec l'id  #valide dans le html
  let htrinput = $("#hauteurinput").val(); // On récupere la valeur taper dans le input hauteur
  let lrginput = $("#largeurinput").val(); // On récupere la valeur taper dans le input largeur
  // alert(htrinput + " " + lrginput); // J'affiche une alert avec la hauteur taper et la largeur taper a son tour
  

  let rect = new fabric.Rect({ // J'utilise la variable let car ma variables et destinée a changer en fonction des inputs du client.
    left: 320, // La position initial gauche de la géometrie afficher sur l'écran
    top: 250, // La position initial haut de la géometrie affichier sur l'écran
    fill: 'red', // La couleur de la géometrie
    width: lrginput,   // La largeur qui correspond a ce que a entrer le client dans sont champs input
    height: htrinput, // La hauteur qui correspond a ce que a entrer le client dans sont champs input
  });
  
  canvas.add(rect); // Et à ce moment la le canvas créer et ajoute le rect(rectangle ou carré en fonction de l - h que a entrer le client dans les parametre)
})


canvas.toSVG(); // Pour convertir le canvas en svg 



  
})





