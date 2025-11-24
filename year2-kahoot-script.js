// Year 2: We Are Muslims - Kahoot-Style Quiz
// Lesson 1 - Term 1

const questions = [
    {
        question: "Who made everything we see around us? 🌍",
        answers: ["Allah ﷻ", "Our parents", "The sun", "Nobody"],
        correctIndex: 0,
        explanation: "Allah ﷻ is the Creator of everything! He made the sky, trees, animals, and us. We say 'Subhan Allah' (Glory be to Allah)! 🌟"
    },
    {
        question: "How many gods are there in Islam? ☝️",
        answers: ["One", "Two", "Three", "Many"],
        correctIndex: 0,
        explanation: "There is only ONE Allah ﷻ! We believe in Tawheed, which means Allah is One and Only. We say 'La ilaha illallah' (There is no god but Allah). 💚"
    },
    {
        question: "What is the special book that Allah ﷻ sent for us? 📖",
        answers: ["The Qur'an", "A storybook", "A comic book", "A magazine"],
        correctIndex: 0,
        explanation: "The Qur'an is Allah's special book! It has Allah's words and teaches us how to be good Muslims. We read it with love and respect. 📚✨"
    },
    {
        question: "The Qur'an was sent to help us know what? 🤔",
        answers: ["Right from wrong", "Math problems", "Cartoons", "Games"],
        correctIndex: 0,
        explanation: "The Qur'an teaches us right from wrong! It shows us how to be kind, honest, and good. It's like a guidebook for life! 🌈"
    },
    {
        question: "Who is the last Prophet that Allah ﷻ sent to teach us? 🌙",
        answers: ["Prophet Muhammad ﷺ", "A king", "A teacher", "A doctor"],
        correctIndex: 0,
        explanation: "Prophet Muhammad ﷺ is Allah's final messenger! He showed us how to follow Islam with kindness and love. We send peace upon him: 'Sallallahu Alaihi Wasallam' ❤️"
    },
    {
        question: "Prophet Muhammad ﷺ was very kind to... 👥",
        answers: ["Everyone", "Only his friends", "Only rich people", "Only children"],
        correctIndex: 0,
        explanation: "Prophet Muhammad ﷺ was kind to EVERYONE - young, old, rich, poor, even animals! We follow his beautiful example. 🌟"
    },
    {
        question: "What does it mean to be a Muslim? 🕌",
        answers: ["To follow Allah's way", "To play games", "To eat sweets", "To watch TV"],
        correctIndex: 0,
        explanation: "Being a Muslim means following Allah's way! We pray, be kind, tell the truth, and try our best to make Allah happy. 💚"
    },
    {
        question: "When we help others, we make who happy? 😊",
        answers: ["Allah ﷻ", "Nobody", "Only ourselves", "The teacher"],
        correctIndex: 0,
        explanation: "When we help others, Allah ﷻ is SO happy with us! Being kind is part of being a good Muslim. Helping others brings blessings! 🌟"
    },
    {
        question: "If someone is sad, what should we do? 💝",
        answers: ["Be kind and help them", "Laugh at them", "Ignore them", "Run away"],
        correctIndex: 0,
        explanation: "We should ALWAYS be kind and help! Prophet Muhammad ﷺ taught us to care for others. A smile is charity! 😊💚"
    },
    {
        question: "What should we say when we want to thank Allah ﷻ? 🤲",
        answers: ["Alhamdulillah", "Hello", "Goodbye", "Sorry"],
        correctIndex: 0,
        explanation: "'Alhamdulillah' means 'All praise is for Allah!' We say it when we're happy, thankful, or when good things happen. 🌟"
    },
    {
        question: "Telling the truth is... ✨",
        answers: ["Very important", "Not important", "Sometimes okay", "For adults only"],
        correctIndex: 0,
        explanation: "Telling the truth is VERY important! Muslims always speak the truth, even when it's hard. Allah ﷻ loves truthful people! 💚"
    },
    {
        question: "Who should we be kind to? 🌍",
        answers: ["Everyone and everything", "Only family", "Only friends", "Only teachers"],
        correctIndex: 0,
        explanation: "We should be kind to EVERYONE - people, animals, plants! Islam teaches us to spread kindness everywhere we go. 🌈❤️"
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

// Kahoot shape symbols for each color
const shapeSymbols = {
    red: '🔺',      // Triangle
    blue: '💠',     // Diamond
    yellow: '⭐',   // Star
    green: '🔷'     // Green diamond/square
};

// Show question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update UI
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Hide feedback
    feedbackContainer.classList.remove('show');
    
    // Map answers with original index and shuffle
    const answersWithIndices = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndices);
    
    // Kahoot colors in order
    const kahootColors = ['red', 'blue', 'yellow', 'green'];
    
    // Create answer buttons with Kahoot styling
    answersGrid.innerHTML = '';
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
}

// Select answer
function selectAnswer(selectedButton, selectedIndex, question) {
    // Disable all buttons
    const buttons = answersGrid.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);
    
    // Get correct answer text
    const correctAnswerText = question.answers[question.correctIndex];
    const selectedAnswerText = selectedButton.querySelector('.answer-text').textContent;
    
    // Check if answer is correct by TEXT MATCHING
    const isCorrect = selectedAnswerText === correctAnswerText;
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        stars += 10;
        starsSpan.textContent = `⭐ ${stars}`;
        
        feedbackEmoji.textContent = '🎉';
        feedbackText.textContent = 'Awesome! Correct! 🌟';
        feedbackText.className = 'feedback-text correct';
    } else {
        selectedButton.classList.add('wrong');
        
        // Highlight correct answer
        buttons.forEach(btn => {
            if (btn.querySelector('.answer-text').textContent === correctAnswerText) {
                btn.classList.add('correct');
            }
        });
        
        feedbackEmoji.textContent = '💪';
        feedbackText.textContent = 'Good try! Let\'s learn! 📚';
        feedbackText.className = 'feedback-text wrong';
    }
    
    // Show explanation
    explanation.textContent = question.explanation;
    feedbackContainer.classList.add('show');
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const totalQuestions = questions.length;
    const incorrectCount = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = incorrectCount;
    
    // Result message with emojis
    let message = '';
    if (percentage === 100) {
        message = '🌟 PERFECT! You\'re a superstar! MashaAllah! 🌟';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You did amazing! Keep it up! 💚';
    } else if (percentage >= 60) {
        message = '👏 Great job! You\'re learning so well! 📚';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Practice makes perfect! 💪';
    } else {
        message = '🌈 Keep trying! You\'re doing great! Let\'s learn together! 📖';
    }
    
    resultMessage.textContent = message;
}

// Retry quiz
function retryQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    initQuiz();
}

// Go back to lessons
function backToLessons() {
    window.location.href = 'year2-term1.html';
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', backToLessons);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', retryQuiz);
backToLessonsBtn.addEventListener('click', backToLessons);

// Initialize on load
initQuiz();
