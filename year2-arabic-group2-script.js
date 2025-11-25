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
    window.location.href = 'year2-term1.html';
});

nextButton.addEventListener('click', nextQuestion);

retryButton.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

reviewMistakesBtn.addEventListener('click', startReviewMode);

lessonsButton.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});
