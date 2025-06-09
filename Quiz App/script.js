const quizData = [
  {
    question: "What vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correct: "Vitamin D"
  },
  {
    question: "Which organ is primarily affected by hepatitis?",
    options: ["Liver", "Heart", "Kidneys", "Lungs"],
    correct: "Liver"
  },
  {
    question: "What is the normal resting heart rate for adults?",
    options: ["60-100 bpm", "30-50 bpm", "100-120 bpm", "120-150 bpm"],
    correct: "60-100 bpm"
  },
  {
    question: "Which food is rich in iron?",
    options: ["Spinach", "Rice", "Milk", "Apples"],
    correct: "Spinach"
  },
  {
    question: "What does BMI stand for?",
    options: [
      "Body Mass Index",
      "Blood Measurement Indicator",
      "Bone Muscle Index",
      "Body Marker Indicator"
    ],
    correct: "Body Mass Index"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = data.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

function checkAnswer(btn) {
  const selected = btn.textContent;
  const correct = quizData[currentQuestion].correct;

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    optionBtns.forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }

  optionBtns.forEach(b => b.disabled = true);
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.textContent = score;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizEl.classList.remove("hide");
  resultEl.classList.add("hide");
  loadQuestion();
}

loadQuestion();
