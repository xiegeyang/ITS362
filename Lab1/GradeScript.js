function input_onfocus(id) {
    input = document.getElementById(id);
    if(input.value  == id) { 
        input.value = ''; 
    } 
}
function input_onblur(id) {
    input = document.getElementById(id);
    if(input.value == '') { 
        input.value = id; 
    } 
}