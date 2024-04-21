let currentQuestion = 0;
let rightAnswers = 0;
let selectedAnswer = [];
let selectedCurrentAnswer = [];
let rightAnswersComplete = {}
let questionsComplete = []
let name ;


function init(array) {
  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("content").classList.remove("d-none");
  document.getElementById("questions").classList.remove("d-none");
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
  if(question["img"]){
    document.getElementById("question-img").setAttribute("src", question["img"]) 
  }else if (!question["img"]){
    document.getElementById("question-img").setAttribute("src", " ")
  }
  showTotal(array);
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
    questionsComplete.push(true)
    checkSolvedQuestions()
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

function completePSA(){
  rightAnswersComplete["PSA"] = true
  document.getElementById("content").classList.add("d-none")
  document.getElementById("reading").classList.add("d-none")
  document.getElementById("buttons").classList.remove("d-none");
  document.getElementById("psa-btn").disabled = true
  questionsComplete.push(true)
  loadResult()
}
function completeLadders(){
  rightAnswersComplete["Ladders"] = true
  document.getElementById("content").classList.add("d-none")
  document.getElementById("reading").classList.add("d-none")
  document.getElementById("buttons").classList.remove("d-none");
  document.getElementById("ladders-btn").disabled = true
  questionsComplete.push(true)
  loadResult()
}

function checkSolvedQuestions(){
  if(questionsComplete.length >= 3){
    document.getElementById("psa-btn").disabled = false
    document.getElementById("ladders-btn").disabled = false
  }
}

function loadResult(){
  if(questionsComplete.length == 5){
    pdf()
    document.getElementById("buttons").classList.add("d-none")
    document.getElementById("content").classList.remove("d-none")
    document.getElementById("content").innerHTML = /*HTML*/`
    <p class="end">Schulung/Unterweisung beendet</p>
    `
  }
}

function saveName(){
  inputName = document.getElementById("floatingInputValue").value
  if(inputName !== ""){
    name = inputName;
    document.getElementById("buttons").classList.remove("d-none");
    document.getElementById("name").classList.add("d-none");
  }
}

function capitalizeWords() {
  let value = document.getElementById("floatingInputValue").value
  let words = value.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  
  return words.join(" ");
}

