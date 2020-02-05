
jQuery(document).ready(function($) {

    console.log('Document is ready') // Affice dans la console la phrase le document est prêt des que le document est prêt.

    $( "#square_button" ).click(function() { // Dès que l'on clique sur le bouton carré les paramètres de celui ci apparaisent.
        $('.square_size').toggleClass('show'); // On rajoute une class a notre class pour pouvoir la masquer ou l'ajouter.
        alert('Attention toutes données rentrer dans les champs sont suceptible d\'être enregistré pour vos futur utilisation. ');
        // Cette fonctionnalité sera a copier pour chaque bloc de code en fonction de chaque géometrie de base choisis.
      });

let canvas = new fabric.Canvas('myCanvas'); // Je fabrique un nouveau canvas grâce a ma balise canvas prévu dans mon html
canvas.setDimensions({width:640, height:500}); // Je prévois des dimension par defaut a mon cavnas

$("#validate_square").click(function(){ // Lorsque l'on clique sur le bouton avec l'id  #valide dans le html
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
  
  canvas.add(rect); // Et à ce moment est la le canvas créer et ajoute le rect(rectangle ou carré en fonction de l - h que a entrer le client dans les parametre)
  // alert('Vos dimensions: Largeur : ' + lrginput + ' mm, Hauteur : ' + htrinput + ' mm.');
  localStorage.setItem("largeur", lrginput); // Stocke en données local chez le client la largeur entré par l'utilisateur.
  localStorage.setItem("hauteur", htrinput); // Stocke en données local chez le client la hauteur entré par l'utilisateur.

  let cookielargeur = localStorage.getItem("largeur"); // Récupère la donnée local pour la largeur.
  let cookiehauteur = localStorage.getItem("hauteur"); // Récupère la donnée local pour la hauteur

  let largeursetting = document.getElementById("lrg_setting"); // Récupere le champs lrg_setting dans mon html
  let hauteursetting = document.getElementById("htr_setting"); // Récupere le champs htr_setting dans mon html

  $(largeursetting).html("Largeur de votre géometrie: " + cookielargeur + 'mm'); // Ajoute dans mon html les données stocké en local.
  $(hauteursetting).html("Hauteur de votre géometrie: " + cookiehauteur + 'mm'); // Ajoute dans mon html les données stocké en local.

  if(cookielargeur <= 0 || cookiehauteur <=0) {
    alert('Désolé mais vos paramètre ne respectent pas les dimension minimum');
  }
})

// Je vais devoir probablement arriver à la fin du scope de ma fonction et devoir en sortir afin de créer une nouvelle fonction global pour me permettre de pouvoir créer de nouvelles choses comme le triangle et cercle.
})









