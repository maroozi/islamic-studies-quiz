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

let currentQuestionIndex = 0;
let score = 0;
let stars = 0;
let wrongAnswers = [];
let isReviewMode = false;
let reviewQuestions = [];

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
const backToLessonsBtn = document.getElementById('backToLessonsBtn');

const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const progressBar = document.getElementById('progressBar');
const starsSpan = document.getElementById('stars');

const feedbackContainer = document.getElementById('feedback');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const feedbackText = document.getElementById('feedbackText');
const explanation = document.getElementById('explanation');

const totalStarsSpan = document.getElementById('totalStars');
const correctCountSpan = document.getElementById('correctCount');
const incorrectCountSpan = document.getElementById('incorrectCount');
const resultMessage = document.getElementById('resultMessage');

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize quiz
function initQuiz() {
    totalQuestionsSpan.textContent = questions.length;
}

// Start quiz
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
});

// Back to lessons
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

// Kahoot color scheme
const kahootColors = ['red', 'blue', 'yellow', 'green'];
const shapeSymbols = {
    red: '🔺',
    blue: '💠',
    yellow: '⭐',
    green: '🔷'
};

function showQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    const question = questionsArray[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Clear previous answers
    answersGrid.innerHTML = '';
    
    // Shuffle answers with originalIndex tracking
    const answersWithIndex = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    // Create answer buttons
    shuffledAnswers.forEach((answerObj, index) => {
        const button = document.createElement('button');
        button.className = `answer-btn ${kahootColors[index]}`;
        
        const content = document.createElement('div');
        content.className = 'answer-btn-content';
        
        const shape = document.createElement('div');
        shape.className = 'answer-shape';
        shape.textContent = shapeSymbols[kahootColors[index]];
        
        const text = document.createElement('div');
        text.className = 'answer-text';
        text.textContent = answerObj.text;
        
        content.appendChild(shape);
        content.appendChild(text);
        button.appendChild(content);
        
        button.addEventListener('click', () => selectAnswer(button, answerObj.originalIndex, question));
        answersGrid.appendChild(button);
    });
    
    // Hide feedback and next button
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
}

function selectAnswer(selectedButton, selectedIndex, question) {
    const isCorrect = selectedIndex === question.correctIndex;
    const correctAnswerText = question.answers[question.correctIndex];
    
    // Disable all buttons
    const allButtons = answersGrid.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct answer by matching text
        const btnText = btn.querySelector('.answer-text').textContent;
        if (btnText === correctAnswerText) {
            btn.classList.add('correct');
        }
    });
    
    // Show feedback
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        stars += 10;
        starsSpan.textContent = `⭐ ${stars}`;
        feedbackEmoji.textContent = '🎉';
        feedbackText.textContent = 'Correct! MashaAllah!';
        feedbackText.style.color = '#11998e';
    } else {
        selectedButton.classList.add('wrong');
        if (!isReviewMode) {
            wrongAnswers.push(question);
        }
        feedbackEmoji.textContent = '😢';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.style.color = '#eb3349';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.style.display = 'block';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = questionsArray.length - score;
    
    const percentage = (score / questionsArray.length) * 100;
    
    // Result message based on score
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfect! You mastered heavy and light letters!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '⭐ Excellent work! You know your letters well!';
    } else if (percentage >= 60) {
        resultMessage.textContent = '👍 Good job! Keep practicing!';
    } else {
        resultMessage.textContent = '📖 Keep learning! Review the heavy letters.';
    }
    
    // Show review button only if there are wrong answers and not in review mode
    if (!isReviewMode && wrongAnswers.length > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function reviewMistakes() {
    isReviewMode = true;
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', reviewMistakes);

// Initialize
initQuiz();
