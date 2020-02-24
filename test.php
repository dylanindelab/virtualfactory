
   
<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Virtual Factory - Établi 0.1</title>
</head>
<body>

<header>
    <div class="first_title">
        <p style="display:flex; justify-content:center; text-decoration: underline; font-size:20px;">Établi version 0.1 </p>
        <a href="index.php" style="display:flex; justify-content:center"><i class="fas fa-home"></i></a>
    </div>
</header>


<div class="first_select">
    <div class="container">
      <h2> - Choix de la géométrie de base - </h2>
    <div class="item_select row">
        <div class="col-lg-3 col-12 item_square">
            <button class="button" id="square_button"><i class="fas fa-square"></i></button>
        </div>

        <div class="col-lg-3 col-12 item_triangle">
            <button class="button"><i class="fas fa-caret-up"></i></button>
        </div>

        <div class="col-lg-3 col-12 item_circle">
            <button class="button"><i class="fas fa-circle"></i></button>
        </div>

        <div class="col-lg-3 col-12 item_t">
            <button class="button"><i class="fas fa-wave-square"></i></button>
        </div>
    </div>
    </div>
</div>

<div class="screen_settings">


<div class="set_size square_size" id="square_size">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="text-center"> - Paramètres de votre géometrie choisis - </p>
            </div>
            <div class="col-12">
                <small class="small_warning">Attention : Pour une découpe précise tout vos paramètres doivent être en milimètres</small>
            </div>
            <div class="setting">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Largeur<small> en milimètres</small></label>
                        <input type="number" class="form-control" id="largeurinput" aria-describedby="emailHelp" placeholder="Largeur de votre carré">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Hauteur<small> en milimètres</small></label>
                        <input type="number" class="form-control" id="hauteurinput" placeholder="Hauteur de votre carré">
                    </div>
                    <button type="button" class="btn btn-primary" id="validate_square">Valider</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="set_size triangle_size">
    <div class="container">
        <div class="row">
            <p class="text-center"> - Paramètres de votre choix - </p>
            <div class="setting">Bloc de paramètres</div>
        </div>
    </div>
</div>
<div class="set_size circle_size">
    <div class="container">
        <div class="row">
            <p class="text-center"> - Paramètres de votre choix - </p>
            <div class="setting">Bloc de paramètres</div>
        </div>
    </div>
</div>
<div class="set_size other_size">
    <div class="container">
        <div class="row">
            <p class="text-center"> - Paramètres de votre choix - </p>
            <div class="setting">Bloc de paramètres</div>
        </div>
    </div>
</div>



<div class="pattern">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-12 screen_patern">
            <main  class="drawing_pad" id="myCanvas"></main>            
            </div>
            <div class="col-lg-4 col-12 setting_patern">
                <p class="setting_intime">Paramètres actuel</p>
                <p class="surface_type">Matière de votre surface : </p>
                <p class="surface_setting">Taille de votre surface : </p>
                <p class="lrg_setting" id="lrg_setting"></p>
                <p class="htr_setting" id="htr_setting"></p>
            </div>
        </div>
    </div>
</div>

<div class="end_block">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h3 class="tarif">Tarifs: </h3><br>
            </div>  
            <button class="export">Exporter votre fichier</button>
        </div>
    </div>
</div>

<footer>
    <div class="text-center" style="display: flex; justify-content:center;"><small>Vos données seront stocké temporairement afin de ne pas perdre votre travail.</small></div>
</footer>


<?php
include('includes/footer.php');
?>