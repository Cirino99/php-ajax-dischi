<?php
include_once __DIR__ . '/../db/db.php';

$arr_dischi_jazz = [];
foreach ($arr_dischi as $disco) {
    if ($disco['genre'] === 'Jazz') {
        $arr_dischi_jazz[] = $disco;
    }
}

header('Content-Type: application/json');
echo json_encode($arr_dischi_jazz);
