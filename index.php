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
        <p style="display:flex; justify-content:center; text-decoration: underline; font-size:20px;">Établi version 0.1</p>
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
            <p class="text-center"> - Paramètres de votre géometrie choisis - <br><br><small>Attention : Pour une découpe préciseTout vos paramètres doivent être en milimètre</p>
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
                    <button type="button" class="btn btn-primary" id="validate">Valider</button>
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
            <canvas class="drawing_pad" style="width: 100%; height: 100%;" id="myCanvas"></canvas>
            </div>
            <div class="col-lg-4 col-12 setting_patern"></div>
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


<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/3b619f6117.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href='css/app.css'>
<script src='js/fabric.min.js'></script>
<script src='js/canvastosvg.js'></script>
<script src="js/app.js"></script>


</body>
</html>