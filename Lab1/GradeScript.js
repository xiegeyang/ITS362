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
function checkIsNan(inputValue){
    if(isNaN(inputValue)){
        alert("Your in put is not valid.");
        return true;
    }
}

function getFinalGrade(){
    lab1 = parseFloat(document.getElementById("input_lab1").value);
    lab2 = parseFloat(document.getElementById("input_lab2").value);
    lab3 = parseFloat(document.getElementById("input_lab3").value);
    lab4 = parseFloat(document.getElementById("input_lab4").value);
    lab5 = parseFloat(document.getElementById("input_lab5").value);
    lab6 = parseFloat(document.getElementById("input_lab6").value);
    lab7 = parseFloat(document.getElementById("input_lab7").value);
    lab8 = parseFloat(document.getElementById("input_lab8").value);
    lab9 = parseFloat(document.getElementById("input_lab9").value);
    lab10 = parseFloat(document.getElementById("input_lab10").value);
    
    
    quiz1 = parseFloat(document.getElementById("input_quiz1").value);
     quiz2 = parseFloat(document.getElementById("input_quiz2").value);
     quiz3 = parseFloat(document.getElementById("input_quiz3").value);
     quiz4 = parseFloat(document.getElementById("input_quiz4").value);
     quiz5 = parseFloat(document.getElementById("input_quiz5").value);
     quiz6 = parseFloat(document.getElementById("input_quiz6").value);
     quiz7 = parseFloat(document.getElementById("input_quiz7").value);
     quiz8 = parseFloat(document.getElementById("input_quiz8").value);
     quiz9 = parseFloat(document.getElementById("input_quiz9").value);
     quiz10 = parseFloat(document.getElementById("input_quiz10").value);
    
    exam1 = parseFloat(document.getElementById("input_exam1").value);
    exam2 = parseFloat(document.getElementById("input_exam2").value);
    
    project1 = parseFloat(document.getElementById("input_project1").value);
    
    extra1 = parseFloat(document.getElementById("input_extra1").value);
    
    part1 = parseFloat(document.getElementById("Session 1").value);
    part2 = parseFloat(document.getElementById("Session 2").value);
    part3 = parseFloat(document.getElementById("Session 3").value);
    part4 = parseFloat(document.getElementById("Session 4").value);
    part5 = parseFloat(document.getElementById("Session 5").value);
    part6 = parseFloat(document.getElementById("Session 6").value);
    part7 = parseFloat(document.getElementById("Session 7").value);
    part8 = parseFloat(document.getElementById("Session 8").value);
    part9 = parseFloat(document.getElementById("Session 9").value);
    part10 = parseFloat(document.getElementById("Session 10").value);
    part11 = parseFloat(document.getElementById("Session 11").value);
    part12 = parseFloat(document.getElementById("Session 12").value);
    part13 = parseFloat(document.getElementById("Session 13").value);
    part14 = parseFloat(document.getElementById("Session 14").value);
    part15 = parseFloat(document.getElementById("Session 15").value);
    
    finalGrade = (lab1 + lab2 + lab3 + lab4 + lab5 + lab6 + lab7 + lab8 + lab9 + lab10)*0.3 +(quiz1 + quiz2 + quiz3 + quiz4 + quiz5 + quiz6 + quiz7 + quiz9 + quiz10)*0.1 + (exam1 + exam2)*0.3 + project1*0.2 + extra1*0.05 + (part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9 + part10 + part11 + part12 + part13 + part14 + part15)*0.1;
    
    if(!checkIsNan(finalGrade))
        alert(finalGrade.toString());
}