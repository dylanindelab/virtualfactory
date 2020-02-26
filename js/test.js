jQuery(document).ready(function($) {

  
  /* Ajout d'une variable pour l'écran bleu (inspiré sur maker.js.org), cette variable peut prendre en compte plusieurs
     paramètres, pour voir la liste des paramètre rendez vous sur la documentation */
    let blueprint = new svgBlueprint.Blueprint({ 
    parentSelector: "canvas",
    width: '100%',
    height: '100%'
    });

    /* Initialisation de mon canvas */
    var canvasEl = document.getElementById('myCanvas');
    let canvas = new fabric.Canvas('myCanvas');
    canvas.setDimensions({width:750, height:500}); // Je prévois des dimension par defaut a mon cavnas


    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
      angle: 45
    });

    
    canvas.add(rect);

    
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

    
    /* Fin du dernier commentaire */
 }); /* Fin du document JQuery */