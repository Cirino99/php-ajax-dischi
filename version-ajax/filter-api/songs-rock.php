<?php
include_once __DIR__ . '/../db/db.php';

$arr_dischi_rock = [];
foreach ($arr_dischi as $disco) {
    if ($disco['genre'] === 'Rock') {
        $arr_dischi_rock[] = $disco;
    }
}

header('Content-Type: application/json');
echo json_encode($arr_dischi_rock);
