// Year 2 Arabic Letters Group 3 - ض ط ظ ع غ ف ق with Short Vowels
const questions = [
    {
        question: "How do we read ضَ ?",
        answers: ["Da (heavy)", "Da (light)", "Za", "Sa"],
        correctIndex: 0,
        explanation: "ض is a heavy letter with a deep 'da' sound."
    },
    {
        question: "How do we read ضِ ?",
        answers: ["Di (heavy)", "Di (light)", "Za", "Si"],
        correctIndex: 0,
        explanation: "Even with kasrah, ض stays heavy."
    },
    {
        question: "How do we read ضُ ?",
        answers: ["Du (heavy)", "Du (light)", "Zu", "Su"],
        correctIndex: 0,
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
        answers: ["Ti (heavy)", "Ti (light)", "Ta", "Tu"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i' but still heavy."
    },
    {
        question: "How do we pronounce طُ ?",
        answers: ["Tu (heavy)", "Tu (light)", "Ta", "To"],
        correctIndex: 0,
        explanation: "Dhammah adds the rounded heavy 'u'."
    },
    {
        question: "How do we read ظَ ?",
        answers: ["Za (heavy)", "Tha (light)", "Sa", "Sha"],
        correctIndex: 0,
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
        answers: ["Zu (heavy)", "Zu (light)", "Su", "Zo"],
        correctIndex: 0,
        explanation: "Dhammah creates a deep 'u' sound."
    },
    {
        question: "How do we pronounce عَ ?",
        answers: ["A' (from throat)", "Aa (light)", "Ha", "Ka"],
        correctIndex: 0,
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
        answers: ["U' (from throat)", "Oo", "Hu", "Ku"],
        correctIndex: 0,
        explanation: "Dhammah gives a deep round sound."
    },
    {
        question: "How do we pronounce غَ ?",
        answers: ["Gha (heavy)", "Ka", "Ha", "Sha"],
        correctIndex: 0,
        explanation: "غ is a heavy throat sound like French 'r'."
    },
    {
        question: "How do we pronounce غِ ?",
        answers: ["Ghi", "Ga", "Gu", "Hi"],
        correctIndex: 0,
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
        answers: ["Fa", "Va", "Pa", "Sa"],
        correctIndex: 0,
        explanation: "ف makes the 'f' sound."
    },
    {
        question: "How do we read فِ ?",
        answers: ["Fi", "Fa", "Fu", "Fee"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i'."
    },
    {
        question: "How do we read فُ ?",
        answers: ["Fu", "Fa", "Fi", "Foo"],
        correctIndex: 0,
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
        answers: ["Qi (heavy)", "Ki (light)", "Gi", "Hi"],
        correctIndex: 0,
        explanation: "Kasrah gives the 'i' but still heavy."
    },
    {
        question: "How do we read قُ ?",
        answers: ["Qu (heavy)", "Ku (light)", "Gu", "Hu"],
        correctIndex: 0,
        explanation: "Dhammah adds a deep rounded 'u'."
    },
    {
        question: "Which letter in this group is the deepest heavy throat sound?",
        answers: ["ع", "غ", "ط", "ف"],
        correctIndex: 0,
        explanation: "ع is the deepest of the throat letters."
    },
    {
        question: "Which letter makes the heavy 'qa' sound?",
        answers: ["ق", "ف", "غ", "ض"],
        correctIndex: 0,
        explanation: "ق has the strong 'Q' sound."
    },
    {
        question: "Which letter makes the heavy 'da' sound?",
        answers: ["ض", "د", "ظ", "ف"],
        correctIndex: 0,
        explanation: "ض is one of the heaviest Arabic letters."
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
