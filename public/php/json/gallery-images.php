<?php

require_once '_json.php';
//require_once '../sql/_db.php';

const RESULT_OK = 0;
const RESULT_ERROR = 1;

const ROOT_FOLDER = "../../images/photos";
const ROOT_FOLDER_ABS = "http://www.sarka-tomas.cz/images/photos";

$result = Array(
    "result" => RESULT_ERROR,
    "errorDescription" => "General error."
);

//if (!array_key_exists("folder", $_BODY)) {
//    $_BODY["folder"] = "../../images/photos";
//}

$files = scandir(ROOT_FOLDER . DIRECTORY_SEPARATOR . "small");

$arr = Array();

foreach ($files as $file) {
    if ($file != "."
            && $file != ".."
            && !is_dir(ROOT_FOLDER . DIRECTORY_SEPARATOR . "small" . DIRECTORY_SEPARATOR . $file)
            && preg_match('/^.+\\.jpe?g/i', $file)) {
        $file_original = ROOT_FOLDER_ABS . DIRECTORY_SEPARATOR . "small" . DIRECTORY_SEPARATOR . $file;
        $file_thumb = ROOT_FOLDER_ABS . DIRECTORY_SEPARATOR . "small" . DIRECTORY_SEPARATOR . $file;
        
        if (is_file(ROOT_FOLDER . DIRECTORY_SEPARATOR . "thumbnails" . DIRECTORY_SEPARATOR . "tn_" . $file)) {
            $file_thumb = ROOT_FOLDER_ABS . DIRECTORY_SEPARATOR . "thumbnails" . DIRECTORY_SEPARATOR . "tn_" . $file;
        }
        
        $arr[] = Array(
            "original" => $file_original,
            "thumbnail" => $file_thumb
        );
    }
}

$result = Array(
    "result" => RESULT_OK,
    "data" => $arr
);

//db_disconnect();

echo json_encode($result);