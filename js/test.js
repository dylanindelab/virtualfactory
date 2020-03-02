jQuery(document).ready(function($) {

  /* Ajout d'une variable pour l'écran bleu (inspiré sur maker.js.org), cette variable peut prendre en compte plusieurs
     paramètres, pour voir la liste des paramètre rendez vous sur la documentation */
    // let blueprint = new svgBlueprint.Blueprint({ 
    // parentSelector: "canvas",
    // width: '100%',
    // height: '100%'
    // });

    /* Initialisation de mon canvas */
    var canvasEl = document.getElementById('myCanvas');
    let canvas = new fabric.Canvas('myCanvas');
    canvas.setDimensions({width:750, height:500}); // Je prévois des dimension par defaut a mon cavnas
    let canvasGrid = 50;



    
    /* Dès que l'on click sur l'icon menu, on ajoute une class .active a la class .icon, ce qui permettera d'activer l'animation */
    $('.icon').on('click', function() {
        $(this).toggleClass('active');
        $('.select_shape').toggleClass('active');
      });




    /* Pour chaque une des formes présente dans la barre de choix (premier select) nous allons ajoutez un class active, ce qui nous
    permettera plus tard, de savoir quelle forme et actuellement en cours d'édition */
    $('.shape').on('click', function(){
      $('.setting_pattern').toggleClass('active');
    })




    $('.square_shape').on('click', function(){
      $('.submitshape').on('click', function(){
        var rect = new fabric.Rect({
          left: 100,
          top: 100,
          fill: 'red',
          width: 40,  // Les dimension par default sont de 30px par 30px (relative)
          height: 40, // Les dimension par default sont de 30px par 30px (relative)
          angle: 45
        });

        canvas.add(rect);

        rect.on('scaling',function(){
          let widthscale = parseInt(this.getScaledWidth())
          let heightscale = parseInt(this.getScaledHeight())
          
          // console.log("Largeur de : " + widthscale);
          // console.log("Hauteur de : " + heightscale);

          let htrinput = $("#hauteurinput").val(); // On récupere la valeur taper dans le input hauteur. Brut en milimetre et non relatif (ce qui et afficher a l'écran)
          let lrginput = $("#largeurinput").val();

          localStorage.setItem("largeur", lrginput); // Stocke en données local chez le client la largeur entré par l'utilisateur.
          localStorage.setItem("hauteur", htrinput); // Stocke en données local chez le client la hauteur entré par l'utilisateur.

          let cookielargeur = localStorage.getItem("largeur"); // Récupère la donnée local pour la largeur.
          let cookiehauteur = localStorage.getItem("hauteur"); // Récupère la donnée local pour la hauteur

          let largeursetting = document.getElementById("lrg_setting"); // On récupère les champs d'affichage
          let hauteursetting = document.getElementById("htr_setting"); // On récupère les champs d'affichage
          let surfacesetting = document.getElementById("surface_setting") // On récupère les champs d'affihage

          let largeurenmm = parseFloat(widthscale * cookielargeur / 40).toPrecision(6); // On calcule la conversion PX -> MM
          let hauteurenmm = parseFloat(heightscale * cookiehauteur / 40).toPrecision(6); // On calcule la coinverion PX -> MM 
          let surfaceenmm = parseFloat(widthscale * heightscale).toPrecision(6);

          $(largeursetting).html("Largeur de votre géometrie: " + largeurenmm + 'mm'); // Ajoute dans mon html les données stocké en local.
          $(hauteursetting).html("Hauteur de votre géometrie: " + hauteurenmm + 'mm'); // Ajoute dans mon html les données stocké en local.         
          $(surfacesetting).html("Surface de votre géometrie: " + surfaceenmm + 'mm'); // Ajoute dans mon html les données stocké en local.         
         });
    
      })
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