<?php
/**
 * Created by PhpStorm.
 * User: htz-joh
 * Date: 17/10/16
 * Time: 19:23
 */

$blueprintsJson = file_get_contents('../assets/values/blueprints.json');
$blueprints = json_decode($blueprints);

print_r($blueprints);