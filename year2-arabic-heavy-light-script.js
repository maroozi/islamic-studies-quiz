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
        answers: ["ط", "ب", "ق", "ض"],
        correctIndex: 1,
        explanation: "ب is always light and soft."
    },
    {
        question: "Which group shows only heavy letters?",
        answers: ["ب ت ث", "م ي ل", "خ ص ض", "س ز ش"],
        correctIndex: 2,
        explanation: "All three—خ ص ض—are heavy letters."
    },
    {
        question: "Which group shows only light letters?",
        answers: ["ط ظ ض", "غ ق خ", "ص ط ض", "س ش ز"],
        correctIndex: 3,
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
        answers: ["Heavy", "Light", "Both", "Depends"],
        correctIndex: 1,
        explanation: "ف is always light."
    },
    {
        question: "Which letter has a deep, strong sound?",
        answers: ["م", "ب", "ط", "ن"],
        correctIndex: 2,
        explanation: "ط is a heavy, deep letter."
    },
    {
        question: "Which letter sounds soft and thin?",
        answers: ["ظ", "غ", "ق", "س"],
        correctIndex: 3,
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
        answers: ["ي", "ض", "ك", "ل"],
        correctIndex: 1,
        explanation: "ض is one of the heaviest letters in Arabic."
    },
    {
        question: "Which of these is the correct list of heavy letters?",
        answers: [
            "س ش ز ك ل م ن",
            "أ ب ت ث ج ح خ",
            "خ ص ض ط ظ غ ق",
            "ر س ش ل م ن و"
        ],
        correctIndex: 2,
        explanation: "These seven letters are the heavy letters taught in Year 2."
    },
    {
        question: "Which of these is a light letter?",
        answers: ["غ", "ط", "ق", "م"],
        correctIndex: 3,
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
        answers: ["ف", "ق", "ك", "ح"],
        correctIndex: 1,
        explanation: "ق is a deep, heavy sound from the back of the mouth."
    },
    {
        question: "Which of these is light and easy to say?",
        answers: ["ط", "ض", "ل", "ق"],
        correctIndex: 2,
        explanation: "ل is a light letter (Year 2 does not cover the 'Allah' rule)."
    }
];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
const backToLessonsBtn = document.getElementById('backToLessonsBtn');

const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const feedbackText = document.getElementById('feedbackText');
const explanation = document.getElementById('explanation');

const questionCounter = document.getElementById('question-counter');
const starsDisplay = document.getElementById('star-display');

const totalStars = document.getElementById('totalStars');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const resultMessage = document.getElementById('resultMessage');

// Game State
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let userAnswers = [];
let reviewMode = false;
let reviewQuestions = [];

// Start Quiz
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Back to Lessons
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

// Load Question
function loadQuestion() {
    const questionData = reviewMode 
        ? questions[reviewQuestions[currentQuestionIndex]] 
        : questions[currentQuestionIndex];
    
    questionText.textContent = questionData.question;
    answersGrid.innerHTML = '';
    
    // Update question counter
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    
    // Update star display
    starsDisplay.innerHTML = '★'.repeat(correctAnswers) + '☆'.repeat(totalQuestions - correctAnswers - wrongAnswers);
    
    // Create answer buttons
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-bubble');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersGrid.appendChild(button);
    });
    
    // Hide feedback and next button
    feedbackEmoji.style.display = 'none';
    feedbackText.style.display = 'none';
    explanation.style.display = 'none';
    nextBtn.style.display = 'none';
}

// Check Answer
function checkAnswer(selectedIndex) {
    const questionData = reviewMode 
        ? questions[reviewQuestions[currentQuestionIndex]] 
        : questions[currentQuestionIndex];
    
    const buttons = answersGrid.querySelectorAll('.answer-bubble');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (selectedIndex === questionData.correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        feedbackEmoji.textContent = '✓';
        feedbackEmoji.className = 'feedback-emoji correct';
        feedbackText.textContent = 'Correct!';
        feedbackText.className = 'feedback-text correct';
        correctAnswers++;
        
        if (!reviewMode) {
            userAnswers.push({ questionIndex: currentQuestionIndex, correct: true });
        }
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[questionData.correctIndex].classList.add('correct');
        feedbackEmoji.textContent = '✗';
        feedbackEmoji.className = 'feedback-emoji wrong';
        feedbackText.textContent = 'Incorrect';
        feedbackText.className = 'feedback-text wrong';
        wrongAnswers++;
        
        if (!reviewMode) {
            userAnswers.push({ questionIndex: currentQuestionIndex, correct: false });
        }
    }
    
    // Show feedback
    feedbackEmoji.style.display = 'block';
    feedbackText.style.display = 'block';
    explanation.textContent = questionData.explanation;
    explanation.style.display = 'block';
    nextBtn.style.display = 'block';
}

// Next Question
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    totalStars.textContent = '★'.repeat(correctAnswers);
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = wrongAnswers;
    
    // Result messages
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfect! You mastered heavy and light letters!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '⭐ Excellent work!';
    } else if (percentage >= 60) {
        resultMessage.textContent = 'Good job! Keep practicing.';
    } else {
        resultMessage.textContent = 'Keep trying! Practice makes perfect.';
    }
    
    // Show/hide review button
    if (!reviewMode && wrongAnswers > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Retry Quiz
retryBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    userAnswers = [];
    reviewMode = false;
    reviewQuestions = [];
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Review Mistakes
reviewMistakesBtn.addEventListener('click', () => {
    reviewMode = true;
    reviewQuestions = userAnswers
        .filter(answer => !answer.correct)
        .map(answer => answer.questionIndex);
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});
