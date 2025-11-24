// Year 2: Spreading Salām - Kahoot-Style Quiz
// Lesson 5 - Term 1

const questions = [
    {
        question: "What is a ḥadīth? 📚",
        answers: ["A saying of Prophet Muhammad ﷺ", "A storybook", "A poem", "A rule made by people"],
        correctIndex: 0,
        explanation: "A ḥadīth is a saying or action of Prophet Muhammad ﷺ. We learn from his beautiful teachings! 🌟"
    },
    {
        question: "What did Prophet Muhammad ﷺ say about salām? 👋",
        answers: ["The best of two people is the one who says salām first", "Only adults should say it", "Only at school", "You should whisper it"],
        correctIndex: 0,
        explanation: "The Prophet ﷺ taught us that the best person is the one who greets first. Be the first to say salām! 💚"
    },
    {
        question: "What do we say when we meet another Muslim? 🤝",
        answers: ["Assalāmu 'alaikum", "Good morning", "Hello friend", "Goodbye"],
        correctIndex: 0,
        explanation: "We say 'Assalāmu 'alaikum' (السلام عليكم) which means 'Peace be upon you!' What a beautiful greeting! 🌟"
    },
    {
        question: "What does 'Assalāmu 'alaikum wa raḥmatullāhi wa barakātuh' mean? 💚",
        answers: ["May the peace, mercy and blessings of Allah be with you", "Have a nice day", "May Allah give you lots of money", "Please be quiet"],
        correctIndex: 0,
        explanation: "This is the LONGEST and BEST way to say salām! It asks Allah to give peace, mercy, and blessings! SubhanAllah! ✨"
    },
    {
        question: "If someone says salām to us first, what must we do? 🙏",
        answers: ["Reply with salām", "Ignore them", "Say something else", "Run away"],
        correctIndex: 0,
        explanation: "We MUST reply when someone greets us with salām. It's a very important rule in Islam! 💚"
    },
    {
        question: "How can we reply when someone says salām to us? 👋",
        answers: ["Wa 'alaikum as-salām", "Thank you", "Nice to meet you", "Good night"],
        correctIndex: 0,
        explanation: "We say 'Wa 'alaikum as-salām' (وعليكم السلام) which means 'And peace be upon you too!' 🌟"
    },
    {
        question: "What did Prophet Muhammad ﷺ teach us to do when greeting other Muslims? 🤝",
        answers: ["Shake their hand", "Give them a gift", "Sing a song", "Draw a picture"],
        correctIndex: 0,
        explanation: "The Prophet ﷺ taught us to shake hands when we greet each other. It shows love and respect! ❤️"
    },
    {
        question: "Who should men shake hands with? 👨",
        answers: ["Only other men", "Everyone", "Only women", "Only children"],
        correctIndex: 0,
        explanation: "Men shake hands with other men and boys. This is the Islamic way of greeting! 🤝"
    },
    {
        question: "Who should women shake hands with? 👩",
        answers: ["Only women", "Only men", "Everyone", "Only children"],
        correctIndex: 0,
        explanation: "Women shake hands with other women and girls. Islam teaches us respectful ways to greet! 🤝💚"
    },
    {
        question: "What happens when we greet Muslims with salām? ❤️",
        answers: ["It creates love and friendship", "It makes people sad", "It makes us tired", "Nothing special happens"],
        correctIndex: 0,
        explanation: "When we say salām, it creates love and friendship between Muslims! It brings us closer together! 🌟💚"
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
        message = '👋 PERFECT! You know all about salām! MashaAllah! Assalāmu \'alaikum! 💚';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You\'re a salām expert! Keep spreading peace! 🤝';
    } else if (percentage >= 60) {
        message = '👏 Great job! You know a lot about Islamic greetings! 🌟';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning about salām! 💪';
    } else {
        message = '🌈 Keep trying! Saying salām is so beautiful to learn! 👋';
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
    window.location.href = 'year2-islamic-studies.html';
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', backToLessons);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', retryQuiz);
backToLessonsBtn.addEventListener('click', backToLessons);

// Initialize on load
initQuiz();
