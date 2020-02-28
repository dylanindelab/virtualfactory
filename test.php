<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Etabli 0.2</title>
</head>
<body>

<!-- <div class='loader_screen' id='loader'>
    <div class="loader"></div>*
</div> -->

<div class="container">

<div class="icons"> 
  <a class="icon -menu">
    <span></span>
    <span></span>
    <span></span>
  </a>  
</div>

<div class="first_choise_pattern">
    <div class="col-12 select_shape">
        <div class="row">
        <div class="col-3 shape">
            <img class="img_fluid square_shape" src='img/square.svg'>
        </div>
        <div class="col-3 shape">
            <img class="img_fluid circle_shape" src='img/circle.svg'>
        </div>
        <div class="col-3 shape">
            <img class="img_fluid triangle_shape" src='img/triangle.svg'>
        </div>
        <div class="col-3 shape">
            <img class="img_fluid draw_shape" src='img/draw.svg'>
        </div>
        </div>
    </div>
</div>

<div class="setting_pattern">

    <div class="row">
        <div class="col-lg-12">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Largeur :</label>
                    <input type="text" class="form-control" id="largeurinput" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">Votre largeur doit être au minimum de 40mm.</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Hauteur :</label>
                    <input type="text" class="form-control" id="hauteurinput">
                    <small id="emailHelp" class="form-text text-muted">Votre hauteur doit être au minimum de 40mm.</small>
                </div>
  
                
            </form>
            <button  class='submitshape' type="button">Valider</button>
        </div>
    </div>
</div>


<div class="general_pattern">
    <div class="row">
            <div class="col-lg-8 col-12">
                <canvas id='myCanvas' class="draw_pattern">
                    <div></div>
                </canvas>
            </div>
            <div class="col-lg-4 col-12">
                <div class="set_pattern">
                    <p id="lrg_setting"></p>
                    <p id="htr_setting"></p>
                    <p id="surface_setting"></p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 text-right">
            <button class="export" type="submit">Exportez votre fichier</button>
        </div>
    </div>
</div>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="https://unpkg.com/svg-blueprint"></script>

<script src="js/fabric.min.js"></script>
<script src='js/test.js'></script>
<link rel='stylesheet' href='css/app.min.css'>


</body>
</html>