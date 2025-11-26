// Year 2 Arabic Letters Group 3 - ض ط ظ ع غ ف ق with Short Vowels
const questions = [
    {
        question: "How do we read ضَ ?",
        answers: ["Da (light)", "Da (heavy)", "Za", "Sa"],
        correctIndex: 1,
        explanation: "ض is a heavy letter with a deep 'da' sound."
    },
    {
        question: "How do we read ضِ ?",
        answers: ["Za", "Di (light)", "Di (heavy)", "Si"],
        correctIndex: 2,
        explanation: "Even with kasrah, ض stays heavy."
    },
    {
        question: "How do we read ضُ ?",
        answers: ["Zu", "Su", "Du (light)", "Du (heavy)"],
        correctIndex: 3,
        explanation: "Dhammah gives a strong rounded 'u'."
    },
    {
        question: "How do we pronounce طَ ?",
        answers: ["Ta (heavy)", "Ta (light)", "Da", "Sa"],
        correctIndex: 0,
        explanation: "ط is a heavy version of ت."
    },
    {
        question: "How do we pronounce طِ ?",
        answers: ["Ta", "Ti (heavy)", "Ti (light)", "Tu"],
        correctIndex: 1,
        explanation: "Kasrah gives 'i' but still heavy."
    },
    {
        question: "How do we pronounce طُ ?",
        answers: ["Ta", "To", "Tu (heavy)", "Tu (light)"],
        correctIndex: 2,
        explanation: "Dhammah adds the rounded heavy 'u'."
    },
    {
        question: "How do we read ظَ ?",
        answers: ["Sa", "Sha", "Tha (light)", "Za (heavy)"],
        correctIndex: 3,
        explanation: "ظ is a heavy version of the 'z/tha' sound."
    },
    {
        question: "How do we read ظِ ?",
        answers: ["Zi (heavy)", "Zi (light)", "Si", "Thi"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i' but with a heavy tone."
    },
    {
        question: "How do we read ظُ ?",
        answers: ["Su", "Zu (heavy)", "Zu (light)", "Zo"],
        correctIndex: 1,
        explanation: "Dhammah creates a deep 'u' sound."
    },
    {
        question: "How do we pronounce عَ ?",
        answers: ["Ha", "Ka", "A' (from throat)", "Aa (light)"],
        correctIndex: 2,
        explanation: "ع is a deep throat letter."
    },
    {
        question: "How do we pronounce عِ ?",
        answers: ["I' (from throat)", "Ee", "Ai", "Hi"],
        correctIndex: 0,
        explanation: "Kasrah gives a tight 'i' deep in the throat."
    },
    {
        question: "How do we pronounce عُ ?",
        answers: ["Hu", "Ku", "U' (from throat)", "Oo"],
        correctIndex: 2,
        explanation: "Dhammah gives a deep round sound."
    },
    {
        question: "How do we pronounce غَ ?",
        answers: ["Ka", "Gha (heavy)", "Ha", "Sha"],
        correctIndex: 1,
        explanation: "غ is a heavy throat sound like French 'r'."
    },
    {
        question: "How do we pronounce غِ ?",
        answers: ["Ga", "Gu", "Hi", "Ghi"],
        correctIndex: 3,
        explanation: "Kasrah gives 'i' to the heavy letter."
    },
    {
        question: "How do we pronounce غُ ?",
        answers: ["Ghu", "Ghi", "Ga", "Hu"],
        correctIndex: 0,
        explanation: "Dhammah gives a deep 'u'."
    },
    {
        question: "How do we read فَ ?",
        answers: ["Va", "Fa", "Pa", "Sa"],
        correctIndex: 1,
        explanation: "ف makes the 'f' sound."
    },
    {
        question: "How do we read فِ ?",
        answers: ["Fa", "Fu", "Fi", "Fee"],
        correctIndex: 2,
        explanation: "Kasrah gives the short 'i'."
    },
    {
        question: "How do we read فُ ?",
        answers: ["Fa", "Fi", "Foo", "Fu"],
        correctIndex: 3,
        explanation: "Dhammah creates the rounded 'u'."
    },
    {
        question: "How do we read قَ ?",
        answers: ["Qa (heavy)", "Ka (light)", "Ga", "Ha"],
        correctIndex: 0,
        explanation: "ق is a heavy deep 'q' sound."
    },
    {
        question: "How do we read قِ ?",
        answers: ["Gi", "Qi (heavy)", "Ki (light)", "Hi"],
        correctIndex: 1,
        explanation: "Kasrah gives the 'i' but still heavy."
    },
    {
        question: "How do we read قُ ?",
        answers: ["Ku (light)", "Gu", "Qu (heavy)", "Hu"],
        correctIndex: 2,
        explanation: "Dhammah adds a deep rounded 'u'."
    },
    {
        question: "Which letter in this group is the deepest heavy throat sound?",
        answers: ["غ", "ط", "ع", "ف"],
        correctIndex: 2,
        explanation: "ع is the deepest of the throat letters."
    },
    {
        question: "Which letter makes the heavy 'qa' sound?",
        answers: ["ف", "غ", "ض", "ق"],
        correctIndex: 3,
        explanation: "ق has the strong 'Q' sound."
    },
    {
        question: "Which letter makes the heavy 'da' sound?",
        answers: ["ض", "د", "ظ", "ف"],
        correctIndex: 0,
        explanation: "ض is one of the heaviest Arabic letters."
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
