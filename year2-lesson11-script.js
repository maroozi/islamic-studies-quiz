// Year 2: Abū Bakr (RA) - As-Siddīq - Kahoot-Style Quiz
// Lesson 11 - Term 1

const questions = [
    {
        question: "What was Abū Bakr's (RA) real name? 👤",
        answers: ["'Abdullāh Ibn Abī Quḥāfah", "Muhammad Ibn 'Abdullah", "'Umar Ibn al-Khattāb", "'Uthmān Ibn 'Affān"],
        correctIndex: 0,
        explanation: "His real name was 'Abdullāh Ibn Abī Quḥāfah! But everyone called him Abū Bakr! 💚"
    },
    {
        question: "Who was Abū Bakr's (RA) best friend? 💖",
        answers: ["Prophet Muhammad ﷺ", "Bilāl (RA)", "'Umar (RA)", "'Alī (RA)"],
        correctIndex: 0,
        explanation: "Prophet Muhammad ﷺ was Abū Bakr's (RA) best friend! They loved each other so much! 💚✨"
    },
    {
        question: "What special title did Prophet Muhammad ﷺ give to Abū Bakr (RA)? ✨",
        answers: ["Al-Fārūq", "As-Siddīq", "Dhū an-Nūrayn", "Al-Amīn"],
        correctIndex: 1,
        explanation: "The Prophet ﷺ called him 'As-Siddīq' which means 'The Truthful One'! He always told the truth! 💚⭐"
    },
    {
        question: "What does 'As-Siddīq' mean? 📖",
        answers: ["The Brave", "The Truthful One", "The Generous", "The Wise"],
        correctIndex: 1,
        explanation: "'As-Siddīq' means 'The Truthful One'! Abū Bakr (RA) always believed the truth! ✨"
    },
    {
        question: "How was Abū Bakr (RA) with people? 💖",
        answers: ["He was kind and generous to everyone", "He was mean", "He was selfish", "He was angry"],
        correctIndex: 0,
        explanation: "Abū Bakr (RA) was very kind, gentle, and generous! He loved helping everyone! 💚"
    },
    {
        question: "What did Abū Bakr (RA) do with his money? 💰",
        answers: ["He spent it all on toys", "He used it to help people and free slaves", "He hid it", "He threw it away"],
        correctIndex: 1,
        explanation: "Abū Bakr (RA) used his money to help people and buy slaves so he could FREE them! How generous! 💚✨"
    },
    {
        question: "Why did Abū Bakr (RA) buy slaves? 🕊️",
        answers: ["To make them work", "To free them and make them happy", "To sell them", "To keep them"],
        correctIndex: 1,
        explanation: "Abū Bakr (RA) bought slaves so he could set them FREE! He wanted everyone to be free and happy! 🕊️💚"
    },
    {
        question: "Who was the FIRST man to accept Islām? ☝️",
        answers: ["'Umar (RA)", "Abū Bakr (RA)", "'Uthmān (RA)", "'Alī (RA)"],
        correctIndex: 1,
        explanation: "Abū Bakr (RA) was the first ADULT MAN to accept Islām! He believed immediately! ☝️✨"
    },
    {
        question: "What did Abū Bakr (RA) do when Prophet Muhammad ﷺ told him about Islām? 💚",
        answers: ["He said no", "He believed right away without any doubt", "He asked for proof", "He laughed"],
        correctIndex: 1,
        explanation: "Abū Bakr (RA) believed in Islām RIGHT AWAY! He didn't doubt at all! That's why he's called As-Siddīq! 💚⭐"
    },
    {
        question: "Who went with Prophet Muhammad ﷺ on the Hijrah to Madīnah? 🐪",
        answers: ["Bilāl (RA)", "'Umar (RA)", "Abū Bakr (RA)", "'Alī (RA)"],
        correctIndex: 2,
        explanation: "Abū Bakr (RA) was the special companion who went with Prophet Muhammad ﷺ on the Hijrah! 🐪💚"
    },
    {
        question: "Where did Prophet Muhammad ﷺ and Abū Bakr (RA) hide during Hijrah? 🏔️",
        answers: ["In a house", "In a cave called Thawr", "In the masjid", "In a tent"],
        correctIndex: 1,
        explanation: "They hid in the Cave of Thawr! Allāh protected them! A spider made a web over the cave! 🕷️✨"
    },
    {
        question: "Who was Abū Bakr's (RA) daughter? 👧",
        answers: ["Fāṭimah (RA)", "'Ā'ishah (RA)", "Zaynab (RA)", "Ruqayyah (RA)"],
        correctIndex: 1,
        explanation: "His daughter was 'Ā'ishah (RA)! She became the wife of Prophet Muhammad ﷺ and a great teacher! 💚"
    },
    {
        question: "What happened after Prophet Muhammad ﷺ passed away? 😢",
        answers: ["Abū Bakr became the first Khalifah", "Everyone went home", "There was no leader", "The masjid closed"],
        correctIndex: 0,
        explanation: "Abū Bakr (RA) became the FIRST Khalifah (leader) of all Muslims! He took care of everyone! 👑💚"
    },
    {
        question: "What does 'Khalifah' mean? 👑",
        answers: ["Teacher", "Leader", "Helper", "Friend"],
        correctIndex: 1,
        explanation: "'Khalifah' means 'Leader'! Abū Bakr (RA) was the first leader after Prophet Muhammad ﷺ! 👑✨"
    },
    {
        question: "Why should we learn about Abū Bakr (RA)? 📚",
        answers: ["Because he was truthful, kind, generous, and brave", "Just for fun", "Because we have to", "To pass a test"],
        correctIndex: 0,
        explanation: "We learn about Abū Bakr (RA) because he was truthful, kind, generous, and brave! He's our role model! 💚⭐"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let stars = 0;

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
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
    totalQuestionsSpan.textContent = questions.length;
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
    const question = questions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Clear previous answers
    answersGrid.innerHTML = '';
    
    // Map answers with original index and shuffle
    const answersWithIndices = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    const shuffledAnswers = shuffleArray(answersWithIndices);
    
    // Create answer buttons with Kahoot styling
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
        
        button.addEventListener('click', () => selectAnswer(answerObj.originalIndex, button));
        
        answersGrid.appendChild(button);
    });
    
    // Hide feedback
    feedbackContainer.classList.remove('show');
    nextBtn.disabled = true;
}

function selectAnswer(selectedIndex, selectedButton) {
    const question = questions[currentQuestionIndex];
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
        feedbackEmoji.textContent = '😢';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.style.color = '#eb3349';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.classList.add('show');
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    totalStarsSpan.textContent = stars;
    correctCountSpan.textContent = score;
    incorrectCountSpan.textContent = questions.length - score;
    
    const percentage = (score / questions.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = '⭐ PERFECT! Allāhumma Bārik! You know all about As-Siddīq Abū Bakr (RA)!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You learned so much about the truthful companion! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep learning about Abū Bakr As-Siddīq (RA)!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Abū Bakr (RA) was kind, truthful, and generous!';
    } else {
        message = '🌈 Keep trying! Learn more about the first Khalifah!';
    }
    
    resultMessage.textContent = message;
}

function resetQuiz() {
    initQuiz();
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = 'year2-islamic-studies.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-islamic-studies.html';
});

// Initialize on page load
initQuiz();
