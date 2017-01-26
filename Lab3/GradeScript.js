var finalGrades;
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
    
    var labAss = new Assessment("LabAssessment", 250.0, totalLab);
    
    
    
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
    var quizAss = new Assessment("QuizAssessment", 100.0, totalQuiz);
    
    
    exam1 = parseFloat(document.getElementById("input_exam1").value);
    exam2 = parseFloat(document.getElementById("input_exam2").value);
    var totalExam = exam1 + exam2;
    var exams = [exam1, exam2];
    var examAss = new Assessment("examAssessment", 200.0, totalExam);
    
    
    project1 = parseFloat(document.getElementById("input_project1").value);
    var projectAss = new Assessment("ProjectAssessment", 100.0, project1);
   
    extra1 = parseFloat(document.getElementById("input_extra1").value);
    var extraAss = new Assessment("extraAssessment", 25.0, extra1);
   
    
    var totalPart = 0;
    var parts = [];
    for(i=1;i<=15;i++){
        tempSess = "Session " + i.toString();
        parts[i-1] = parseFloat(document.getElementById(tempSess).value);
        totalPart += parts[i-1];
    }
    var partAss = new Assessment("partAssessment", 75, totalPart);
    var grades = [labAss, quizAss, examAss, projectAss, extraAss, partAss];
    finalGrades = new FinalGrades(grades);
    var finalGrade = finalGrades.calulateGrade();
    //alert(finalGrade.toString());
    if(!checkIsNan(finalGrade)){
        var form_final = document.getElementById("form_finalGrade");
        form_final.innerHTML = "Your final grade is : " + getLevel(finalGrade);
    }
}

function saveGrades(){
    var json_string = JSON.stringify(finalGrades);
    var textForm = document.getElementById("form_json");
    textForm.innerHTML= json_string;
    document.cookie = "courseCaculate = " + json_string + ";";
    
}


function FinalGrades(assessments){
    this.assessments = assessments;
    
    this.calulateGrade = function(){
        var totalGrade = 0.0;
        var totalMaxGrade = 0.0;
        var grade = (assessments[0].earnedpoint/assessments[0].maxpoint)*0.3 + (assessments[1].earnedpoint/assessments[1].maxpoint)*0.1 + (assessments[2].earnedpoint/assessments[2].maxpoint)*0.3 + (assessments[3].earnedpoint/assessments[3].maxpoint)*0.2 + (assessments[4].earnedpoint/assessments[4].maxpoint)*0.05 +(assessments[5].earnedpoint/assessments[5].maxpoint)*0.1
        return grade * 100.00;
    }
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