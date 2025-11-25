// Year 2 Arabic Letters Group 2 - د ذ ر ز س ش ص with Short Vowels
const questions = [
    {
        question: "How do we read دَ ?",
        answers: ["Da", "Di", "Du", "Do"],
        correctIndex: 0,
        explanation: "Fatḥah makes the short 'a' sound."
    },
    {
        question: "How do we read دِ ?",
        answers: ["Di", "Da", "Du", "Dee"],
        correctIndex: 0,
        explanation: "Kasrah gives the light 'i' sound."
    },
    {
        question: "How do we read دُ ?",
        answers: ["Du", "Da", "Di", "Doo"],
        correctIndex: 0,
        explanation: "Dhammah gives the round 'u' sound."
    },
    {
        question: "What is the sound of ذَ ?",
        answers: ["Dha (soft th)", "Za", "Da", "Sha"],
        correctIndex: 0,
        explanation: "ذ makes the soft 'th' sound like in 'this'."
    },
    {
        question: "How do we read ذِ ?",
        answers: ["Dhi", "Dha", "Dhu", "Zi"],
        correctIndex: 0,
        explanation: "Kasrah gives the 'i' sound."
    },
    {
        question: "How do we read ذُ ?",
        answers: ["Dhu", "Dhi", "Dha", "Zo"],
        correctIndex: 0,
        explanation: "Dhammah gives the rounded 'u' sound."
    },
    {
        question: "How do we pronounce رَ ?",
        answers: ["Ra", "Ri", "Ru", "Raa"],
        correctIndex: 0,
        explanation: "ر with fatḥah is read 'Ra'."
    },
    {
        question: "How do we pronounce رِ ?",
        answers: ["Ri", "Ra", "Ru", "Ree"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i'."
    },
    {
        question: "How do we pronounce رُ ?",
        answers: ["Ru", "Ri", "Ra", "Roo"],
        correctIndex: 0,
        explanation: "Dhammah gives the rounded 'u' sound."
    },
    {
        question: "How do we read زَ ?",
        answers: ["Za", "Sa", "Sha", "Za (heavy)"],
        correctIndex: 0,
        explanation: "ز is always a light 'z' sound."
    },
    {
        question: "How do we read زِ ?",
        answers: ["Zi", "Za", "Zu", "Zee"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i'."
    },
    {
        question: "How do we read زُ ?",
        answers: ["Zu", "Zi", "Za", "Zoo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "What is the sound of سَ ?",
        answers: ["Sa", "Sha", "Sa (heavy)", "Tha"],
        correctIndex: 0,
        explanation: "س is a light letter."
    },
    {
        question: "How do we read سِ ?",
        answers: ["Si", "Sa", "Su", "Sha"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i'."
    },
    {
        question: "How do we read سُ ?",
        answers: ["Su", "Si", "Sa", "Soo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we read شَ ?",
        answers: ["Sha", "Sa", "Za", "Cha"],
        correctIndex: 0,
        explanation: "ش makes the 'sh' sound."
    },
    {
        question: "How do we read شِ ?",
        answers: ["Shi", "Sha", "Shu", "Si"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i': Shi."
    },
    {
        question: "How do we read شُ ?",
        answers: ["Shu", "Sha", "Shi", "Shoo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we pronounce صَ ?",
        answers: ["Sa (heavy)", "Sa (light)", "Sha", "Za"],
        correctIndex: 0,
        explanation: "ص is a heavy letter with a stronger, deeper sound."
    },
    {
        question: "How do we pronounce صِ ?",
        answers: ["Si (heavy)", "Si (light)", "Sha", "Su"],
        correctIndex: 0,
        explanation: "Kasrah stays 'i' but still heavy."
    },
    {
        question: "How do we pronounce صُ ?",
        answers: ["Su (heavy)", "Su (light)", "Sha", "Sa"],
        correctIndex: 0,
        explanation: "Dhammah makes a deep 'u' sound."
    },
    {
        question: "Which letter in this group is heavy?",
        answers: ["ص", "س", "ر", "ز"],
        correctIndex: 0,
        explanation: "ص is one of the heavy letters."
    },
    {
        question: "Which letter makes the 'sh' sound?",
        answers: ["ش", "س", "ص", "ز"],
        correctIndex: 0,
        explanation: "ش says 'sh'."
    },
    {
        question: "Which letter makes the soft 'th' sound?",
        answers: ["ذ", "د", "ر", "ز"],
        correctIndex: 0,
        explanation: "ذ says 'th' like 'this'."
    },
    {
        question: "Which letter sounds like the English 'z'?",
        answers: ["ز", "ذ", "س", "ش"],
        correctIndex: 0,
        explanation: "ز makes the 'z' sound."
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
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    reviewMistakesBtn.style.display = 'none';
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    totalQuestionsSpan.textContent = questionsArray.length;
    starsSpan.textContent = `⭐ ${stars}`;
}

// Start quiz
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

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
    
    // Hide feedback
    feedbackContainer.style.display = 'none';
    nextBtn.disabled = true;
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
    nextBtn.disabled = false;
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
    
    let message = '';
    if (percentage === 100) {
        message = '🔤 PERFECT! Allāhumma Bārik! You can read all the letters perfectly!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You know your Arabic letters so well! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep practicing your letters!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Practice reading the letters more!';
    } else {
        message = '🌈 Keep trying! Practice your Arabic letters every day!';
    }
    
    resultMessage.textContent = message;
    
    // Show Review Mistakes button if there are wrong answers and not in review mode
    if (wrongAnswers.length > 0 && !isReviewMode) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

function resetQuiz() {
    initQuiz();
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    starsSpan.textContent = `⭐ ${stars}`;
    totalQuestionsSpan.textContent = reviewQuestions.length;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

// Initialize on page load
initQuiz();
