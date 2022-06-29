<?php
include_once __DIR__ . '/db/db.php';

$genere = isset($_GET['genere']) ? $_GET['genere'] : 'All';
if ($genere !== 'All') {
    $arr_dischi_filter = [];
    foreach ($arr_dischi as $disco) {
        if ($disco['genre'] === $genere) {
            $arr_dischi_filter[] = $disco;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($arr_dischi_filter);
} else {
    header('Content-Type: application/json');
    echo json_encode($arr_dischi);
}
