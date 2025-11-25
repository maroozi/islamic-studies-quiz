// Year 2: Small Daily Duʿās - Kahoot-Style Quiz
// Lesson 6 - Term 1

const questions = [
    {
        question: "What does the word \"duʿā\" mean? 🤲",
        answers: ["Talking to our friends", "Calling upon Allāh ﷻ", "Playing games", "Reading a story"],
        correctIndex: 1,
        explanation: "Duʿā means talking to Allāh ﷻ, asking Him, thanking Him, or remembering Him. 🌟"
    },
    {
        question: "When should we say \"Bismillāh\"? 📿",
        answers: ["After eating", "Before starting anything", "When going to sleep", "When saying goodbye"],
        correctIndex: 1,
        explanation: "We say \"Bismillāh\" before beginning any action. It means 'In the name of Allah'! 💚"
    },
    {
        question: "Which duʿā means \"If Allāh wills\"? 🌟",
        answers: ["Alhamdulillāh", "Inshā'Allāh", "Astaghfirullāh", "Jazāk Allāhu Khayr"],
        correctIndex: 1,
        explanation: "\"Inshā'Allāh\" reminds us things only happen if Allāh ﷻ wants them to. ✨"
    },
    {
        question: "When do we say \"Inshā'Allāh\"? 🗓️",
        answers: ["When talking about something we will do in the future", "When we sneeze", "When we are scared", "When seeing a rainbow"],
        correctIndex: 0,
        explanation: "We say \"Inshā'Allāh\" for things we plan to do later. Allah knows best! 💚"
    },
    {
        question: "Which duʿā means \"I seek forgiveness from Allāh\"? 🙏",
        answers: ["Astaghfirullāh", "Bismillāh", "Alhamdulillāh", "Māshā'Allāh"],
        correctIndex: 0,
        explanation: "\"Astaghfirullāh\" is said when we ask Allāh ﷻ to forgive us. 💚"
    },
    {
        question: "When should we say \"Astaghfirullāh\"? 💔",
        answers: ["When someone gives us a present", "When we want Allāh ﷻ to forgive us", "Before eating", "When waking up"],
        correctIndex: 1,
        explanation: "We say it when asking Allāh ﷻ for forgiveness. Allah is Most-Forgiving! 🌟"
    },
    {
        question: "Which duʿā means \"I seek protection with Allāh\"? 🛡️",
        answers: ["A'ūdhu billāh", "Alhamdulillāh", "Inshā'Allāh", "Jazāk Allāhu Khayr"],
        correctIndex: 0,
        explanation: "\"A'ūdhu billāh\" is said when we ask Allāh ﷻ to protect us. 💪"
    },
    {
        question: "When should we say \"A'ūdhu billāh\"? 📖",
        answers: ["When we sneeze", "When starting the Qur'ān or feeling afraid", "When someone helps us", "Before going to school"],
        correctIndex: 1,
        explanation: "We say it when we need Allāh's protection, like before reading Qur'ān! 🌟"
    },
    {
        question: "Which duʿā do we say to thank someone? 🎁",
        answers: ["Astaghfirullāh", "Jazāk Allāhu Khayr", "Māshā'Allāh", "Inshā'Allāh"],
        correctIndex: 1,
        explanation: "\"Jazāk Allāhu Khayr\" means \"May Allāh give you good.\" What a beautiful thank you! 💚"
    },
    {
        question: "When should we say \"Alhamdulillāh\"? 😊",
        answers: ["After sneezing or when feeling grateful", "When we forget something", "When playing outside", "When doing homework"],
        correctIndex: 0,
        explanation: "\"Alhamdulillāh\" is our way of thanking Allāh ﷻ. All praise belongs to Allah! 🌟"
    },
    {
        question: "What does \"Māshā'Allāh Tabārak Allāh\" remind us? ✨",
        answers: ["That we are hungry", "That something good comes from Allāh ﷻ", "That it is time to sleep", "That we lost something"],
        correctIndex: 1,
        explanation: "It reminds us that all good things are from Allāh ﷻ. SubhanAllah! 💚"
    },
    {
        question: "When do we say \"Māshā'Allāh Tabārak Allāh\"? 🎉",
        answers: ["When something nice happens to us or others", "When leaving the house", "When going to school", "When feeling tired"],
        correctIndex: 0,
        explanation: "We say it when we see blessings from Allāh ﷻ. It protects from the evil eye! ✨"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let stars = 0;
let wrongAnswers = [];
let isReviewMode = false;
let reviewQuestions = [];

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
    reviewMistakesBtn.style.display = 'none';
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
        message = '🤲 PERFECT! Allāhumma Bārik! You know all your duʿās! Keep saying them every day! ⭐';
    } else if (percentage >= 80) {
        message = '🎉 Excellent Duʿā Expert! MashaAllah! You know your duʿās so well! 🌟';
    } else if (percentage >= 60) {
        message = '👍 Great job! You\'re learning your duʿās! Keep practicing! 💪';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning these beautiful duʿās! 📿';
    } else {
        message = '🌈 Keep trying! Practice your duʿās every day and try again! 🤲';
    }
    
    resultMessage.textContent = message;
    
    // Show Review Mistakes button if there are wrong answers and not in review mode
    if (wrongAnswers.length > 0 && !isReviewMode) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Retry quiz
function retryQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    initQuiz();
}

// Review mistakes
function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = wrongAnswers.map(q => questions[q.originalIndex]);
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsSpan.textContent = reviewQuestions.length;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
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
