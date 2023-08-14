const questions = [
          {
                    question: "What is the first letter in the alphabet?",
                    answers: [
                              { text: "A", correct: true },
                              { text: "B", correct: false },
                              { text: "C", correct: false },
                              { text: "D", correct: false }
                    ]
          },
          {
                    question: "What is the last letter in the alphabet?",
                    answers: [
                              { text: "A", correct: false },
                              { text: "B", correct: false },
                              { text: "C", correct: false },
                              { text: "Z", correct: true }
                    ]
          },
          {
                    question: "India is a...?",
                    answers: [
                              { text: "Dog", correct: false },
                              { text: "Cat", correct: false },
                              { text: "Country", correct: true },
                              { text: "Boy", correct: false }
                    ]
          },
          {
                    question: "How do you describe Raja Ram Mohan Roy?",
                    answer: [
                              { text: "He was a great king", correct: false },
                              { text: "He was a rich man", correct: false },
                              { text: "He was a strong king", correct: false },
                              { text: "They were 4 best friends.", correct: true }
                    ]
          }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
          currentQuestionIndex = 0;
          score = 0;
          nextButton.innerHTML = "Next";
          showQuestion()
}

function showQuestion() {
          resetState();
          let currentQuestion = questions[currentQuestionIndex];
          let questionNo = currentQuestionIndex + 1;
          questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

          currentQuestion.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerHTML = answer.text;
                    button.classList.add('btn');
                    answerButtons.appendChild(button);
                    if (answer.correct) {
                              button.dataset.correct = answer.correct;
                    }
                    button.addEventListener('click', selectAnswer);
          });
}

function resetState() {
          nextButton.style.display = 'none';
          while (answerButtons.firstChild) {
                    answerButtons.removeChild(answerButtons.firstChild);
          }
}

function selectAnswer(e) {
          const selectedBtn = e.target;
          const isCorrect = selectedBtn.dataset.correct === 'true';
          if (isCorrect) {
                    selectedBtn.classList.add('correct');
                    score++;
          } else {
                    selectedBtn.classList.add('incorrect');
          }
          Array.from(answerButtons.children).forEach(button => {
                    if (button.dataset.correct === 'true') {
                              button.classList.add('correct');
                    }
                    button.disabled = true
          });
          nextButton.style.display = "block";
}

function showScore() {
          resetState();
          questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
          nextButton.innerHTML = 'Play Again'
          nextButton.style.display = 'block'
}

function handleNextButton() {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
                    showQuestion();
          } else {
                    showScore();
          }
}

nextButton.addEventListener('click', () => {
          if (currentQuestionIndex < questions.length) {
                    handleNextButton();
          } else {
                    startQuiz()
          }
})
startQuiz()