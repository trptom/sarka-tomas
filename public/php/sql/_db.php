<?php

const DB_SERV = "localhost";
const DB_NAME = "wedding";
const DB_USER = "wedding";
const DB_PASS = "sarka-tomas-1234*";

$db_connection = new mysqli(DB_SERV, DB_USER, DB_PASS);

if ($db_connection->connect_error) {
    $db_connection = null;
} else {
    $db_connection->select_db(DB_NAME);
}

function db_disconnect() {
    global $db_connection;
    
    if ($db_connection != null) {
        $db_connection->close();
        $db_connection = null;
    }
}