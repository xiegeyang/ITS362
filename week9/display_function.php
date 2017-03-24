<?php
	function display($nameValues){
		foreach($nameValues as $ name => $value){
			echo $name . ": " . $value . "<br />";
		}
	}
?>
