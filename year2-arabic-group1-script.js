// Questions for Arabic Letters Group 1
const questions = [
    {
        question: "How do we read أَ ?",
        answers: ["A", "I", "U", "Oo"],
        correctIndex: 0,
        explanation: "Fatḥah ( َ ) makes the sound short and open like 'A'."
    },
    {
        question: "How do we read أِ ?",
        answers: ["I", "A", "U", "O"],
        correctIndex: 0,
        explanation: "Kasrah ( ِ ) makes a light 'i' sound."
    },
    {
        question: "How do we read أُ ?",
        answers: ["U", "A", "I", "Ee"],
        correctIndex: 0,
        explanation: "Dhammah ( ُ ) makes a rounded 'u' sound."
    },
    {
        question: "How do we read بَ ?",
        answers: ["Ba", "Bi", "Bu", "Bo"],
        correctIndex: 0,
        explanation: "Fatḥah ( َ ) makes the short 'a' sound: Ba."
    },
    {
        question: "How do we read بِ ?",
        answers: ["Bi", "Ba", "Bu", "Bee"],
        correctIndex: 0,
        explanation: "Kasrah ( ِ ) gives the short 'i' sound."
    },
    {
        question: "How do we read بُ ?",
        answers: ["Bu", "Ba", "Bi", "Bo"],
        correctIndex: 0,
        explanation: "Dhammah ( ُ ) makes a rounded 'u' sound."
    },
    {
        question: "What is the sound of تَ ?",
        answers: ["Ta", "Ti", "Tu", "Teh"],
        correctIndex: 0,
        explanation: "Fatḥah gives the short 'a': Ta."
    },
    {
        question: "What is the sound of تِ ?",
        answers: ["Ti", "Ta", "Tu", "Tee"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i': Ti."
    },
    {
        question: "What is the sound of تُ ?",
        answers: ["Tu", "Ta", "Ti", "Too"],
        correctIndex: 0,
        explanation: "Dhammah gives the short 'u': Tu."
    },
    {
        question: "How do we pronounce ثَ ?",
        answers: ["Tha", "Sa", "Sha", "Za"],
        correctIndex: 0,
        explanation: "ث makes the soft 'th' sound like in 'think'."
    },
    {
        question: "How do we pronounce ثِ ?",
        answers: ["Thi", "Tha", "Thu", "Si"],
        correctIndex: 0,
        explanation: "Kasrah makes the 'i' sound: Thi."
    },
    {
        question: "How do we pronounce ثُ ?",
        answers: ["Thu", "Tho", "Tha", "Si"],
        correctIndex: 0,
        explanation: "Dhammah rounds the sound to 'u': Thu."
    },
    {
        question: "How do we read جَ ?",
        answers: ["Ja", "Ga", "Cha", "Sha"],
        correctIndex: 0,
        explanation: "ج makes the 'j' sound: Ja."
    },
    {
        question: "How do we read جِ ?",
        answers: ["Ji", "Ja", "Ju", "Gee"],
        correctIndex: 0,
        explanation: "Kasrah gives the 'i' sound: Ji."
    },
    {
        question: "How do we read جُ ?",
        answers: ["Ju", "Jo", "Ja", "Ji"],
        correctIndex: 0,
        explanation: "Dhammah creates a rounded 'u' sound."
    },
    {
        question: "What is the correct sound for حَ ?",
        answers: ["Ha (soft breeze sound)", "Ha (strong)", "Kha", "Ja"],
        correctIndex: 0,
        explanation: "ح is a soft breathy 'h' sound from the throat."
    },
    {
        question: "What is the correct sound for حِ ?",
        answers: ["Hi (soft)", "Ha", "Hu", "Khi"],
        correctIndex: 0,
        explanation: "Kasrah gives the soft 'i' sound with the letter ح."
    },
    {
        question: "What is the correct sound for حُ ?",
        answers: ["Hu (soft)", "Ha", "Hi", "Khu"],
        correctIndex: 0,
        explanation: "Dhammah gives the soft 'u' sound with ح."
    },
    {
        question: "How do we pronounce خَ ?",
        answers: ["Kha (heavy)", "Ha", "Ka", "Sha"],
        correctIndex: 0,
        explanation: "خ is a heavy throat sound like 'kh' in 'Khalid'."
    },
    {
        question: "How do we pronounce خِ ?",
        answers: ["Khi", "Kha", "Khu", "Hi"],
        correctIndex: 0,
        explanation: "Kasrah gives the 'i' sound even with the strong خ."
    },
    {
        question: "How do we pronounce خُ ?",
        answers: ["Khu", "Khi", "Kha", "Hu"],
        correctIndex: 0,
        explanation: "Dhammah gives the rounded 'u': Khu."
    },
    {
        question: "Which letter makes the heavy 'kh' sound?",
        answers: ["خ", "ح", "ج", "ث"],
        correctIndex: 0,
        explanation: "خ is the only heavy 'kh' letter in this group."
    },
    {
        question: "Which letter has the softest sound from the throat?",
        answers: ["ح", "خ", "ج", "ث"],
        correctIndex: 0,
        explanation: "ح is a gentle breathy sound from the throat."
    },
    {
        question: "Which letter sounds like the 'th' in 'think'?",
        answers: ["ث", "ت", "ب", "ج"],
        correctIndex: 0,
        explanation: "ث is the Arabic 'soft th' letter."
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
        message = '🔤 PERFECT! Allāhumma Bārik! You can read all the letters perfectly!';
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
    reviewQuestions = wrongAnswers.map(q => questions[q.originalIndex]);
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsSpan.textContent = reviewQuestions.length;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});

// Initialize on page load
initQuiz();
