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
    totalQuestionsSpan.textContent = questions.length;
}

// Start quiz
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
});

// Back to lessons
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});

backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-term1.html';
});

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
    
    // Hide feedback and next button
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
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
    nextBtn.style.display = 'block';
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
    
    // Result message based on score
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfect! You know all the short vowels!';
    } else if (percentage >= 80) {
        resultMessage.textContent = '⭐ Excellent! You read very well!';
    } else if (percentage >= 60) {
        resultMessage.textContent = '👍 Good job! Keep practicing the vowels!';
    } else {
        resultMessage.textContent = '📖 Keep learning! Review the harakat.';
    }
    
    // Show review button only if there are wrong answers and not in review mode
    if (!isReviewMode && wrongAnswers.length > 0) {
        reviewMistakesBtn.style.display = 'inline-block';
    } else {
        reviewMistakesBtn.style.display = 'none';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    wrongAnswers = [];
    isReviewMode = false;
    reviewQuestions = [];
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function reviewMistakes() {
    isReviewMode = true;
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', reviewMistakes);

// Initialize
initQuiz();
