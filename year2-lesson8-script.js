// Year 2: Islām - The Complete Way of Life - Kahoot-Style Quiz
// Lesson 8 - Term 1

const questions = [
    {
        question: "Who created the entire universe? 🌌",
        answers: ["People", "Angels", "Allāh", "Animals"],
        correctIndex: 2,
        explanation: "Allāh ﷻ created everything – the sky, the earth, the stars, the animals, and us! He is the Creator of all! 🌟"
    },
    {
        question: "Why did Allāh send prophets and messengers? 📖",
        answers: ["To teach us maths", "To teach us how to live our lives", "To teach us how to play", "To tell stories"],
        correctIndex: 1,
        explanation: "Allāh sent prophets and messengers to teach us how to live good lives and worship Him properly! 💚"
    },
    {
        question: "Islam teaches us how to… 🕌",
        answers: ["Do magic", "Worship Allāh and live our lives", "Draw pictures", "Make toys"],
        correctIndex: 1,
        explanation: "Islam teaches us how to worship Allāh and live every part of our lives in the best way! SubhanAllah! ✨"
    },
    {
        question: "Islam teaches us even small things like… 🚽",
        answers: ["How to use the bathroom", "How to fly", "How to build cars", "How to become invisible"],
        correctIndex: 0,
        explanation: "Islam is so complete that it even teaches us polite manners for using the bathroom! It covers everything! 🌟"
    },
    {
        question: "What should we be to our parents, teachers, and neighbours? 👨‍👩‍👧",
        answers: ["Rude", "Quiet", "Good and kind", "Angry"],
        correctIndex: 2,
        explanation: "Islam teaches us to be good and kind to our parents, teachers, and neighbours. Being kind makes everyone happy! ❤️"
    },
    {
        question: "Islam teaches us to be kind to… 🐾",
        answers: ["Only people we like", "Animals", "Nobody", "Only our family"],
        correctIndex: 1,
        explanation: "Islam teaches us to be kind to animals too! Even feeding a hungry animal brings us rewards from Allāh! 💚"
    },
    {
        question: "Who created the world and everything in it? 🌍",
        answers: ["People", "Nature", "Allāh", "Animals"],
        correctIndex: 2,
        explanation: "Allāh ﷻ created the whole world – the trees, mountains, oceans, and every living thing! Allāhu Akbar! 🌟"
    },
    {
        question: "How should we treat the environment? 🌳",
        answers: ["Break everything", "Throw rubbish everywhere", "Look after the planet", "Waste water"],
        correctIndex: 2,
        explanation: "Islam teaches us to look after our planet! We must keep it clean and beautiful for everyone! 🌍💚"
    },
    {
        question: "Why must we not waste things? 💧",
        answers: ["Because they look messy", "Because Allāh created them for us", "Because they are boring", "Because the teacher said so"],
        correctIndex: 1,
        explanation: "Allāh created water, food, and everything for us. We must not waste them! Be thankful and careful! ✨"
    },
    {
        question: "Why is Islām a complete way of life? 🌟",
        answers: ["Because it is only about praying", "Because it teaches us only one thing", "Because it teaches us how to live in every part of our life", "Because it is a hobby"],
        correctIndex: 2,
        explanation: "Islam is complete because it teaches us about EVERYTHING – praying, eating, sleeping, being kind, and much more! Alhamdulillāh! 💚"
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
        message = '🌟 PERFECT! Allāhumma Bārik! You understand Islam is a complete way of life!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You know how Islam guides us in everything! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep learning about our beautiful religion!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Islam teaches us about every part of life!';
    } else {
        message = '🌈 Keep trying! Learn more about how Islam guides us every day!';
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
