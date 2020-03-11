<?php
    //  Initiate curl
    $url = "https://broeders.com.ar/contacto/wp-json/wp/v2/proyectos";
    $ch = curl_init();
    // Will return the response, if false it print the response
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // Set the url
    curl_setopt($ch, CURLOPT_URL,$url);
    // Execute
    $result=curl_exec($ch);
    // Closing
    curl_close($ch);
    
    $desarrollos = json_decode($result, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SK2</title>
    <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700,700i,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
    <script
    src="https://code.jquery.com/jquery-3.4.1.js"
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/6936f4c3fb.js" crossorigin="anonymous"></script>
    <script src="js/bundled/html4+html5/jquery.history.js"></script>
    <script src="js/index.js"></script>
    <script src="js/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.waitforimages/1.5.0/jquery.waitforimages.min.js"></script>
</head>
<body>
  <img src='img/sk2.png' id='logoloader' style=''>
  <img src="img/new.svg" id="loader" style="">
  <div class="work"></div>
  <div class="webnav">
    <div class="webnav-img-container">
       <img src="img/sk2single.png"> 
    </div>
    <div class="menuwebnav">
        <span data-page="home">HOME</span>
        <span data-page="desarrollos">DESARROLLOS</span>
        <span data-page="about">NOSOTROS</span>
        <span data-page="contacto">CONTACTO</span>
    </div>
  </div>
  <h2 class="websitetitle">SK2 D E S A R R O L L O S</h2>
    <div class="root">
        <?php include 'partes/navbar.php';?>
        <?php include 'partes/home.php';?>
        <?php include 'partes/desarrollos.php';?>
        <?php include 'partes/id-desarrollo.php';?>
        <?php include 'partes/about.php';?>
        <?php include 'partes/contacto.php';?>
        <?php include 'partes/footer.php';?>
    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"></script>
<script src="js/three.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/hover-effect.umd.js"></script>
<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
</body>
</html>

