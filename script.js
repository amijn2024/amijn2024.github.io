const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const question = questions[currentQuestionIndex];
    
    questionElement.textContent = question.question;
    choicesElement.innerHTML = '';
    
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.onclick = () => selectAnswer(index);
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choiceIndex) {
    const correct = questions[currentQuestionIndex].correctAnswer;
    if (choiceIndex === correct) {
        score++;
    }
    document.querySelectorAll('.choice').forEach(button => {
        button.disabled = true;
        if (button.textContent === questions[currentQuestionIndex].choices[correct]) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    });
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
}

showQuestion();
