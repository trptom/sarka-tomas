<?php

require '_db.php';

$sql =
        "CREATE TABLE Guests (".
        "    id int not null primary key auto_increment,".
        "    first_name varchar(64) not null,".
        "    family_name varchar(64) not null,".
        "    will_join bool not null,".
        "    accomodation int not null,".
        "    note text null default null,".
        "    favourite_song text null default null,".
        "    ip varchar(16) not null,".
        "    created_at timestamp not null default current_timestamp".
        ");";

if ($db_connection->query($sql)) {
    echo "Table Guests created.";
} else {
    echo "Table Guests not created. Error: " . $db_connection->error;
}

db_disconnect();