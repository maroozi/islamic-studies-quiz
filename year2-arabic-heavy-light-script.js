// Year 2 Arabic - Heavy and Light Letters
const questions = [
    {
        question: "Which of these is a heavy letter?",
        answers: ["خ", "ب", "ت", "س"],
        correctIndex: 0,
        explanation: "خ is one of the 7 heavy letters."
    },
    {
        question: "Which of these letters is light?",
        answers: ["ب", "ط", "ق", "ض"],
        correctIndex: 0,
        explanation: "ب is always light and soft."
    },
    {
        question: "Which group shows only heavy letters?",
        answers: ["خ ص ض", "ب ت ث", "س ز ش", "م ي ل"],
        correctIndex: 0,
        explanation: "All three—خ ص ض—are heavy letters."
    },
    {
        question: "Which group shows only light letters?",
        answers: ["س ش ز", "ط ظ ض", "غ ق خ", "ص ط ض"],
        correctIndex: 0,
        explanation: "س ش ز are all light letters."
    },
    {
        question: "Is the letter ق heavy or light?",
        answers: ["Heavy", "Light", "Both", "Depends"],
        correctIndex: 0,
        explanation: "ق is one of the 7 heavy letters."
    },
    {
        question: "Is the letter ف heavy or light?",
        answers: ["Light", "Heavy", "Both", "Depends"],
        correctIndex: 0,
        explanation: "ف is always light."
    },
    {
        question: "Which letter has a deep, strong sound?",
        answers: ["ط", "م", "ب", "ن"],
        correctIndex: 0,
        explanation: "ط is a heavy, deep letter."
    },
    {
        question: "Which letter sounds soft and thin?",
        answers: ["س", "ظ", "غ", "ق"],
        correctIndex: 0,
        explanation: "س is one of the light letters."
    },
    {
        question: "Which of these is NOT a heavy letter?",
        answers: ["ر", "غ", "ق", "ط"],
        correctIndex: 0,
        explanation: "ر is normally light (only heavy in advanced rules, not Year 2)."
    },
    {
        question: "Which of these letters is heavy?",
        answers: ["ض", "ي", "ك", "ل"],
        correctIndex: 0,
        explanation: "ض is one of the heaviest letters in Arabic."
    },
    {
        question: "Which of these is the correct list of heavy letters?",
        answers: [
            "خ ص ض ط ظ غ ق",
            "س ش ز ك ل م ن",
            "أ ب ت ث ج ح خ",
            "ر س ش ل م ن و"
        ],
        correctIndex: 0,
        explanation: "These seven letters are the heavy letters taught in Year 2."
    },
    {
        question: "Which of these is a light letter?",
        answers: ["م", "غ", "ط", "ق"],
        correctIndex: 0,
        explanation: "م is always soft and light."
    },
    {
        question: "Which letter makes a heavy 'gh' sound?",
        answers: ["غ", "ف", "ن", "س"],
        correctIndex: 0,
        explanation: "غ is a deep throat sound."
    },
    {
        question: "Which letter makes a strong 'qa' sound?",
        answers: ["ق", "ف", "ك", "ح"],
        correctIndex: 0,
        explanation: "ق is a deep, heavy sound from the back of the mouth."
    },
    {
        question: "Which of these is light and easy to say?",
        answers: ["ل", "ط", "ض", "ق"],
        correctIndex: 0,
        explanation: "ل is a light letter (Year 2 does not cover the 'Allah' rule)."
    }
];

// DOM Elements
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const retryButton = document.getElementById('retryButton');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
const lessonsButton = document.getElementById('lessonsButton');

const startContent = document.getElementById('startContent');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');

const questionElement = document.getElementById('question');
const answersGrid = document.getElementById('answersGrid');
const feedback = document.getElementById('feedback');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressBar = document.getElementById('progressBar');
const stars = document.getElementById('stars');
const score = document.getElementById('score');
const correctAnswersSpan = document.getElementById('correctAnswers');
const wrongAnswersSpan = document.getElementById('wrongAnswers');
const percentageSpan = document.getElementById('percentage');

// Game State
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let shuffledQuestions = [];
let isReviewMode = false;
let reviewQuestions = [];

// Fisher-Yates Shuffle
function shuffleArray(array) {
    const shuffled = array.map((item, index) => ({
        ...item,
        originalIndex: index
    }));
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// Kahoot color scheme
const kahootColors = ['red', 'blue', 'yellow', 'green'];
const shapeSymbols = {
    red: '🔺',
    blue: '💠',
    yellow: '⭐',
    green: '🔷'
};

// Initialize Quiz
function initQuiz() {
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    reviewMistakesBtn.style.display = 'none';
    showQuestion();
}

// Show Question
function showQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const currentQuestion = questionsArray[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    answersGrid.innerHTML = '';
    feedback.style.display = 'none';
    nextButton.style.display = 'none';
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = `answer-btn ${kahootColors[index]}`;
        
        const content = document.createElement('div');
        content.className = 'answer-btn-content';
        
        const shape = document.createElement('div');
        shape.className = 'answer-shape';
        shape.textContent = shapeSymbols[kahootColors[index]];
        
        const text = document.createElement('div');
        text.className = 'answer-text';
        text.textContent = answer;
        
        content.appendChild(shape);
        content.appendChild(text);
        button.appendChild(content);
        
        button.addEventListener('click', () => selectAnswer(index));
        answersGrid.appendChild(button);
    });
    
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = questionsArray.length;
    updateProgressBar();
}

// Select Answer
function selectAnswer(selectedIndex) {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const currentQuestion = questionsArray[currentQuestionIndex];
    const buttons = answersGrid.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    
    buttons.forEach(button => button.disabled = true);
    
    if (isCorrect) {
        buttons[selectedIndex].classList.add('correct');
        feedback.textContent = `✓ Correct! ${currentQuestion.explanation}`;
        feedback.className = 'feedback-message correct';
        correctAnswers++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[currentQuestion.correctIndex].classList.add('correct');
        feedback.textContent = `✗ Not quite. ${currentQuestion.explanation}`;
        feedback.className = 'feedback-message wrong';
        
        if (!isReviewMode) {
            wrongAnswers.push(currentQuestion.originalIndex);
        }
    }
    
    feedback.style.display = 'block';
    nextButton.style.display = 'inline-block';
}

// Next Question
function nextQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Update Progress Bar
function updateProgressBar() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const progress = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
    progressBar.style.width = progress + '%';
}

// Show Results
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const totalQuestions = questionsArray.length;
    const wrongCount = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    score.textContent = `${correctAnswers}/${totalQuestions}`;
    correctAnswersSpan.textContent = correctAnswers;
    wrongAnswersSpan.textContent = wrongCount;
    percentageSpan.textContent = percentage;
    
    let starCount = 0;
    if (percentage === 100) starCount = 3;
    else if (percentage >= 70) starCount = 2;
    else if (percentage >= 50) starCount = 1;
    
    stars.textContent = '⭐'.repeat(starCount);
    
    if (!isReviewMode && wrongAnswers.length > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Start Review Mode
function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = wrongAnswers.map(index => ({
        ...questions[index],
        originalIndex: index
    }));
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    
    totalQuestionsSpan.textContent = reviewQuestions.length;
    
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

// Event Listeners
startButton.addEventListener('click', () => {
    startContent.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

backButton.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

nextButton.addEventListener('click', nextQuestion);

retryButton.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

reviewMistakesBtn.addEventListener('click', startReviewMode);

lessonsButton.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});
