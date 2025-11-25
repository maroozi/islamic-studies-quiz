// Year 2 Arabic Letters Group 4 - ك ل م ن هـ و ي with Short Vowels
const questions = [
    {
        question: "How do we read كَ ?",
        answers: ["Ki", "Ka", "Ku", "Ko"],
        correctIndex: 1,
        explanation: "Fatḥah gives the short 'a' sound."
    },
    {
        question: "How do we read كِ ?",
        answers: ["Ka", "Ku", "Ki", "Kee"],
        correctIndex: 2,
        explanation: "Kasrah makes the short 'i' sound."
    },
    {
        question: "How do we read كُ ?",
        answers: ["Ka", "Ki", "Koo", "Ku"],
        correctIndex: 3,
        explanation: "Dhammah gives the rounded 'u' sound."
    },
    {
        question: "How do we read لَ ?",
        answers: ["La", "Li", "Lu", "Lo"],
        correctIndex: 0,
        explanation: "لَ is pronounced 'La'."
    },
    {
        question: "How do we read لِ ?",
        answers: ["La", "Li", "Lu", "Lee"],
        correctIndex: 1,
        explanation: "Kasrah makes the 'i' sound."
    },
    {
        question: "How do we read لُ ?",
        answers: ["La", "Li", "Lu", "Loo"],
        correctIndex: 2,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we read مَ ?",
        answers: ["Mi", "Mu", "Mo", "Ma"],
        correctIndex: 3,
        explanation: "Fatḥah gives 'a'."
    },
    {
        question: "How do we read مِ ?",
        answers: ["Mi", "Ma", "Mu", "Mee"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i'."
    },
    {
        question: "How do we read مُ ?",
        answers: ["Ma", "Mu", "Mi", "Moo"],
        correctIndex: 1,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we read نَ ?",
        answers: ["Ni", "Nu", "Na", "No"],
        correctIndex: 2,
        explanation: "Fatḥah makes the short 'a': Na."
    },
    {
        question: "How do we read نِ ?",
        answers: ["Na", "Nu", "Nee", "Ni"],
        correctIndex: 3,
        explanation: "Kasrah makes the short 'i'."
    },
    {
        question: "How do we read نُ ?",
        answers: ["Nu", "Ni", "Na", "Noo"],
        correctIndex: 0,
        explanation: "Dhammah gives the round 'u'."
    },
    {
        question: "How do we read هَ ?",
        answers: ["Ka", "Ha (soft)", "Ha (heavy)", "Na"],
        correctIndex: 1,
        explanation: "هـ is a soft 'h' sound."
    },
    {
        question: "How do we read هِ ?",
        answers: ["Ha", "Hu", "Hi (soft)", "Hee"],
        correctIndex: 2,
        explanation: "Kasrah gives the short 'i'."
    },
    {
        question: "How do we read هُ ?",
        answers: ["Ha", "Hi", "Hoo", "Hu (soft)"],
        correctIndex: 3,
        explanation: "Dhammah gives a light 'u'."
    },
    {
        question: "How do we read وَ ?",
        answers: ["Wa", "Wu", "Wi", "Oo"],
        correctIndex: 0,
        explanation: "Fatḥah on و makes 'Wa'."
    },
    {
        question: "How do we read وِ ?",
        answers: ["Wa", "Wi", "Wu", "Wee"],
        correctIndex: 1,
        explanation: "Kasrah gives the 'i' sound, even though و is a round letter."
    },
    {
        question: "How do we read وُ ?",
        answers: ["Wa", "Wi", "Wu", "Woo"],
        correctIndex: 2,
        explanation: "Dhammah matches و's natural round shape."
    },
    {
        question: "How do we read يَ ?",
        answers: ["Yi", "Yu", "Yo", "Ya"],
        correctIndex: 3,
        explanation: "Fatḥah makes 'Ya'."
    },
    {
        question: "How do we read يِ ?",
        answers: ["Yi", "Ya", "Yu", "Yee"],
        correctIndex: 0,
        explanation: "Kasrah makes 'i'."
    },
    {
        question: "How do we read يُ ?",
        answers: ["Ya", "Yu", "Yi", "Yoo"],
        correctIndex: 1,
        explanation: "Dhammah gives the 'u' sound."
    },
    {
        question: "Which letter sounds like the English 'm'?",
        answers: ["ن", "ك", "م", "ه"],
        correctIndex: 2,
        explanation: "م makes the 'm' sound."
    },
    {
        question: "Which letter makes the soft 'h' sound?",
        answers: ["ح", "غ", "ك", "ه"],
        correctIndex: 3,
        explanation: "هـ is the light airy 'h'."
    },
    {
        question: "Which letter makes the 'wa' and 'wi' sounds?",
        answers: ["و", "ي", "ن", "ك"],
        correctIndex: 0,
        explanation: "و is the 'w' sound letter."
    },
    {
        question: "Which letter makes the 'ya' and 'yi' sounds?",
        answers: ["و", "ي", "م", "ك"],
        correctIndex: 1,
        explanation: "ي makes the 'y' sound."
    }
];

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
const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const progressBar = document.getElementById('progressBar');
const starsSpan = document.getElementById('stars');

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

// Kahoot color scheme
const kahootColors = ['red', 'blue', 'yellow', 'green'];
const shapeSymbols = {
    red: '🔺',
    blue: '💠',
    yellow: '⭐',
    green: '🔷'
};

function showQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    const question = questionsArray[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Clear previous answers
    answersGrid.innerHTML = '';
    
    // Shuffle answers with originalIndex tracking
    const answersWithIndex = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    // Create answer buttons
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
    
    // Hide feedback
    feedbackContainer.style.display = 'none';
    nextBtn.disabled = true;
}

function selectAnswer(selectedButton, selectedIndex, question) {
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
        if (!isReviewMode) {
            wrongAnswers.push(question);
        }
        feedbackEmoji.textContent = '😢';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.style.color = '#eb3349';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.style.display = 'block';
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = questionsArray.length - score;
    
    const percentage = (score / questionsArray.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = '🏆 PERFECT! Allāhumma Bārik! You completed all 28 Arabic letters! You are a champion!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You know your Arabic letters so well! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep practicing your letters!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Practice reading the letters more!';
    } else {
        message = '🌈 Keep trying! Practice your Arabic letters every day!';
    }
    
    resultMessage.textContent = message;
    
    // Show Review Mistakes button if there are wrong answers and not in review mode
    if (wrongAnswers.length > 0 && !isReviewMode) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

function resetQuiz() {
    initQuiz();
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    starsSpan.textContent = `⭐ ${stars}`;
    totalQuestionsSpan.textContent = reviewQuestions.length;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

// Initialize on page load
initQuiz();
