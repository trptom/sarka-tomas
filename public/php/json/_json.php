<?php

header('Content-type: application/json');

$_BODY = json_decode(file_get_contents('php://input'), true);