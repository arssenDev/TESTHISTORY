

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answers');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const next = document.getElementById('next');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
  answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer;

  answerElements.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id;
      }
  });

  return answer;
}

next.addEventListener('click', () => {
  const answer = getSelected();

  if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++;
      }

      currentQuiz++;

      if(currentQuiz < quizData.length){
          loadQuiz();
      }
      else {
        quiz.innerHTML = `<div class="quiz__result">
          <h2 style="color: #ffffff; font-size: 28px;text-align: center; margin-bottom: 20px;">Вы ответили правильно на ${score} из ${quizData.length} вопросов</h2> 
          <button onclick="location.reload()" style="background-color: #007bff; position:relative; left:100px; color: #fff; font-size: 16px; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Заново</button>
        </div>`;
      }
  }
});
function loadQuiz() {
  deselectAnswers();

  // Shuffle quiz data array to randomize the questions
  quizData.sort(() => Math.random() - 0.5);

  const currentQuizData = quizData[currentQuiz];

  // Shuffle the answer options for the current question
  const shuffledAnswers = shuffleArray([
    currentQuizData.a,
    currentQuizData.b,
    currentQuizData.c,
  ]);

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = shuffledAnswers[0];
  b_text.innerText = shuffledAnswers[1];
  c_text.innerText = shuffledAnswers[2];
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

