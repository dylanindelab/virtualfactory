
jQuery(document).ready(function($) {
    console.log('Document is ready') // Affice dans la console la phrase le document est prêt des que le document est prêt.

    $( "#square_button" ).click(function() { // Dès que l'on clique sur le bouton carré les paramètres de celui ci apparaisent.
        $('.square_size').toggleClass('show'); // On rajoute une class a notre class pour pouvoir la masquer ou l'ajouter.
        // Cette fonctionnalité sera a copier pour chaque bloc de code en fonction de chaque géometrie de base choisis.
      });

let canvas = new fabric.Canvas('myCanvas'); // Je fabrique un nouveau canvas grâce a ma balise canvas prévu dans mon html
canvas.setDimensions({width:640, height:500}); // Je prévois des dimension par defaut a mon cavnas

$("#validate").click(function(){ // Lorsque l'on clique sur le bouton avec l'id  #valide dans le html
  let htrinput = $("#hauteurinput").val(); // On récupere la valeur taper dans le input hauteur. Brut en milimetre et non relatif (ce qui et afficher a l'écran)
  let lrginput = $("#largeurinput").val(); // On récupere la valeur taper dans le input largeur. Brut en milimetre et non relatif (ce qui et afficher a l'écran)
  // alert(htrinput + " " + lrginput); // J'affiche une alert avec la hauteur taper et la largeur taper a son tour
  

  let rect = new fabric.Rect({ // J'utilise la variable let car ma variables et destinée a changer en fonction des inputs du client.
    left: 320, // La position initial gauche de la géometrie afficher sur l'écran
    top: 250, // La position initial haut de la géometrie affichier sur l'écran
    fill: 'red', // La couleur de la géometrie
    width: 25,   // La largeur qui correspond a ce que a entrer le client dans sont champs input
    height: 25, // La hauteur qui correspond a ce que a entrer le client dans sont champs input
  });
  
  canvas.add(rect); // Et à ce moment la le canvas créer et ajoute le rect(rectangle ou carré en fonction de l - h que a entrer le client dans les parametre)
  // alert('Vos dimensions: Largeur : ' + lrginput + ' mm, Hauteur : ' + htrinput + ' mm.');
  localStorage.setItem("largeur", lrginput); // Stocke en données local chez le client la largeur entré par l'utilisateur.
  localStorage.setItem("hauteur", htrinput); // Stocke en données local chez le client la hauteur entré par l'utilisateur.

  let cookielargeur = localStorage.getItem("largeur");
  let cookiehauteur = localStorage.getItem("hauteur");

  let largeursetting = document.getElementById("lrg_setting");
  let hauteursetting = document.getElementById("htr_setting")
 $(largeursetting).html("Largeur de votre géometrie: " + cookielargeur + 'mm');
 $(hauteursetting).html("Hauteur de votre géometrie: " + cookiehauteur + 'mm');

  // console.log(cookiehauteur, cookielargeur);

})


})





