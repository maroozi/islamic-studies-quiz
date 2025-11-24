// Year 2: The Importance of Friday - Kahoot-Style Quiz
// Lesson 9 - Term 1

const questions = [
    {
        question: "What is the special day of the week for Muslims? 📅",
        answers: ["Friday", "Monday", "Sunday", "Tuesday"],
        correctIndex: 0,
        explanation: "Friday is the most special day of the week for Muslims! It's called Jumu'ah and it's the best day! 🌟"
    },
    {
        question: "What is the Arabic name for Friday? 🕌",
        answers: ["Jumu'ah", "Eid", "Ramadan", "Tahajjud"],
        correctIndex: 0,
        explanation: "The Arabic name for Friday is 'Jumu'ah' (الجمعة) which means 'gathering' or 'congregation'! 💚"
    },
    {
        question: "What did Prophet Muhammad ﷺ say we should do on Fridays? 🚿",
        answers: ["Wear our best clothes and take a shower/bath", "Stay home all day", "Not pray", "Sleep late"],
        correctIndex: 0,
        explanation: "Prophet Muhammad ﷺ taught us to take a bath (ghusl), wear our best clothes, and use nice perfume on Fridays! ✨"
    },
    {
        question: "Where should men go for the special Friday prayer? 🕌",
        answers: ["The mosque (masjid)", "The park", "The market", "The library"],
        correctIndex: 0,
        explanation: "Muslim men must go to the mosque (masjid) for the special Jumu'ah prayer. It's very important! 💚"
    },
    {
        question: "What do women and children do on Friday? 👩👧",
        answers: ["They may go to the masjid or pray at home", "They do not pray", "They must go to school", "They fast all day"],
        correctIndex: 0,
        explanation: "Women and children can choose to go to the masjid or pray at home on Fridays. Both are good! 🌟"
    },
    {
        question: "Who created Prophet Ādam عليه السلام? 👤",
        answers: ["Allāh ﷻ created him on a Friday", "The angels", "People", "Animals"],
        correctIndex: 0,
        explanation: "Allāh ﷻ created our first father, Prophet Ādam (AS), on a Friday! Friday has always been special! ✨"
    },
    {
        question: "Which important event will happen on a Friday? ⏰",
        answers: ["The Day of Judgement", "Eid", "Lailatul Qadr", "The Hijrah"],
        correctIndex: 0,
        explanation: "The Day of Judgement (Qiyāmah) will happen on a Friday! This shows how special this day is! SubhanAllah! 🌟"
    },
    {
        question: "When is the special hour on Friday? 🌅",
        answers: ["Just before Maghrib (sunset)", "Early morning", "After sunrise", "Midnight"],
        correctIndex: 0,
        explanation: "There's a special hour on Friday, just before Maghrib prayer (sunset). This is a blessed time! ✨"
    },
    {
        question: "What happens if we make duʿā in the special hour? 🤲",
        answers: ["Allāh answers it", "Nothing happens", "It is not allowed", "Only children's duʿā is accepted"],
        correctIndex: 0,
        explanation: "If we make duʿā during the special hour on Friday, Allāh ﷻ will answer our prayers! How amazing! 💚"
    },
    {
        question: "What should we do on Fridays? 🙏",
        answers: ["Ask Allāh for forgiveness and pray for ourselves and others", "Fight with people", "Waste time", "Ignore prayer"],
        correctIndex: 0,
        explanation: "On Fridays, we should ask Allāh for forgiveness, make lots of duʿā, and pray for ourselves and others! Alhamdulillāh! 🌟"
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
        message = '🕌 PERFECT! Allāhumma Bārik! You know all about the special day of Jumu\'ah!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You understand why Friday is so important! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep learning about our blessed Friday!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Friday is the best day of the week!';
    } else {
        message = '🌈 Keep trying! Learn more about the importance of Jumu\'ah!';
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
