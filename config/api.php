<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    include_once 'dtb.cfg.php';
    
    if(isset($_REQUEST["get_pages"])){
        $datos = $_REQUEST["get_pages"];
        if($datos == "home" || $datos == "contacto" || $datos == "about"){
            echo json_encode(file_get_contents(__DIR__."/../partes/".$datos.".php"));
        }else{
            $query= "SELECT contenido FROM paginas WHERE nombre= ?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param('s', $datos);
            $stmt->execute();
            $result = $stmt->get_result();
    
            while($row = $result->fetch_all(MYSQLI_ASSOC)){
                $data = json_encode($row);
                echo $data;
            }
        }
        exit;
    }
?>