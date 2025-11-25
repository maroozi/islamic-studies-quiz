// Year 2 Qur'an - Short Vowels Recognition
const questions = [
    {
        question: "Which vowel is on بَ ?",
        answers: ["Fatḥah", "Kasrah", "Ḍammah", "No vowel"],
        correctIndex: 0,
        explanation: "Fatḥah is the small line above the letter."
    },
    {
        question: "Which vowel is on بِ ?",
        answers: ["Kasrah", "Fatḥah", "Ḍammah", "Shaddah"],
        correctIndex: 0,
        explanation: "Kasrah is the small line below the letter."
    },
    {
        question: "Which vowel is on بُ ?",
        answers: ["Ḍammah", "Fatḥah", "Kasrah", "Sukoon"],
        correctIndex: 0,
        explanation: "Ḍammah is the small curl above the letter."
    },
    {
        question: "How do we pronounce جَ ?",
        answers: ["Ja", "Ji", "Ju", "Joo"],
        correctIndex: 0,
        explanation: "Fatḥah makes the short 'a' sound."
    },
    {
        question: "How do we pronounce جِ ?",
        answers: ["Ji", "Ja", "Ju", "Jee"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i' sound."
    },
    {
        question: "How do we pronounce جُ ?",
        answers: ["Ju", "Ji", "Ja", "Joo"],
        correctIndex: 0,
        explanation: "Ḍammah gives the round 'u' sound."
    },
    {
        question: "What sound does فَ make?",
        answers: ["Fa", "Fi", "Fu", "Faa"],
        correctIndex: 0,
        explanation: "A line above makes the sound 'a'."
    },
    {
        question: "What sound does فِ make?",
        answers: ["Fi", "Fa", "Fu", "Fee"],
        correctIndex: 0,
        explanation: "A line below makes the sound 'i'."
    },
    {
        question: "What sound does فُ make?",
        answers: ["Fu", "Fa", "Fi", "Foo"],
        correctIndex: 0,
        explanation: "Ḍammah gives the 'u' sound."
    },
    {
        question: "Which of these has a Kasrah?",
        answers: ["سِ", "سَ", "سُ", "سْ"],
        correctIndex: 0,
        explanation: "Kasrah always goes below the letter."
    },
    {
        question: "Which of these has a Dhammah?",
        answers: ["قُ", "قَ", "قِ", "قْ"],
        correctIndex: 0,
        explanation: "Ḍammah is a small curl on top."
    },
    {
        question: "Which of these has a Fatḥah?",
        answers: ["نَ", "نِ", "نُ", "نْ"],
        correctIndex: 0,
        explanation: "Fatḥah is the line above the letter."
    },
    {
        question: "Which sound matches هُ ?",
        answers: ["Hu", "Ha", "Hi", "Haa"],
        correctIndex: 0,
        explanation: "Ḍammah makes the rounded 'u'."
    },
    {
        question: "Which sound matches هِ ?",
        answers: ["Hi", "Ha", "Hu", "Hee"],
        correctIndex: 0,
        explanation: "Kasrah makes the 'i' sound."
    },
    {
        question: "Which sound matches هَ ?",
        answers: ["Ha", "Hi", "Hu", "Ho"],
        correctIndex: 0,
        explanation: "Fatḥah makes the 'a' sound."
    },
    {
        question: "Which vowel makes the 'u' sound?",
        answers: ["Ḍammah (ُ)", "Fatḥah (َ)", "Kasrah (ِ)", "No vowel"],
        correctIndex: 0,
        explanation: "Ḍammah creates the 'u' sound like fu, ru, zu."
    },
    {
        question: "Which vowel makes the 'i' sound?",
        answers: ["Kasrah (ِ)", "Fatḥah (َ)", "Ḍammah (ُ)", "Shaddah"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i' sound."
    },
    {
        question: "Which vowel makes the 'a' sound?",
        answers: ["Fatḥah (َ)", "Kasrah (ِ)", "Ḍammah (ُ)", "Sukoon"],
        correctIndex: 0,
        explanation: "Fatḥah gives the short 'a' sound."
    },
    {
        question: "Which letter has Dhammah? (Choose correctly)",
        answers: ["طُ", "طَ", "طِ", "طْ"],
        correctIndex: 0,
        explanation: "The curl above means Ḍammah."
    },
    {
        question: "Which letter has Kasrah? (Choose correctly)",
        answers: ["يِ", "يَ", "يُ", "يْ"],
        correctIndex: 0,
        explanation: "Kasrah is under the letter."
    },
    {
        question: "Which letter has Fathah? (Choose correctly)",
        answers: ["غَ", "غُ", "غِ", "غْ"],
        correctIndex: 0,
        explanation: "Fathah is the small line above the letter."
    },
    {
        question: "Which one sounds like 'su'?",
        answers: ["سُ", "سَ", "سِ", "شُ"],
        correctIndex: 0,
        explanation: "The dhammah makes the 'u' sound."
    },
    {
        question: "Which one sounds like 'ri'?",
        answers: ["رِ", "رَ", "رُ", "زِ"],
        correctIndex: 0,
        explanation: "Kasrah makes the letter sound like 'ri'."
    },
    {
        question: "Which one sounds like 'tha'?",
        answers: ["ثَ", "ثِ", "ثُ", "سَ"],
        correctIndex: 0,
        explanation: "Fatḥah gives the 'a' sound to letter ث."
    },
    {
        question: "How do we pronounce شُ ?",
        answers: ["Shu", "Sha", "Shi", "Shoo"],
        correctIndex: 0,
        explanation: "Dhammah gives 'u'."
    },
    {
        question: "How do we pronounce شَ ?",
        answers: ["Sha", "Shi", "Shu", "Sho"],
        correctIndex: 0,
        explanation: "Fatḥah gives 'a'."
    },
    {
        question: "How do we pronounce شِ ?",
        answers: ["Shi", "Sha", "Shu", "Shee"],
        correctIndex: 0,
        explanation: "Kasrah gives 'i'."
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
    window.location.href = 'year2-term1.html';
});

nextButton.addEventListener('click', nextQuestion);

retryButton.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    initQuiz();
});

reviewMistakesBtn.addEventListener('click', startReviewMode);

lessonsButton.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});
