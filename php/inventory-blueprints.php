<?php
/**
 * Created by PhpStorm.
 * User: htz-joh
 * Date: 17/10/16
 * Time: 19:23
 */

$blueprintsJson = file_get_contents('../assets/values/blueprints.json');
$blueprints = json_decode($blueprintsJson);

//print_r($blueprints);
$components = array();
foreach($blueprints as $blueprintId => $blueprint) {
    foreach($blueprint->recipes as $recipeGrade => $recipe) {
        foreach($recipe->components as $component => $ignore) {
            $components[$component][$blueprintId] = array(
                'name'=>$blueprint->name,
                'module'=>$blueprint->module,
                'grade'=>$recipeGrade,
            );
        }
    }
}
print_r($components);
$file = fopen('../assets/values/ingredient-blueprints.json', 'w');
fwrite($file, json_encode($components));
fclose($file);