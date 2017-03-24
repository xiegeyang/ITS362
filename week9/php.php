<html>
    <body>
    

    <?php 
        $colors = array("red"=>"#FF0000", "green"=>"#00FF00", "blue" => "#0000FF");
        foreach($colors as $name=>$code){
            echo $name . ": " . $code . "<br/>";
        }

        $iterator = new ArrayIterator($colors);
        while($iterator->valid()){
            print $iterator->key() . ": " . $iterator->curremt() . "<br />";
            $iterator->next();
        }
    ?>
    </body>
</html>
