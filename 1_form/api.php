<?php

if($_POST['email'] == 'andre.thivierge@dfo.global'){
    echo json_encode("This email is already in the system");
}else{
    echo json_encode(true);
}

?>