<?php

require_once '_json.php';
require_once '../sql/_db.php';

foreach ($_BODY as $param_name => $param_val) {
    echo "Param: $param_name; Value: $param_val<br />\n";
    echo "Isset $param_name: ".array_key_exists($param_name, $_BODY);
}

const RESULT_OK = 0;
const RESULT_ERROR = 1;

$result = Array(
    "result" => RESULT_ERROR,
    "errorDescription" => "General error."
);

if (array_key_exists("first_name", $_BODY)
        && array_key_exists("family_name", $_BODY)
        && array_key_exists("will_join", $_BODY)
        && array_key_exists("accomodation", $_BODY)) {
    
    $fields = "first_name,family_name,will_join,accomodation";
    $values = "?,?,?,?";
    $params = "ssii";
    $ary = [
        $_BODY["first_name"],
        $_BODY["family_name"],
        $_BODY["will_join"],
        $_BODY["accomodation"]
    ];
    
    if (isset($_BODY["accomodation_note"])) {
        $fields .= ",accomodation_note";
        $values .= ",?";
        $params .= "s";
        $ary[] = $_BODY["accomodation_note"];
    }
    
    if (isset($_BODY["favourite_song"])) {
        $fields .= ",favourite_song";
        $values .= ",?";
        $params .= "s";
        $ary[] = $_BODY["favourite_song"];
    }
    
    $stmt = $db_connection->prepare("INSERT INTO Guests ($fields) VALUES ($values)");
    $stmt->bind_param($params, ...$ary);
    
    if ($stmt->execute()) {
        $result["result"] = RESULT_OK;
        unset($result["errorDescription"]);
    } else {
        $result["errorDescription"] = "Unable to execute SQL statement: ".$stmt->error();
    }
} else {
    $result["errorDescription"] = "Missing parameter.";
}

db_disconnect();

echo json_encode($result);