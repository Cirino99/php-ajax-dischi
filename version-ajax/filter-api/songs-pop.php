<?php
include_once __DIR__ . '/../db/db.php';

$arr_dischi_pop = [];
foreach ($arr_dischi as $disco) {
    if ($disco['genre'] === 'Pop') {
        $arr_dischi_pop[] = $disco;
    }
}

header('Content-Type: application/json');
echo json_encode($arr_dischi_pop);
