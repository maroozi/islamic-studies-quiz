// Year 2: More About Allah ﷻ - Beautiful Names - Kahoot-Style Quiz
// Lesson 4 - Term 1

const questions = [
    {
        question: "Who tells us about Himself in the Qur'ān? 📖",
        answers: ["Allah ﷻ", "Angels", "People", "Animals"],
        correctIndex: 0,
        explanation: "Allah ﷻ tells us about Himself in the Qur'ān. He knows Himself best! SubhanAllah! 🌟"
    },
    {
        question: "What do the names of Allah ﷻ teach us? 🤔",
        answers: ["Different things about Allah ﷻ", "How to play games", "How to make food", "How to draw pictures"],
        correctIndex: 0,
        explanation: "Each name of Allah ﷻ teaches us something beautiful about Him! He has 99 beautiful names! 💚"
    },
    {
        question: "Which name of Allah ﷻ means 'The All-Merciful'? ☝️",
        answers: ["Ar-Rahmān", "Al-Khāliq", "Al-Malik", "Ar-Rahīm"],
        correctIndex: 0,
        explanation: "Ar-Rahmān (الرحمن) means The All-Merciful! Allah is kind and generous to everyone! 🌈"
    },
    {
        question: "Who is Ar-Rahmān kind and generous to? 🌍",
        answers: ["Everyone, even those who don't believe", "Only children", "Only Muslims", "Only animals"],
        correctIndex: 0,
        explanation: "Allah Ar-Rahmān is kind to EVERYONE - Muslims, non-Muslims, people, animals, plants! His mercy is for all! 💚✨"
    },
    {
        question: "Which name of Allah ﷻ means 'The Intensely Merciful'? ❤️",
        answers: ["Ar-Rahīm", "Al-Malik", "Ar-Rahmān", "Al-Khāliq"],
        correctIndex: 0,
        explanation: "Ar-Rahīm (الرحيم) means The Intensely Merciful! Allah loves believers so much and forgives them! 💚"
    },
    {
        question: "What does Ar-Rahīm do for believers? 🤲",
        answers: ["Forgives their sins", "Helps them sleep", "Teaches them maths", "Gives them toys"],
        correctIndex: 0,
        explanation: "Allah Ar-Rahīm forgives the sins of believers who ask for forgiveness. His mercy is special for us! 💚✨"
    },
    {
        question: "Which name of Allah ﷻ means 'The King'? 👑",
        answers: ["Al-Malik", "Al-Khāliq", "Ar-Rahmān", "Ar-Rahīm"],
        correctIndex: 0,
        explanation: "Al-Malik (الملك) means The King! Allah is the King of the whole universe! SubhanAllah! 👑✨"
    },
    {
        question: "What does Al-Malik mean? 🏰",
        answers: ["Allah ﷻ is the King who owns everything", "Allah ﷻ is the Creator", "Allah ﷻ is the Teacher", "Allah ﷻ is the Traveller"],
        correctIndex: 0,
        explanation: "Al-Malik means Allah ﷻ is the King who owns and controls everything in the whole universe! 👑🌍"
    },
    {
        question: "Which name of Allah ﷻ means 'The Creator'? 🌟",
        answers: ["Al-Khāliq", "Al-Malik", "Ar-Rahīm", "Ar-Rahmān"],
        correctIndex: 0,
        explanation: "Al-Khāliq (الخالق) means The Creator! Allah created everything we see and everything we can't see! 🌟"
    },
    {
        question: "What did Allah ﷻ create? 🌍",
        answers: ["Everything in a perfect way", "Only animals", "Only mountains", "Only the sky"],
        correctIndex: 0,
        explanation: "Allah Al-Khāliq created EVERYTHING - the sky, earth, animals, people, trees, stars - all perfectly! MashaAllah! 🌟🌈"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let stars = 0;
let wrongAnswers = []; // Track questions answered incorrectly
let isReviewMode = false; // Flag to indicate if reviewing mistakes
let reviewQuestions = []; // Questions to review

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
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
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    totalQuestionsSpan.textContent = questionsArray.length;
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
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    const question = questionsArray[currentQuestionIndex];
    
    // Update UI
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questionsArray.length) * 100}%`;
    
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
        
        // Track wrong answer
        if (!isReviewMode) {
            wrongAnswers.push(question);
        }
        
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
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    const totalQuestions = questionsArray.length;
    const incorrectCount = totalQuestions - score;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = incorrectCount;
    
    // Result message with emojis
    let message = '';
    if (percentage === 100) {
        message = '✨ PERFECT! You know Allah\'s beautiful names so well! MashaAllah! 💚';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You learned a lot about Allah ﷻ! Keep it up! 👑';
    } else if (percentage >= 60) {
        message = '👏 Great job! You know many of Allah\'s beautiful names! 🌟';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning about Allah ﷻ! 💪';
    } else {
        message = '🌈 Keep trying! Allah\'s names are so beautiful to learn! ✨';
    }
    
    resultMessage.textContent = message;
    
    // Show "Review Mistakes" button only if there are wrong answers and not in review mode
    if (wrongAnswers.length > 0 && !isReviewMode) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Review mistakes
function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    starsSpan.textContent = `⭐ ${stars}`;
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    totalQuestionsSpan.textContent = reviewQuestions.length;
    showQuestion();
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
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', backToLessons);

// Initialize on load
initQuiz();
