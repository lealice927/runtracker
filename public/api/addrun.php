<?php
    require_once('functions.php');
    require_once('config.php');
    require_once('mysqlconnect.php');
    require_once('checkuserloggedin.php');
    set_exception_handler('handleError');

    $json_input = file_get_contents("php://input");
    $input = json_decode($json_input, true);

    $runOutput = [
        "success"=> false,
    ];

    $distance = $input['distance'];
    $time = (int)$input['time'];
    $pace = (int)$input['pace'];
    $calories = (int)$input['calories'];
    $user_id = $_SESSION['user_data']['id'];
    $run_id = (int)$input['run_id'];

    // $addRunQuery = "INSERT INTO `run_stats` SET `distance` = ROUND($distance,2), `time` = $time, `pace` = $pace, `date` = NOW(), `heart_rate` = 0, `calories` = $calories, `user_id` = $user_id";

    $addRunQuery = "UPDATE `run_stats` SET `distance` = ROUND($distance,2), `time` = $time, `pace` = $pace, `date` = NOW(), `heart_rate` = 0,
                    `calories` = $calories, `user_id` = $user_id
                    WHERE `id` = $run_id
    ";

    $runResult = mysqli_query($conn, $addRunQuery);



    if(!$runResult){
        throw new Exception(mysqli_error($conn));
    }
    if(mysqli_affected_rows($conn)===0)
        {
            throw new Exception('Run was not added to the table');
        }
    // $run_id = mysqli_insert_id($conn);

    $runOutput['success'] = true;

    print(json_encode($runOutput));
