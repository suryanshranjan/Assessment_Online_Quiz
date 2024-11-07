const questions = [
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsForm = document.getElementById("options-form");
  optionsForm.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
    optionsForm.appendChild(optionElement);
  });

  document.getElementById("previous-button").style.display =
    currentQuestionIndex === 0 ? "none" : "inline";
  document.getElementById("next-button").style.display =
    currentQuestionIndex < questions.length - 1 ? "inline" : "none";
  document.getElementById("submit-button").style.display =
    currentQuestionIndex === questions.length - 1 ? "inline" : "none";
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
      score += 10;
    }
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert("Please select an answer.");
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function submitQuiz() {
  console.log("Submit button clicked");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const resultMessage = document.getElementById("result-message");

  scoreElement.innerText = score;
  const percentage = (score / (questions.length * 10)) * 100;

  console.log("Score: ", score);
  console.log("Percentage: ", percentage);

  if (percentage >= 70) {
    result-message.innerHTML = "Congratulations! You passed the quiz.";
  } else {
    result-message.innerHTML =
      "Unfortunately, you did not pass the quiz. Better luck next time!";
  }

  document.getElementById("quiz-container").style.display = "none";
  resultElement.style.display = "block";
}

loadQuestion();
