
jQuery(document).ready(function($) {
    var makerjs = require('makerjs'); // On demande a notre document JS d'inclure le fichier makerjs
    console.log('Document is ready') // Affice dans la console la phrase le document est prêt des que le document est prêt.
    
    
    // create the blueprint
    let blueprint = new svgBlueprint.Blueprint({ 
      parentSelector: "main",
      width: '100%',
      height: '100%'
      });

    blueprint.fit();
    // End of blue print in etabli.php


    $( "#square_button" ).click(function() { // Dès que l'on clique sur le bouton carré les paramètres de celui ci apparaisent.
        $('.square_size').toggleClass('show'); // On rajoute une class a notre class pour pouvoir la masquer ou l'ajouter.
    });

    let canvas = new fabric.Canvas('myCanvas'); // Je fabrique un nouveau canvas grâce a ma balise canvas prévu dans mon html
    canvas.setDimensions({width:640, height:500}); // Je prévois des dimension par defaut a mon cavnas

  $("#validate_square").click(function(){ // Lorsque l'on clique sur le bouton avec l'id  #valide dans le html
    let htrinput = $("#hauteurinput").val(); // On récupere la valeur taper dans le input hauteur. Brut en milimetre et non relatif (ce qui et afficher a l'écran)
    let lrginput = $("#largeurinput").val(); // On récupere la valeur taper dans le input largeur. Brut en milimetre et non relatif (ce qui et afficher a l'écran)
  // alert(htrinput + " " + lrginput); // J'affiche une alert avec la hauteur taper et la largeur taper a son tour

    if(htrinput <= 0 || lrginput <= 0) {
      alert('Désolé mais les paramètre inserez ne sont pas valide.');
    } else {
      let rect = new fabric.Rect({ // J'utilise la variable let car ma variables et destinée a changer en fonction des inputs du client.
      left: 320, // La position initial gauche de la géometrie afficher sur l'écran
      top: 250, // La position initial haut de la géometrie affichier sur l'écran
      // stroke: 'red',
      fill: 'transparent',
      stroke: 'red', // La couleur de la géometrie
      width: 40,   // La largeur qui correspond a ce que a entrer le client dans sont champs input
      height: 40, // La hauteur qui correspond a ce que a entrer le client dans sont champs input
      hoverCursor: 'true',
    });
canvas.add(rect);
this.rect;

localStorage.setItem("largeur", lrginput); // Stocke en données local chez le client la largeur entré par l'utilisateur.
localStorage.setItem("hauteur", htrinput); // Stocke en données local chez le client la hauteur entré par l'utilisateur.

  
let cookielargeur = localStorage.getItem("largeur"); // Récupère la donnée local pour la largeur.
let cookiehauteur = localStorage.getItem("hauteur"); // Récupère la donnée local pour la hauteur
let largeursetting = document.getElementById("lrg_setting");
let hauteursetting = document.getElementById("htr_setting");

canvas.on("object:modified", function (e) {
  let activeObject = e.target;
    if (!activeObject) {
      return;
    }
  
let  newWidth = activeObject.width * activeObject.scaleX ;
let newHeight = activeObject.height * activeObject.scaleY ;
activeObject.width = newWidth;
activeObject.height = newHeight;
activeObject.scaleX = 1;  
activeObject.scaleY = 1;  

let largeurenmm = parseFloat(newWidth * cookielargeur / 40).toPrecision(6);
let hauteurenmm = parseFloat(newHeight * cookiehauteur / 40).toPrecision(6);
  
$(largeursetting).html("Largeur de votre géometrie: " + largeurenmm + 'mm'); // Ajoute dans mon html les données stocké en local.
$(hauteursetting).html("Hauteur de votre géometrie: " + hauteurenmm + 'mm'); // Ajoute dans mon html les données stocké en local.
});
    }
  })
}) // End of document.ready (JQuery)
 