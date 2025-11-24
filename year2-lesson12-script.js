// Year 2: Keeping Clean - Kahoot-Style Quiz
// Lesson 12 - Term 1 - FINAL LESSON!

const questions = [
    {
        question: "What did Prophet Muhammad ﷺ say about cleanliness? 🧼",
        answers: ["It is optional", "It is part of our faith", "Only adults must be clean", "Only on Fridays"],
        correctIndex: 1,
        explanation: "Cleanliness is part of our faith! The Prophet ﷺ taught us that being clean is very important in Islām! 💚"
    },
    {
        question: "What is the special washing Muslims do before salah? 💧",
        answers: ["Ghusl", "Wudū'", "Tayammum", "Shower"],
        correctIndex: 1,
        explanation: "Wudū' is the special washing we do before every salah! It makes us clean and ready to pray! 🤲"
    },
    {
        question: "What does wudū' include? 🚰",
        answers: ["Washing our whole body randomly", "Washing parts of the body in a particular order", "Only washing hands", "Only washing the face"],
        correctIndex: 1,
        explanation: "Wudū' includes washing parts of our bodies in a particular order and number! We wash our face, hands, head, and feet! 💧"
    },
    {
        question: "On which day is it sunnah to have a bath or shower? 🛁",
        answers: ["Monday", "Wednesday", "Friday (Jumu'ah)", "Sunday"],
        correctIndex: 2,
        explanation: "It is sunnah to have a bath or shower on Friday (Jumu'ah)! We want to be extra clean for the special day! ✨"
    },
    {
        question: "What foot should we enter the bathroom with? 🚪",
        answers: ["Right foot", "Left foot", "Both feet", "It doesn't matter"],
        correctIndex: 1,
        explanation: "The Prophet ﷺ taught us to enter the bathroom with our left foot! This is the Islamic way! 🌟"
    },
    {
        question: "What duʿā do we say when entering the bathroom? 🤲",
        answers: ["Bismillāh", "Ghufrānaka", "Allāhumma innī aʿūdhu bika…", "Inshā'Allāh"],
        correctIndex: 2,
        explanation: "We say 'Allāhumma innī aʿūdhu bika min al-khubthi wa al-khabā'ith' – asking Allāh to protect us! 💚"
    },
    {
        question: "What foot do we use when exiting the bathroom? 👣",
        answers: ["Left foot", "Right foot", "Either foot", "Jump out"],
        correctIndex: 1,
        explanation: "We exit with our right foot! The Prophet ﷺ taught us to use the right foot when leaving! 🌟"
    },
    {
        question: "What duʿā do we say when leaving the bathroom? 🙏",
        answers: ["Astaghfirullāh", "Ghufrānaka", "Inshā'Allāh", "Bismillāh"],
        correctIndex: 1,
        explanation: "We say 'Ghufrānaka' which means 'I seek Your forgiveness!' We thank Allāh for keeping us healthy! 💚"
    },
    {
        question: "Why is keeping clean important? ✨",
        answers: ["To look cool", "Because Islam teaches us to stay clean", "So others don't judge us", "Only to avoid germs"],
        correctIndex: 1,
        explanation: "Islam teaches us to stay clean! Cleanliness is part of our faith and something the Prophet ﷺ taught us! 🌟"
    },
    {
        question: "Why must we keep clean before praying? 🕌",
        answers: ["To impress others", "To be ready for work", "Because we need to be clean to pray salah", "So we smell nice"],
        correctIndex: 2,
        explanation: "We need to be clean in order to pray salah! When we stand before Allāh, we must be pure and clean! 🤲💚"
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
        message = '🧼 PERFECT! Allāhumma Bārik! You completed Term 1 perfectly! You know all about cleanliness!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You finished Term 1 with amazing knowledge! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! You completed Term 1! Keep learning about staying clean!';
    } else if (percentage >= 40) {
        message: '😊 Good effort! You finished all 12 lessons of Term 1!';
    } else {
        message = '🌈 You completed Term 1! Review and keep practicing! You can do it!';
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
