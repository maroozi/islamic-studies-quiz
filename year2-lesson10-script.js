// Year 2: The Five Pillars of Islām - Kahoot-Style Quiz
// Lesson 10 - Term 1

const questions = [
    {
        question: "How many pillars does Islām have? 🕌",
        answers: ["Three", "Four", "Five", "Six"],
        correctIndex: 2,
        explanation: "Islām has FIVE beautiful pillars! They are like strong pillars that hold up our Dīn (religion)! 🕌✨"
    },
    {
        question: "What is the FIRST pillar of Islām? ☝️",
        answers: ["Salah", "Shahādah", "Zakāh", "Sawm"],
        correctIndex: 1,
        explanation: "The Shahādah is the FIRST pillar! It means saying 'There is no god but Allāh, and Muhammad is His Messenger'! 💚"
    },
    {
        question: "What is the SECOND pillar of Islām? 🤲",
        answers: ["Hajj", "Zakāh", "Salah", "Shahādah"],
        correctIndex: 2,
        explanation: "Salah (prayer) is the SECOND pillar! We pray to Allāh five times every day! 🤲✨"
    },
    {
        question: "How many times do we pray each day? 🕌",
        answers: ["Three times", "Five times", "Seven times", "Two times"],
        correctIndex: 1,
        explanation: "We pray FIVE times every day! Fajr, Dhuhr, 'Asr, Maghrib, and 'Ishā! Salah is so important! 🌟"
    },
    {
        question: "What is the THIRD pillar of Islām? 💰",
        answers: ["Hajj", "Sawm", "Zakāh", "Shahādah"],
        correctIndex: 2,
        explanation: "Zakāh is the THIRD pillar! It means giving charity to help the poor and needy! 💚💰"
    },
    {
        question: "Why do we give Zakāh? 🤲",
        answers: ["To help the poor and needy", "To buy toys", "To save money", "Because we have to"],
        correctIndex: 0,
        explanation: "We give Zakāh to help the poor and needy people! Sharing what we have makes Allāh happy! 💚✨"
    },
    {
        question: "What is the FOURTH pillar of Islām? 🌙",
        answers: ["Zakāh", "Sawm", "Salah", "Hajj"],
        correctIndex: 1,
        explanation: "Sawm (fasting) is the FOURTH pillar! We fast during the blessed month of Ramadan! 🌙✨"
    },
    {
        question: "When do we fast? 🌙",
        answers: ["During Ramadan", "Every day", "On Fridays only", "Never"],
        correctIndex: 0,
        explanation: "We fast during the special month of Ramadan! From sunrise to sunset, we don't eat or drink! 🌙💚"
    },
    {
        question: "What is the FIFTH pillar of Islām? 🕋",
        answers: ["Shahādah", "Zakāh", "Salah", "Hajj"],
        correctIndex: 3,
        explanation: "Hajj is the FIFTH pillar! It's the special journey to Makkah to visit the Ka'bah! 🕋✨"
    },
    {
        question: "Where do Muslims go for Hajj? 🕋",
        answers: ["Madinah", "Jerusalem", "Makkah", "Egypt"],
        correctIndex: 2,
        explanation: "Muslims go to Makkah for Hajj! They visit the beautiful Ka'bah, the House of Allāh! 🕋💚"
    },
    {
        question: "What are the Five Pillars like? 🏛️",
        answers: ["Strong pillars holding up Islām", "Five mountains", "Five books", "Five colors"],
        correctIndex: 0,
        explanation: "The Five Pillars are like strong pillars that hold up our beautiful religion of Islām! 🕌✨"
    },
    {
        question: "Who do Muslims worship? ☝️",
        answers: ["Many gods", "Only Allāh", "The Ka'bah", "The moon"],
        correctIndex: 1,
        explanation: "Muslims worship ONLY Allāh! He is the One and Only God! La ilaha illa Allah! ☝️💚"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let stars = 0;

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const backToLessonsBtn = document.getElementById('backToLessonsBtn');

const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const starsSpan = document.getElementById('stars');
const progressBar = document.getElementById('progressBar');
const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
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
    totalQuestionsSpan.textContent = questions.length;
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
    const question = questions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Clear previous answers
    answersGrid.innerHTML = '';
    
    // Map answers with original index and shuffle
    const answersWithIndices = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    const shuffledAnswers = shuffleArray(answersWithIndices);
    
    // Create answer buttons with Kahoot styling
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
        
        button.addEventListener('click', () => selectAnswer(answerObj.originalIndex, button));
        
        answersGrid.appendChild(button);
    });
    
    // Hide feedback
    feedbackContainer.classList.remove('show');
    nextBtn.disabled = true;
}

function selectAnswer(selectedIndex, selectedButton) {
    const question = questions[currentQuestionIndex];
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
        feedbackEmoji.textContent = '😢';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.style.color = '#eb3349';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.classList.add('show');
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = questions.length - score;
    
    const percentage = (score / questions.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = '🕌 PERFECT! Allāhumma Bārik! You know all Five Pillars perfectly!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You understand the Five Pillars very well! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep learning about the pillars of Islām!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! The Five Pillars are the foundation of Islām!';
    } else {
        message = '🌈 Keep trying! Learn more about the Five Pillars of Islām!';
    }
    
    resultMessage.textContent = message;
}

function resetQuiz() {
    initQuiz();
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-islamic-studies.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-islamic-studies.html';
});

// Initialize on page load
initQuiz();
