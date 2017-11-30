<?php
header("content-type:application/javascript;charset=utf-8");
$cb=$_REQUEST["callback"];
$json='{"name":"zhangsan","age":12}';
echo $cb."(".$json.")";


?>