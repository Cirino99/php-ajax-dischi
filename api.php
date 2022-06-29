<?php
include_once __DIR__ . '/db/db.php';

header('Content-Type: application/json');
echo json_encode($arr_dischi);
