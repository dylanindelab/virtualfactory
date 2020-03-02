<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Virtual Factory - Version 0.1</title>
</head>
<body>

<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.php">Virtual Factory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="editor/index.html">Établi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">A propos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <button type="button" class="btn btn-primary">Connection - Inscription <i class="fas fa-users"></i> </button>
    </form>
  </div>
</nav>
</header>

<section class="home">

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center title_homepage">Bienvenue sur Virtual Factory</h1>
                <p class="text-center">By La Fabrique - Béthune</p>
            </div>
        </div>
    </div>

</section>
    
<?php
include('includes/footer.php');
?>