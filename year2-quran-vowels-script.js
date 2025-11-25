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
        answers: ["Ḍammah", "Kasrah", "Fatḥah", "Shaddah"],
        correctIndex: 1,
        explanation: "Kasrah is the small line below the letter."
    },
    {
        question: "Which vowel is on بُ ?",
        answers: ["Kasrah", "Sukoon", "Ḍammah", "Fatḥah"],
        correctIndex: 2,
        explanation: "Ḍammah is the small curl above the letter."
    },
    {
        question: "How do we pronounce جَ ?",
        answers: ["Joo", "Ju", "Ji", "Ja"],
        correctIndex: 3,
        explanation: "Fatḥah makes the short 'a' sound."
    },
    {
        question: "How do we pronounce جِ ?",
        answers: ["Ji", "Jee", "Ju", "Ja"],
        correctIndex: 0,
        explanation: "Kasrah gives the short 'i' sound."
    },
    {
        question: "How do we pronounce جُ ?",
        answers: ["Joo", "Ju", "Ji", "Ja"],
        correctIndex: 1,
        explanation: "Ḍammah gives the round 'u' sound."
    },
    {
        question: "What sound does فَ make?",
        answers: ["Fi", "Faa", "Fa", "Fu"],
        correctIndex: 2,
        explanation: "A line above makes the sound 'a'."
    },
    {
        question: "What sound does فِ make?",
        answers: ["Fa", "Fee", "Fu", "Fi"],
        correctIndex: 3,
        explanation: "A line below makes the sound 'i'."
    },
    {
        question: "What sound does فُ make?",
        answers: ["Fu", "Fa", "Foo", "Fi"],
        correctIndex: 0,
        explanation: "Ḍammah gives the 'u' sound."
    },
    {
        question: "Which of these has a Kasrah?",
        answers: ["سَ", "سِ", "سُ", "سْ"],
        correctIndex: 1,
        explanation: "Kasrah always goes below the letter."
    },
    {
        question: "Which of these has a Dhammah?",
        answers: ["قَ", "قْ", "قُ", "قِ"],
        correctIndex: 2,
        explanation: "Ḍammah is a small curl on top."
    },
    {
        question: "Which of these has a Fatḥah?",
        answers: ["نْ", "نُ", "نِ", "نَ"],
        correctIndex: 3,
        explanation: "Fatḥah is the line above the letter."
    },
    {
        question: "Which sound matches هُ ?",
        answers: ["Hu", "Haa", "Hi", "Ha"],
        correctIndex: 0,
        explanation: "Ḍammah makes the rounded 'u'."
    },
    {
        question: "Which sound matches هِ ?",
        answers: ["Hu", "Hi", "Ha", "Hee"],
        correctIndex: 1,
        explanation: "Kasrah makes the 'i' sound."
    },
    {
        question: "Which sound matches هَ ?",
        answers: ["Hi", "Hu", "Ha", "Ho"],
        correctIndex: 2,
        explanation: "Fatḥah makes the 'a' sound."
    },
    {
        question: "Which vowel makes the 'u' sound?",
        answers: ["Fatḥah (َ)", "Kasrah (ِ)", "No vowel", "Ḍammah (ُ)"],
        correctIndex: 3,
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
        answers: ["Kasrah (ِ)", "Fatḥah (َ)", "Ḍammah (ُ)", "Sukoon"],
        correctIndex: 1,
        explanation: "Fatḥah gives the short 'a' sound."
    },
    {
        question: "Which letter has Dhammah? (Choose correctly)",
        answers: ["طَ", "طِ", "طُ", "طْ"],
        correctIndex: 2,
        explanation: "The curl above means Ḍammah."
    },
    {
        question: "Which letter has Kasrah? (Choose correctly)",
        answers: ["يَ", "يُ", "يْ", "يِ"],
        correctIndex: 3,
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
        answers: ["سَ", "سُ", "سِ", "شُ"],
        correctIndex: 1,
        explanation: "The dhammah makes the 'u' sound."
    },
    {
        question: "Which one sounds like 'ri'?",
        answers: ["رَ", "زِ", "رِ", "رُ"],
        correctIndex: 2,
        explanation: "Kasrah makes the letter sound like 'ri'."
    },
    {
        question: "Which one sounds like 'tha'?",
        answers: ["ثِ", "سَ", "ثُ", "ثَ"],
        correctIndex: 3,
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
        answers: ["Shi", "Sha", "Shu", "Sho"],
        correctIndex: 1,
        explanation: "Fatḥah gives 'a'."
    },
    {
        question: "How do we pronounce شِ ?",
        answers: ["Sha", "Shu", "Shi", "Shee"],
        correctIndex: 2,
        explanation: "Kasrah gives 'i'."
    }
];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
const backToLessonsBtn = document.getElementById('backToLessonsBtn');

