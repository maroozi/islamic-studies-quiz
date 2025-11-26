// Year 2: Arabic Writing - Group 2
// Practice writing Arabic letters in different forms

// Writing data for Group 2
const arabicWritingGroup2Data = [
  { id: "dal-isolated", englishPrompt: "Write the letter dāl in isolated form", expectedAnswer: "د" },
  { id: "thal-isolated", englishPrompt: "Write the letter dhāl in isolated form", expectedAnswer: "ذ" },
  { id: "raa-isolated", englishPrompt: "Write the letter rā' in isolated form", expectedAnswer: "ر" },
  { id: "zay-isolated", englishPrompt: "Write the letter zāy in isolated form", expectedAnswer: "ز" },
  { id: "seen-isolated", englishPrompt: "Write the letter sīn in isolated form", expectedAnswer: "س" },
  { id: "seen-beginning", englishPrompt: "Write the letter sīn at the beginning of a word", expectedAnswer: "سـ" },
  { id: "seen-middle", englishPrompt: "Write the letter sīn in the middle of a word", expectedAnswer: "ـسـ" },
  { id: "seen-end", englishPrompt: "Write the letter sīn at the end of a word", expectedAnswer: "ـس" },
  { id: "sheen-isolated", englishPrompt: "Write the letter shīn in isolated form", expectedAnswer: "ش" },
  { id: "sheen-beginning", englishPrompt: "Write the letter shīn at the beginning of a word", expectedAnswer: "شـ" },
  { id: "sheen-middle", englishPrompt: "Write the letter shīn in the middle of a word", expectedAnswer: "ـشـ" },
  { id: "sheen-end", englishPrompt: "Write the letter shīn at the end of a word", expectedAnswer: "ـش" },
  { id: "sad-isolated", englishPrompt: "Write the letter ṣād in isolated form", expectedAnswer: "ص" },
  { id: "sad-beginning", englishPrompt: "Write the letter ṣād at the beginning of a word", expectedAnswer: "صـ" },
  { id: "sad-middle", englishPrompt: "Write the letter ṣād in the middle of a word", expectedAnswer: "ـصـ" },
  { id: "sad-end", englishPrompt: "Write the letter ṣād at the end of a word", expectedAnswer: "ـص" }
];

// Common wrong answers for letter forms
const commonWrongForms = {
    isolated: ['ـ', 'ــ', 'ـــ'],
    beginning: ['د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص'],
    middle: ['سـ', 'شـ', 'صـ'],
    end: ['ـسـ', 'ـشـ', 'ـصـ']
};

// Convert writing data to quiz questions
const questions = arabicWritingGroup2Data.map((item, index) => {
    const form = item.id.includes('beginning') ? 'beginning' :
                 item.id.includes('middle') ? 'middle' :
                 item.id.includes('end') ? 'end' : 'isolated';
    
    // Get wrong answers that don't match the correct answer
    let wrongAnswers = commonWrongForms[form].filter(w => w !== item.expectedAnswer);
    
    // Add some variations
    const allLetterForms = ['د', 'ذ', 'ر', 'ز', 
                            'س', 'سـ', 'ـسـ', 'ـس',
                            'ش', 'شـ', 'ـشـ', 'ـش',
                            'ص', 'صـ', 'ـصـ', 'ـص'];
    wrongAnswers = wrongAnswers.concat(
        allLetterForms.filter(l => l !== item.expectedAnswer)
    );
    
    // Shuffle and pick 3 wrong answers
    wrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
    
    // Create answers array with correct answer at varied positions
    const answers = [...wrongAnswers];
    const correctIndex = index % 4; // Vary position: 0,1,2,3,0,1,2,3...
    answers.splice(correctIndex, 0, item.expectedAnswer);
    
    return {
        question: item.englishPrompt,
        answers: answers,
        correctIndex: correctIndex,
        explanation: `The correct form is: ${item.expectedAnswer}`
    };
});

// Game state variables
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

// Get results message based on percentage
function getResultsMessage(percentage) {
    if (percentage === 100) {
        return "🌟 Perfect Score! Amazing work! 🌟";
    } else if (percentage >= 80) {
        return "🎉 Excellent! You're doing great!";
    } else if (percentage >= 60) {
        return "👏 Good job! Keep practicing!";
    } else if (percentage >= 40) {
        return "💪 Nice try! Keep learning!";
    } else {
        return "📚 Keep studying! You'll get better!";
    }
}

// Kahoot color scheme
const kahootColors = ['red', 'blue', 'yellow', 'green'];
const shapeSymbols = {
    red: '🔺',
    blue: '💠',
    yellow: '⭐',
    green: '🔷'
};

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

function showQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : questions;
    const question = questionsArray[currentQuestionIndex];
    
    questionText.textContent = question.question;
    
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    answersGrid.innerHTML = '';
    
    const answersWithIndex = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
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
    
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
}

function selectAnswer(selectedButton, selectedIndex, question) {
    const isCorrect = selectedIndex === question.correctIndex;
    const correctAnswerText = question.answers[question.correctIndex];
    
    const allButtons = answersGrid.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        const btnText = btn.querySelector('.answer-text').textContent;
        if (btnText === correctAnswerText) {
            btn.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        stars += 10;
        starsSpan.textContent = `⭐ ${stars}`;
        feedbackEmoji.textContent = '🎉';
        feedbackText.textContent = 'Correct! MashaAllah!';
        feedbackText.className = 'feedback-text correct';
    } else {
        selectedButton.classList.add('wrong');
        if (!isReviewMode) {
            wrongAnswers.push(question);
        }
        feedbackEmoji.textContent = '😅';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.className = 'feedback-text wrong';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.style.display = 'block';
    nextBtn.style.display = 'inline-block';
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
    resultMessage.textContent = getResultsMessage(percentage);
    
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
