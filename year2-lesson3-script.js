// Year 2: Young Muhammad ﷺ and Halīmah رضي الله عنها - Kahoot-Style Quiz
// Lesson 3 - Term 1

const questions = [
    {
        question: "Who was Prophet Muhammad's ﷺ father? 👨",
        answers: ["Abdullāh", "Abu Bakr", "Uthmān", "Ibrāhīm"],
        correctIndex: 0,
        explanation: "Prophet Muhammad's ﷺ father was Abdullāh. He was from a noble family in Makkah! 🌟"
    },
    {
        question: "Was Prophet Muhammad ﷺ an orphan? 🤱",
        answers: ["Yes", "No", "Only later in life", "Only when he was a baby"],
        correctIndex: 0,
        explanation: "His father died before he was born and his mother died when he was six. Allah took special care of him! ❤️"
    },
    {
        question: "Why did the Arabs send children to the desert? 🏜️",
        answers: ["To grow strong and learn pure Arabic", "To play games", "To go on holiday", "To ride animals"],
        correctIndex: 0,
        explanation: "The desert helped children become strong and healthy, and learn the best Arabic language! 💪"
    },
    {
        question: "Who agreed to take young Muhammad ﷺ to the desert? 👩",
        answers: ["Halīmah", "Amina", "Fatimah", "Asiyah"],
        correctIndex: 0,
        explanation: "Halīmah رضي الله عنها took care of the Prophet ﷺ and loved him so much! She was his wet nurse. ❤️"
    },
    {
        question: "Why did nobody want to take baby Muhammad ﷺ at first? 🤔",
        answers: ["He had no father, so they thought his mother couldn't pay", "They didn't like children", "He cried too much", "He was too old"],
        correctIndex: 0,
        explanation: "They thought Amina رضي الله عنها wouldn't be able to pay the wet nurses because she was a widow. But Allah had a special plan! 💚"
    },
    {
        question: "What happened when Halīmah رضي الله عنها took care of Muhammad ﷺ? ✨",
        answers: ["Blessings came and her animals produced more milk", "Nothing changed", "Her animals got weaker", "Her family moved away"],
        correctIndex: 0,
        explanation: "Allah ﷻ sent blessings (barakah) to Halīmah's family because of the Prophet ﷺ! Her goats gave lots of milk! 🐐💚"
    },
    {
        question: "What happened to Halīmah's sick donkey after she took Muhammad ﷺ? 🐴",
        answers: ["It became strong and fast", "It ran away", "It stayed sick", "It turned into a camel"],
        correctIndex: 0,
        explanation: "This was one of the miracles Allah sent! The donkey became strong and fast. SubhanAllah! ✨"
    },
    {
        question: "What amazing thing did Angel Jibrīl عليه السلام do when the Prophet ﷺ was five? 👼",
        answers: ["He washed his heart and purified it", "He gave him toys", "He taught him Arabic", "He took him to Makkah"],
        correctIndex: 0,
        explanation: "Angel Jibrīl عليه السلام opened his chest and washed his blessed heart with special water from Zamzam! What a miracle! 💚✨"
    },
    {
        question: "Why were the other children scared? 😨",
        answers: ["They saw what Angel Jibrīl did", "They saw a wild animal", "They were lost", "They heard a loud noise"],
        correctIndex: 0,
        explanation: "They witnessed the chest-opening miracle and were frightened! They ran to tell Halīmah what they saw. 👼"
    },
    {
        question: "Where did Halīmah رضي الله عنها take Muhammad ﷺ after the miracle? 🏠",
        answers: ["Back to his mother Amina رضي الله عنها in Makkah", "To Madinah", "To another village", "To the market"],
        correctIndex: 0,
        explanation: "She returned him safely to his beloved mother Amina رضي الله عنها in Makkah after this amazing event! 🌟❤️"
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
        message = '🌙 PERFECT! You know all about baby Muhammad ﷺ! MashaAllah! 🌟';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You learned so much about the Prophet ﷺ! Keep it up! 💚';
    } else if (percentage >= 60) {
        message = '👏 Great job! You know a lot about Halīmah\'s story! 📚';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning about the Prophet\'s ﷺ childhood! 💪';
    } else {
        message = '🌈 Keep trying! The story of baby Muhammad ﷺ is so special! 🌙';
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
