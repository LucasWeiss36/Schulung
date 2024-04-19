let currentQuestion = 0;
let rightAnswers = 0;
let selectedAnswer = [];
let selectedCurrentAnswer = [];
let rightAnswersComplete = {}

//* right answers für jeden frage bogen seperat 
//TODO PSA und Leitern durchlesen und bestätigungs button
//* weiter sperren wenn nichts angeklickt
//TODO pdf erstellen und download
//TODO bilder zu den fragebögen hinzufügen

function init(array) {
  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("content").classList.remove("d-none");
  updatedBtn(array);
  renderQuestionCard(array);
}

function renderQuestionCard(array) {
  const answersLength = Object.keys(array[currentQuestion]["answers"]).length;
  let question = array[currentQuestion];
  for (let i = 0; i < answersLength; i++) {
    document.getElementById("question").innerHTML = question["question"];
    document.getElementById("answers").innerHTML += answerTemplate(i, array);
  }
  document.getElementById("next-btn").disabled = true;
  showTotal(array);
  console.error(rightAnswers);
}



function nextQuestion(array) {
  checkDuplicate();
  document.getElementById("answers").innerHTML = "";
  saveSelection();
  checkAnswers(array);
  currentQuestion++;
  complete(array);
}

function checkedBox(selection) {
  let selectedCheckBox = document.getElementById(`answerCheckBox-${selection}`);
  if (selectedCheckBox.checked == true) {
    selectedCheckBox.checked = false;
    document.getElementById("next-btn").disabled = true;
  } else {
    selectedCheckBox.checked = true;
  }
  saveCurrentSelection(selection, selectedCheckBox);
  checkCheckBoxes();
  console.log(selectedCurrentAnswer);
}

function saveCurrentSelection(selection, selectedCheckBox) {
  let index = selectedCurrentAnswer.indexOf(Number(selection));
  if (selectedCheckBox.checked == true && !selectedCurrentAnswer.includes(Number(selection))) {
    selectedCurrentAnswer.push(Number(selection));
  } else if (index == -1) {
    return false
  } else if (selectedCheckBox.checked == false) {
    selectedCurrentAnswer.splice(index, 1);
  }
}

function saveSelection() {
  selectedCurrentAnswer.sort();
  selectedAnswer.push(selectedCurrentAnswer);
  selectedCurrentAnswer = [];
}

function checkDuplicate() {
  selectedCurrentAnswer = selectedCurrentAnswer.filter((element, index) => {
    return selectedCurrentAnswer.indexOf(element) === index;
  });
  selectedCurrentAnswer;
}

function checkAnswers(array) {
  let right = array[currentQuestion]["right_answer"];
  console.log("right answer: " + right);
  if (right.length !== selectedAnswer[currentQuestion].length) {
    return false;
  }
  for (let i = 0; i < selectedAnswer.length; i++) {
    if (right[i] == selectedAnswer[currentQuestion][i]) {
      rightAnswers += 1;
      return true;
    } else {
      return false;
    }
  }
 
}

function showTotal(array) {
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
  document.getElementById("all-questions").innerHTML = array.length;
}

function complete(array) {
  if (currentQuestion == array.length) {
    document.getElementById("buttons").classList.remove("d-none");
    document.getElementById("content").classList.add("d-none");
    document.getElementById(`${checkparameter(array)}-btn`).disabled = true;
    setAnswersValues(rightAnswersComplete, array)
    currentQuestion = 0;
    rightAnswers = 0
    selectedAnswer = []
    console.log(rightAnswersComplete);
  } else {
    renderQuestionCard(array);
  }
}

function checkparameter(array) {
  if (array == forklift) {
    return "forklift";
  } else if (array == liftingplatform) {
    return "liftingplatform";
  } else if (array == occupationalsafety) {
    return "occupationalsafety";
  }
}

function checkCheckBoxes(){
  for (let i = 0; i < selectedCurrentAnswer.length; i++) {
    if (selectedCurrentAnswer.indexOf(i)){
    document.getElementById("next-btn").disabled = false;
    }
  }
}

function setAnswersValues(obj, array){
  obj[checkparameter(array)] = rightAnswers;
}

function renderPSA(){
  document.getElementById("questions").classList.add("d-none")
  document.getElementById("content").classList.remove("d-none")
  document.getElementById("reading").classList.remove("d-none")
  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("reading").innerHTML = HTMLTemplatePSA();
}

function renderLadders(){
  document.getElementById("questions").classList.add("d-none")
  document.getElementById("content").classList.remove("d-none")
  document.getElementById("reading").classList.remove("d-none")
  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("reading").innerHTML = HTMLTemplateLadders();
}