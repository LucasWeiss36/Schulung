let currentQuestion = 0;
let rightAnswers = 0;
let selectedAnswer = [];
let selectedCurrentAnswer = [];

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
  showTotal(array);
}

function answerTemplate(i, array) {
  i = i + 1;
  let answers = array[currentQuestion]["answers"][`answer_${i}`];
  return /*HTML*/ `
    <div onclick="checkedBox('${i}')" class="card mb-2 answer-card p-2 d-flex flex-row">
      <input class="form-check-input me-2" type="checkbox"  id="answerCheckBox-${i}">
      <label for="answerCheckBox-${i}" id="answer-${i}">${answers}</label>
    </div>
    `;
}

function nextQuestion(array) {
  checkDuplicate();
  document.getElementById("next-btn").disabled = false;
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
  } else {
    selectedCheckBox.checked = true;
  }
  saveCurrentSelection(selection, selectedCheckBox);
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
      rightAnswers++;
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
    currentQuestion = 0;
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

function updatedBtn(array) {
  document.getElementById("but").innerHTML = `
    <span><b id="current-question">X</b> von <b id="all-questions">Y</b></span>
    <button id="next-btn" onclick="nextQuestion(${checkparameter(array)})" type="button" class="btn btn-primary" >Weiter</button>
    `;
}
