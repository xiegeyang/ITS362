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

function Assessment(name, maxpoint, earnedpoint){
    this.name = name;
    this.maxpoint = maxpoint;
    this.earnedpoint = earnedpoint;
}

function getFinalGrade(){
    var totalLab = 0.0;
    var maxlab = 0.0;
    var labs = [];
    for(i=1;i<=10;i++){
        tempId = "input_lab"+i.toString();
        labs[i-1] = parseFloat(document.getElementById(tempId).value);
        totalLab += labs[i-1];
        if(maxlab<labs[i-1]){
            maxlab = labs[i-1];
        }
    }
    
    var labAss = new Assessment("LabAssessment", 30.0, totalLab/10.0);
    
    
    
    var totalQuiz = 0.0;
    var maxQuiz = 0.0;
    var quizes = [];
    for(i=1;i<=10;i++){
        tempId = "input_quiz"+i.toString();
        quizes[i-1] = parseFloat(document.getElementById(tempId).value);
        totalQuiz += quizes[i-1];
        if(maxQuiz<quizes[i-1]){
            maxQuiz = quizes[i-1];
        }
    }
    var quizAss = new Assessment("QuizAssessment", 10.0, totalQuiz/10.0);
    
    
    exam1 = parseFloat(document.getElementById("input_exam1").value);
    exam2 = parseFloat(document.getElementById("input_exam2").value);
    var totalExam = exam1 + exam2;
    var exams = [exam1, exam2];
    var examAss = new Assessment("examAssessment", 30.0, totalExam/2.0);
    
    
    project1 = parseFloat(document.getElementById("input_project1").value);
    var projectAss = new Assessment("ProjectAssessment", 20.0, project1);
   
    extra1 = parseFloat(document.getElementById("input_extra1").value);
    var extraAss = new Assessment("extraAssessment", 5.0, extra1);
   
    
    var totalPart = 0;
    var parts = [];
    for(i=1;i<=15;i++){
        tempSess = "Session " + i.toString();
        parts[i-1] = parseFloat(document.getElementById(tempSess).value);
        totalPart += parts[i-1];
    }
    var partAss = new Assessment("partAssessment", 10, totalPart/15.0);
    
    finalGrade = totalLab*0.3 +totalQuiz*0.1 + totalExam*0.3 + project1*0.2 + extra1*0.05 + totalPart*0.1;
    
    if(!checkIsNan(finalGrade)){
        var form_final = document.getElementById("form_finalGrade");
        form_final.innerHTML = "Your final grade is : " + getLevel(finalGrade);
    }
        //alert(finalGrade.toString());
}

function FinalGrade(){
    
}

function getLevel(finalGrade){
    if(finalGrade >=90){
        return "A";
    }else if(finalGrade >= 80){
        return "B";
    }else if(finalGrade >= 70){
        return "C";
    }else if(finalGrade >=60){
        return "D";
    }
    return "F";
}