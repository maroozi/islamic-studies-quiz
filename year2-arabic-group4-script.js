// Year 2 Arabic Letters Group 4 - ك ل م ن هـ و ي with Short Vowels
const questions = [
    {
        question: "How do we read كَ ?",
        answers: ["Ka", "Ki", "Ku", "Ko"],
        correctIndex: 0,
        explanation: "Fatḥah gives the short 'a' sound."
    },
    {
        question: "How do we read كِ ?",
        answers: ["Ki", "Ka", "Ku", "Kee"],
        correctIndex: 0,
        explanation: "Kasrah makes the short 'i' sound."
    },
    {
        question: "How do we read كُ ?",
        answers: ["Ku", "Ka", "Ki", "Koo"],
        correctIndex: 0,
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
        answers: ["Li", "La", "Lu", "Lee"],
        correctIndex: 0,
        explanation: "Kasrah makes the 'i' sound."
    },
    {
        question: "How do we read لُ ?",
        answers: ["Lu", "La", "Li", "Loo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we read مَ ?",
        answers: ["Ma", "Mi", "Mu", "Mo"],
        correctIndex: 0,
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
        answers: ["Mu", "Ma", "Mi", "Moo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we read نَ ?",
        answers: ["Na", "Ni", "Nu", "No"],
        correctIndex: 0,
        explanation: "Fatḥah makes the short 'a': Na."
    },
    {
        question: "How do we read نِ ?",
        answers: ["Ni", "Na", "Nu", "Nee"],
        correctIndex: 0,
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
        answers: ["Ha (soft)", "Ha (heavy)", "Ka", "Na"],
        correctIndex: 0,
        explanation: "هـ is a soft 'h' sound."
    },
    {
        question: "How do we read هِ ?",
        answers: ["Hi (soft)", "Ha", "Hu", "Hee"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i'."
    },
    {
        question: "How do we read هُ ?",
        answers: ["Hu (soft)", "Ha", "Hi", "Hoo"],
        correctIndex: 0,
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
        answers: ["Wi", "Wa", "Wu", "Wee"],
        correctIndex: 0,
        explanation: "Kasrah gives the 'i' sound, even though و is a round letter."
    },
    {
        question: "How do we read وُ ?",
        answers: ["Wu", "Wa", "Wi", "Woo"],
        correctIndex: 0,
        explanation: "Dhammah matches و's natural round shape."
    },
    {
        question: "How do we read يَ ?",
        answers: ["Ya", "Yi", "Yu", "Yo"],
        correctIndex: 0,
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
        answers: ["Yu", "Ya", "Yi", "Yoo"],
        correctIndex: 0,
        explanation: "Dhammah gives the 'u' sound."
    },
    {
        question: "Which letter sounds like the English 'm'?",
        answers: ["م", "ن", "ك", "ه"],
        correctIndex: 0,
        explanation: "م makes the 'm' sound."
    },
    {
        question: "Which letter makes the soft 'h' sound?",
        answers: ["ه", "ح", "غ", "ك"],
        correctIndex: 0,
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
        answers: ["ي", "و", "م", "ك"],
        correctIndex: 0,
        explanation: "ي makes the 'y' sound."
    }
];

// DOM Elements
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const retryButton = document.getElementById('retryButton');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
const lessonsButton = document.getElementById('lessonsButton');

const startContent = document.getElementById('startContent');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');

const questionElement = document.getElementById('question');
const answersGrid = document.getElementById('answersGrid');
const feedback = document.getElementById('feedback');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressBar = document.getElementById('progressBar');
const stars = document.getElementById('stars');
const score = document.getElementById('score');
const correctAnswersSpan = document.getElementById('correctAnswers');
const wrongAnswersSpan = document.getElementById('wrongAnswers');
const percentageSpan = document.getElementById('percentage');

// Game State
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let shuffledQuestions = [];
let isReviewMode = false;
let reviewQuestions = [];

// Fisher-Yates Shuffle
function shuffleArray(array) {
    const shuffled = array.map((item, index) => ({
        ...item,
        originalIndex: index
    }));
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// Kahoot color scheme
const kahootColors = ['red', 'blue', 'yellow', 'green'];
const shapeSymbols = {
    red: '🔺',
    blue: '💠',
    yellow: '⭐',
    green: '🔷'
};

// Initialize Quiz
function initQuiz() {
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    reviewMistakesBtn.style.display = 'none';
    showQuestion();
}

// Show Question
function showQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const currentQuestion = questionsArray[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    answersGrid.innerHTML = '';
    feedback.style.display = 'none';
    nextButton.style.display = 'none';
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = `answer-btn ${kahootColors[index]}`;
        
        const content = document.createElement('div');
        content.className = 'answer-btn-content';
        
        const shape = document.createElement('div');
        shape.className = 'answer-shape';
        shape.textContent = shapeSymbols[kahootColors[index]];
        
        const text = document.createElement('div');
        text.className = 'answer-text';
        text.textContent = answer;
        
        content.appendChild(shape);
        content.appendChild(text);
        button.appendChild(content);
        
        button.addEventListener('click', () => selectAnswer(index));
        answersGrid.appendChild(button);
    });
    
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = questionsArray.length;
    updateProgressBar();
}

// Select Answer
function selectAnswer(selectedIndex) {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const currentQuestion = questionsArray[currentQuestionIndex];
    const buttons = answersGrid.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    
    buttons.forEach(button => button.disabled = true);
    
    if (isCorrect) {
        buttons[selectedIndex].classList.add('correct');
        feedback.textContent = `✓ Correct! ${currentQuestion.explanation}`;
        feedback.className = 'feedback-message correct';
        correctAnswers++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[currentQuestion.correctIndex].classList.add('correct');
        feedback.textContent = `✗ Not quite. ${currentQuestion.explanation}`;
        feedback.className = 'feedback-message wrong';
        
        if (!isReviewMode) {
            wrongAnswers.push(currentQuestion.originalIndex);
        }
    }
    
    feedback.style.display = 'block';
    nextButton.style.display = 'inline-block';
}

// Next Question
function nextQuestion() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsArray.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Update Progress Bar
function updateProgressBar() {
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const progress = ((currentQuestionIndex + 1) / questionsArray.length) * 100;
    progressBar.style.width = progress + '%';
}

// Show Results
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    
    const questionsArray = isReviewMode ? reviewQuestions : shuffledQuestions;
    const totalQuestions = questionsArray.length;
    const wrongCount = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    score.textContent = `${correctAnswers}/${totalQuestions}`;
    correctAnswersSpan.textContent = correctAnswers;
    wrongAnswersSpan.textContent = wrongCount;
    percentageSpan.textContent = percentage;
    
    let starCount = 0;
    if (percentage === 100) starCount = 3;
    else if (percentage >= 70) starCount = 2;
    else if (percentage >= 50) starCount = 1;
    
    stars.textContent = '⭐'.repeat(starCount);
    
    if (!isReviewMode && wrongAnswers.length > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Start Review Mode
function startReviewMode() {
    isReviewMode = true;
    reviewQuestions = wrongAnswers.map(index => ({
        ...questions[index],
        originalIndex: index
    }));
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    
    totalQuestionsSpan.textContent = reviewQuestions.length;
    
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

// Event Listeners
startButton.addEventListener('click', () => {
    startContent.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

backButton.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});

nextButton.addEventListener('click', nextQuestion);

retryButton.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

reviewMistakesBtn.addEventListener('click', startReviewMode);

lessonsButton.addEventListener('click', () => {
    window.location.href = 'year2-arabic.html';
});
