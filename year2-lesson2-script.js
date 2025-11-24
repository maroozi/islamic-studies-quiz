// Year 2: Our Holy Book (The Qur'an) - Kahoot-Style Quiz
// Lesson 2 - Term 1

const questions = [
    {
        question: "What is the Qur'an? 📖",
        answers: ["The Word of Allah ﷻ", "A storybook", "A history book", "A science book"],
        correctIndex: 0,
        explanation: "Muslims believe the Qur'an is the Word of Allah ﷻ. It was sent down to guide us! 🌟"
    },
    {
        question: "Who brought the Qur'an to Prophet Muhammad ﷺ? 👼",
        answers: ["Angel Jibrīl (Gabriel)", "Angel Mikā'īl", "Angel Isrāfīl", "Angel of rain"],
        correctIndex: 0,
        explanation: "Angel Jibrīl عليه السلام recited the Qur'an to the Prophet Muhammad ﷺ. What an amazing gift from Allah! 💚"
    },
    {
        question: "In which language was the Qur'an revealed? 🌍",
        answers: ["Arabic", "English", "Urdu", "French"],
        correctIndex: 0,
        explanation: "The Qur'an was revealed in the beautiful Arabic language! That's why learning Arabic is special. ✨"
    },
    {
        question: "How long did it take for the Qur'an to be revealed? ⏰",
        answers: ["23 years", "2 years", "10 years", "1 year"],
        correctIndex: 0,
        explanation: "It took 23 years for all of the Qur'an to be revealed! Slowly and carefully, Allah sent His guidance. 📚"
    },
    {
        question: "What is a verse of the Qur'an called? 📝",
        answers: ["An ayah", "A page", "A surah", "A chapter"],
        correctIndex: 0,
        explanation: "Each verse in the Qur'an is called an ayah (آية). A surah is a chapter! 🌟"
    },
    {
        question: "Why has the Qur'an stayed unchanged for more than 1,400 years? 🛡️",
        answers: ["Because Allah promised to keep it safe", "Because people edited it", "Because it keeps getting rewritten", "Because it is short"],
        correctIndex: 0,
        explanation: "Allah ﷻ promised to protect the Qur'an forever! It has never changed. SubhanAllah! 💚"
    },
    {
        question: "Who memorised and wrote down the Qur'an after listening to the Prophet ﷺ? ✍️",
        answers: ["His companions", "Strangers", "Children only", "Kings and queens"],
        correctIndex: 0,
        explanation: "The companions رضي الله عنهم learnt, memorised, and wrote down the Qur'an. They loved it so much! 📖❤️"
    },
    {
        question: "Why should Muslims try to learn Arabic? 🎓",
        answers: ["So they can understand the Qur'an better", "So they can travel", "So they can read stories", "So they can speak to animals"],
        correctIndex: 0,
        explanation: "Learning Arabic helps us understand the Qur'an in its original, beautiful language! 🌟"
    },
    {
        question: "What makes the Qur'an unique? ✨",
        answers: ["It has stories, lessons and instructions from Allah", "It is very old", "It was written by many authors", "It has pictures"],
        correctIndex: 0,
        explanation: "The Qur'an teaches us many wonderful things from Allah ﷻ - stories, lessons, and how to live a good life! 💚"
    },
    {
        question: "What is it like when we recite the Qur'an? 🤲",
        answers: ["As though Allah is talking to us", "Like reading a newspaper", "Like playing a game", "As though we are whispering"],
        correctIndex: 0,
        explanation: "When we recite the Qur'an, it feels like Allah ﷻ is guiding us and talking to our hearts! Beautiful! 🌈❤️"
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
        message = '📖 PERFECT! You know the Qur\'an so well! MashaAllah! 🌟';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You\'re learning beautifully! Keep it up! 💚';
    } else if (percentage >= 60) {
        message = '👏 Great job! You know a lot about the Qur\'an! 📚';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning about Allah\'s Book! 💪';
    } else {
        message = '🌈 Keep trying! The Qur\'an is special - let\'s learn more! 📖';
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