const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const feedbackText = document.getElementById('feedbackText');
const explanation = document.getElementById('explanation');

const questionCounter = document.getElementById('question-counter');
const starsDisplay = document.getElementById('star-display');

const totalStars = document.getElementById('totalStars');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const resultMessage = document.getElementById('resultMessage');

// Game State
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let userAnswers = [];
let reviewMode = false;
let reviewQuestions = [];

// Start Quiz
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Back to Lessons
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});

backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});

// Load Question
function loadQuestion() {
    const questionData = reviewMode 
        ? questions[reviewQuestions[currentQuestionIndex]] 
        : questions[currentQuestionIndex];
    
    questionText.textContent = questionData.question;
    answersGrid.innerHTML = '';
    
    // Update question counter
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    
    // Update star display
    starsDisplay.innerHTML = '★'.repeat(correctAnswers) + '☆'.repeat(totalQuestions - correctAnswers - wrongAnswers);
    
    // Create answer buttons
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-bubble');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersGrid.appendChild(button);
    });
    
    // Hide feedback and next button
    feedbackEmoji.style.display = 'none';
    feedbackText.style.display = 'none';
    explanation.style.display = 'none';
    nextBtn.style.display = 'none';
}

// Check Answer
function checkAnswer(selectedIndex) {
    const questionData = reviewMode 
        ? questions[reviewQuestions[currentQuestionIndex]] 
        : questions[currentQuestionIndex];
    
    const buttons = answersGrid.querySelectorAll('.answer-bubble');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (selectedIndex === questionData.correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        feedbackEmoji.textContent = '✓';
        feedbackEmoji.className = 'feedback-emoji correct';
        feedbackText.textContent = 'Correct!';
        feedbackText.className = 'feedback-text correct';
        correctAnswers++;
        
        if (!reviewMode) {
            userAnswers.push({ questionIndex: currentQuestionIndex, correct: true });
        }
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[questionData.correctIndex].classList.add('correct');
        feedbackEmoji.textContent = '✗';
        feedbackEmoji.className = 'feedback-emoji wrong';
        feedbackText.textContent = 'Incorrect';
        feedbackText.className = 'feedback-text wrong';
        wrongAnswers++;
        
        if (!reviewMode) {
            userAnswers.push({ questionIndex: currentQuestionIndex, correct: false });
        }
    }
    
    // Show feedback
    feedbackEmoji.style.display = 'block';
    feedbackText.style.display = 'block';
    explanation.textContent = questionData.explanation;
    explanation.style.display = 'block';
    nextBtn.style.display = 'block';
}

// Next Question
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const totalQuestions = reviewMode ? reviewQuestions.length : questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    totalStars.textContent = '★'.repeat(correctAnswers);
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = wrongAnswers;
    
    // Result messages
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfect! You know all the short vowels!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '⭐ Excellent work!';
    } else if (percentage >= 60) {
        resultMessage.textContent = 'Good job! Keep practicing.';
    } else {
        resultMessage.textContent = 'Keep trying! Practice makes perfect.';
    }
    
    // Show/hide review button
    if (!reviewMode && wrongAnswers > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

// Retry Quiz
retryBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    userAnswers = [];
    reviewMode = false;
    reviewQuestions = [];
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// Review Mistakes
reviewMistakesBtn.addEventListener('click', () => {
    reviewMode = true;
    reviewQuestions = userAnswers
        .filter(answer => !answer.correct)
        .map(answer => answer.questionIndex);
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});
