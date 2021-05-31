<?php

require_once '_json.php';
require_once '../sql/_db.php';

const RESULT_OK = 0;
const RESULT_ERROR = 1;

$result = Array(
    "result" => RESULT_ERROR,
    "errorDescription" => "General error."
);

if (array_key_exists("guests", $_BODY)
        && array_key_exists("will_join", $_BODY)
        && array_key_exists("accomodation", $_BODY)) {
    
    for ($a=0; $a<count($_BODY["guests"]); $a++) {
        $guest = $_BODY["guests"][$a];
        
        if (array_key_exists("first_name", $guest)
                && array_key_exists("family_name", $guest)) {
    
            $fields = "first_name,family_name,will_join,accomodation,ip";
            $values = "?,?,?,?,?";
            $params = "ssiis";
            $ary = [
                $guest["first_name"],
                $guest["family_name"],
                $_BODY["will_join"],
                $_BODY["accomodation"],
                $_SERVER["REMOTE_ADDR"]
            ];

            if (array_key_exists("note", $_BODY)) {
                $fields .= ",note";
                $values .= ",?";
                $params .= "s";
                $ary[] = $_BODY["note"];
            }

            if (array_key_exists("favourite_song", $guest)) {
                $fields .= ",favourite_song";
                $values .= ",?";
                $params .= "s";
                $ary[] = $guest["favourite_song"];
            }

            $stmt = $db_connection->prepare("INSERT INTO Guests ($fields) VALUES ($values)");
            $stmt->bind_param($params, ...$ary);

            if ($stmt->execute()) {
                $result["result"] = RESULT_OK;
                unset($result["errorDescription"]);
            } else {
                $result["errorDescription"] = "Unable to execute SQL statement for guest $a: ".$stmt->error();
            }
    
        } else {
            $result["errorDescription"] = "Missing parameter of guest $a.";
        }
    }
} else {
    $result["errorDescription"] = "Missing parameter.";
}

db_disconnect();

echo json_encode($result);