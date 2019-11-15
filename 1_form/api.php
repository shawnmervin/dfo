<?php
$obj= json_decode($_POST['sendArray']);

if($obj[0]->email == 'andre.thivierge@dfo.global'){
    echo json_encode('dupe');
}else{
    echo json_encode('true');
}

?>