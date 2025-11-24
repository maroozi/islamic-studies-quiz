// Qur'an Question Bank
const quranQuestions = [
    {
        topic: "QUR'AN",
        question: "How many Surahs are in the Qur'an?",
        answers: [
            { text: "114", correct: true },
            { text: "100", correct: false },
            { text: "99", correct: false },
            { text: "30", correct: false }
        ],
        explanation: "The Holy Qur'an has 114 Surahs (chapters)."
    },
    {
        topic: "QUR'AN",
        question: "What is the longest Surah in the Qur'an?",
        answers: [
            { text: "Surah Al-Baqarah", correct: true },
            { text: "Surah Al-Fatiha", correct: false },
            { text: "Surah Yaseen", correct: false },
            { text: "Surah Al-Ikhlas", correct: false }
        ],
        explanation: "Surah Al-Baqarah is the longest Surah with 286 verses."
    },
    {
        topic: "QUR'AN",
        question: "What is the shortest Surah in the Qur'an?",
        answers: [
            { text: "Surah Al-Kawthar", correct: true },
            { text: "Surah Al-Ikhlas", correct: false },
            { text: "Surah Al-Fatiha", correct: false },
            { text: "Surah An-Nas", correct: false }
        ],
        explanation: "Surah Al-Kawthar has only 3 verses and is the shortest Surah."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let shuffledAnswers = [];

// DOM Elements
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backToHomeBtn = document.getElementById('backToHome');
const backToHomeFromResultsBtn = document.getElementById('backToHomeFromResults');
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionNumber = document.getElementById('questionNumber');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
backToHomeBtn.addEventListener('click', () => window.location.href = 'quran-unit1.html');
backToHomeFromResultsBtn.addEventListener('click', () => window.location.href = 'quran-unit1.html');

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = quranQuestions[currentQuestion];
    questionText.textContent = question.question;
    
    // Shuffle the answers
    shuffledAnswers = shuffleArray(question.answers);
    
    answersContainer.innerHTML = '';
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(index, shuffledAnswers));
        answersContainer.appendChild(button);
    });
    
    feedback.classList.add('hidden');
    
    const progress = ((currentQuestion + 1) / quranQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quranQuestions.length}`;
    progressPercent.textContent = `${Math.round(progress)}%`;
}

function selectAnswer(selectedIndex, shuffledAnswers) {
    const question = quranQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = shuffledAnswers[selectedIndex].correct;
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (shuffledAnswers[index].correct) {
            button.classList.add('correct');
        }
        if (index === selectedIndex && !isCorrect) {
            button.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        document.getElementById('feedbackEmoji').textContent = '🎉';
        document.getElementById('feedbackText').textContent = 'Correct! MashaAllah!';
    } else {
        document.getElementById('feedbackEmoji').textContent = '😢';
        document.getElementById('feedbackText').textContent = 'Not quite! Keep trying!';
    }
    
    document.getElementById('explanationText').textContent = question.explanation;
    feedback.classList.remove('hidden');
    
    if (currentQuestion === quranQuestions.length - 1) {
        document.getElementById('nextBtnText').textContent = 'See Results';
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quranQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / quranQuestions.length) * 100);
    document.getElementById('percentageText').textContent = `${percentage}%`;
    document.getElementById('finalScore').textContent = `${score}/${quranQuestions.length}`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = quranQuestions.length - score;
    
    const circumference = 2 * Math.PI * 100;
    const progressCircle = document.getElementById('progressCircle');
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    let resultTitle, resultMessage, resultEmoji;
    if (percentage === 100) {
        resultTitle = "Perfect Score!";
        resultMessage = "MashaAllah! You are a true scholar! 🌟";
        resultEmoji = "🏆";
    } else if (percentage >= 80) {
        resultTitle = "Excellent!";
        resultMessage = "أحسنت (Ahsanta)! Outstanding work!";
        resultEmoji = "⭐";
    } else if (percentage >= 60) {
        resultTitle = "Good Job!";
        resultMessage = "بارك الله فيك (Barakallahu feek)! Keep learning!";
        resultEmoji = "👍";
    } else {
        resultTitle = "Keep Trying!";
        resultMessage = "Don't give up! Review and try again! 💪";
        resultEmoji = "📚";
    }
    
    document.getElementById('resultTitle').textContent = resultTitle;
    document.getElementById('resultMessage').textContent = resultMessage;
    document.getElementById('resultEmoji').textContent = resultEmoji;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = '0';
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    document.getElementById('nextBtnText').textContent = 'Next Question';
}
