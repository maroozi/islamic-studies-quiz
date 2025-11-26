// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Year 2 - We Are Muslims Questions
const questions = [
    {
        question: "🌟 Who is the only true God that Muslims worship?",
        answers: ["Allah ﷻ", "The sun", "A statue", "The moon"],
        correctIndex: 0,
        explanation: "Muslims believe that only Allah ﷻ is the true God."
    },
    {
        question: "💛 Does Allah ﷻ have any partners?",
        answers: ["Yes", "No", "Sometimes", "Only on Fridays"],
        correctIndex: 1,
        explanation: "Allah ﷻ is One and has no partners."
    },
    {
        question: "📖 Who was the final prophet sent by Allah ﷻ?",
        answers: ["Prophet Adam", "Prophet Nūh", "Prophet Muhammad ﷺ", "Prophet Mūsā"],
        correctIndex: 2,
        explanation: "Prophet Muhammad ﷺ is the final prophet."
    },
    {
        question: "🌙 Will there be any prophets after Prophet Muhammad ﷺ?",
        answers: ["Yes, many", "Only one", "No, he is the final prophet", "Maybe"],
        correctIndex: 2,
        explanation: "Muslims believe Prophet Muhammad ﷺ is the last prophet."
    },
    {
        question: "🌟 Who revealed the Qur'an to Prophet Muhammad ﷺ?",
        answers: ["The people", "The angels randomly", "Allah ﷻ", "The birds"],
        correctIndex: 2,
        explanation: "Allah ﷻ revealed the Qur'an through Angel Jibrīl."
    },
    {
        question: "📘 What does the Qur'an teach us?",
        answers: ["How to play games", "How to live our lives in the best way", "How to draw pictures", "How to cook food"],
        correctIndex: 1,
        explanation: "The Qur'an guides us in how to live."
    },
    {
        question: "❤️ How do we try to please Allah ﷻ?",
        answers: ["By doing good and following what He tells us", "By shouting", "By being rude", "By breaking rules"],
        correctIndex: 0,
        explanation: "We please Allah ﷻ by doing good."
    },
    {
        question: "👫 How should we treat other people?",
        answers: ["Be unkind", "Ignore them", "Be caring and respectful", "Only be nice to friends"],
        correctIndex: 2,
        explanation: "Islam teaches kindness and respect."
    },
    {
        question: "🐱 How should we treat animals?",
        answers: ["Hurt them", "Be kind and gentle to them", "Chase them", "Ignore them"],
        correctIndex: 1,
        explanation: "Animals, like cats, are Allah's creation and must be treated kindly."
    },
    {
        question: "🌳 How should we treat nature and the world around us?",
        answers: ["Throw rubbish everywhere", "Look after it and keep it clean", "Break the trees", "Pollute the water"],
        correctIndex: 1,
        explanation: "Muslims should care for the environment."
    },
    {
        question: "💚 Why is Prophet Muhammad ﷺ important?",
        answers: ["He is a famous athlete", "He is the perfect example for Muslims to follow", "He is a storyteller only", "He discovered countries"],
        correctIndex: 1,
        explanation: "Prophet Muhammad ﷺ taught us how to live."
    },
    {
        question: "🕌 If we follow the Qur'an and are kind to Allah's creation, what may Allah ﷻ allow us to enter?",
        answers: ["A zoo", "A castle", "Jannah (Paradise)", "A spaceship"],
        correctIndex: 2,
        explanation: "Good Muslims hope to enter Jannah."
    }
];

// Quiz State Variables
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backToHomeBtn = document.getElementById('backToHome');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const backHomeBtn = document.getElementById('backHome');
const progressBar = document.getElementById('progressBar');
const questionNumber = document.getElementById('questionNumber');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const explanation = document.getElementById('explanation');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
if (backToHomeBtn) backToHomeBtn.addEventListener('click', () => window.history.back());
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
if (backHomeBtn) backHomeBtn.addEventListener('click', () => window.history.back());

// Start Quiz
function startQuiz() {
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    score = 0;
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Update question number and score
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    scoreDisplay.textContent = `Score: ${score}/${shuffledQuestions.length} ⭐`;
    
    // Display question
    questionText.textContent = question.question;
    
    // Shuffle and display answers
    const shuffledAnswers = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    const randomizedAnswers = shuffleArray(shuffledAnswers);
    
    answersContainer.innerHTML = '';
    randomizedAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.dataset.index = answer.originalIndex;
        button.addEventListener('click', () => selectAnswer(answer.originalIndex, button));
        answersContainer.appendChild(button);
    });
    
    // Hide explanation and next button
    explanation.style.display = 'none';
    nextBtn.style.display = 'none';
}

// Select Answer
function selectAnswer(selectedIndex, selectedButton) {
    const question = shuffledQuestions[currentQuestionIndex];
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    allButtons.forEach(btn => btn.classList.add('disabled'));
    
    // Check if answer is correct
    if (selectedIndex === question.correctIndex) {
        selectedButton.classList.add('correct');
        score++;
        scoreDisplay.textContent = `Score: ${score}/${shuffledQuestions.length} ⭐`;
    } else {
        selectedButton.classList.add('wrong');
        // Highlight correct answer
        allButtons.forEach(btn => {
            if (parseInt(btn.dataset.index) === question.correctIndex) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Show explanation
    explanation.innerHTML = `<strong>💡 Did you know?</strong><br>${question.explanation}`;
    explanation.style.display = 'block';
    
    // Show next button
    nextBtn.style.display = 'inline-block';
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = questions.length - score;
    
    // Show stars based on performance
    const starsDisplay = document.getElementById('starsDisplay');
    if (percentage >= 90) {
        starsDisplay.textContent = '⭐⭐⭐';
    } else if (percentage >= 70) {
        starsDisplay.textContent = '⭐⭐';
    } else {
        starsDisplay.textContent = '⭐';
    }
    
    const performanceMessage = document.getElementById('performanceMessage');
    
    if (percentage >= 90) {
        performanceMessage.textContent = '🌟 Amazing! You are a star student! 🌟';
        performanceMessage.style.color = '#56ab2f';
    } else if (percentage >= 70) {
        performanceMessage.textContent = '🎉 Great job! Keep learning! 🎉';
        performanceMessage.style.color = '#f093fb';
    } else if (percentage >= 50) {
        performanceMessage.textContent = '👍 Good try! Practice makes perfect! 👍';
        performanceMessage.style.color = '#f5576c';
    } else {
        performanceMessage.textContent = '💪 Keep trying! You can do it! 💪';
        performanceMessage.style.color = '#eb3349';
    }
}

// Reset Quiz
function resetQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
}
