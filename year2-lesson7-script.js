// Year 2: Prophet Ibrāhīm (AS) - Khalīl Allāh - Kahoot-Style Quiz
// Lesson 7 - Term 1

const questions = [
    {
        question: "Who was Prophet Ibrāhīm (AS)? 🕌",
        answers: ["A king", "A special prophet of Allāh ﷻ", "A warrior", "A teacher"],
        correctIndex: 1,
        explanation: "Prophet Ibrāhīm (AS) was a very special prophet of Allāh. He was called 'Khalīl Allāh' – the Friend of Allāh! 🌟"
    },
    {
        question: "What did Prophet Ibrāhīm (AS) never worship, even as a child? 🚫",
        answers: ["The moon", "The sun", "Idols", "Animals"],
        correctIndex: 2,
        explanation: "Even as a child, Ibrāhīm (AS) never worshipped idols. He only believed in the One True God – Allāh! ✨"
    },
    {
        question: "Why did Ibrāhīm (AS) break the idols? 🪓",
        answers: ["He wanted to sell them", "He wanted to show people they could not speak or help", "He was angry", "He needed wood"],
        correctIndex: 1,
        explanation: "Ibrāhīm (AS) broke the idols to show people they were just stone statues that couldn't speak or help anyone! 💡"
    },
    {
        question: "What did Ibrāhīm (AS) hang around the biggest idol? 🪓",
        answers: ["A rope", "A cloth", "An axe", "A lantern"],
        correctIndex: 2,
        explanation: "He hung an axe around the biggest idol to make it look like that idol broke all the others! Very clever! 🤔"
    },
    {
        question: "What miracle did Allāh do when the people threw Ibrāhīm (AS) into the fire? 🔥",
        answers: ["Made him invisible", "Made the fire cool and safe", "Sent rain", "Sent angels to lift him"],
        correctIndex: 1,
        explanation: "Allāh commanded the fire: 'Be cool and safe for Ibrāhīm!' What an amazing miracle! SubhanAllah! 🌟"
    },
    {
        question: "Who protected Ibrāhīm (AS) from the fire? 🛡️",
        answers: ["The king", "The people", "Allāh ﷻ", "His friends"],
        correctIndex: 2,
        explanation: "Only Allāh ﷻ can protect us from everything! He saved Ibrāhīm (AS) with His amazing power! 💚"
    },
    {
        question: "What was the name of Ibrāhīm's (AS) wife who lived in Palestine? 👩",
        answers: ["Maryam", "Hājar", "Sarah", "Fātimah"],
        correctIndex: 2,
        explanation: "Sarah was one of Ibrāhīm's (AS) wives who lived in Palestine. She was a very righteous woman! 🌟"
    },
    {
        question: "Who was Ibrāhīm's (AS) first son? 👶",
        answers: ["Ya'qūb", "Yūsuf", "Ismā'īl", "Mūsā"],
        correctIndex: 2,
        explanation: "Ismā'īl (AS) was Ibrāhīm's (AS) first son. His mother was Hājar (RA). They lived in Makkah! 💚"
    },
    {
        question: "Which miracle happened when Hājar (RA) ran between Ṣafā and Marwah? 💧",
        answers: ["Rain fell", "A river appeared", "Zamzam water gushed from the ground", "Birds brought water"],
        correctIndex: 2,
        explanation: "When baby Ismā'īl (AS) kicked the ground, Zamzam water miraculously appeared! Allāhu Akbar! 💧✨"
    },
    {
        question: "How many times did Hājar (RA) run between the hills? 🏃‍♀️",
        answers: ["2", "5", "7", "10"],
        correctIndex: 2,
        explanation: "Hājar (RA) ran 7 times between Ṣafā and Marwah looking for water. We still do this during Hajj and 'Umrah! 🕋"
    },
    {
        question: "In a dream, what did Allāh command Ibrāhīm (AS) to do? 😴",
        answers: ["Move to Egypt", "Build a house", "Sacrifice his son", "Teach his people"],
        correctIndex: 2,
        explanation: "Allāh tested Ibrāhīm (AS) by commanding him to sacrifice his beloved son Ismā'īl (AS). What a big test! 🙏"
    },
    {
        question: "What replaced Ismā'īl (AS) during the sacrifice? 🐏",
        answers: ["A deer", "A ram", "A camel", "A bird"],
        correctIndex: 1,
        explanation: "Because Ibrāhīm (AS) passed the test, Allāh sent a ram to be sacrificed instead! We remember this during Eid al-Adha! 🎉"
    },
    {
        question: "What important building did Ibrāhīm (AS) and Ismā'īl (AS) build in Makkah? 🕋",
        answers: ["A palace", "The Masjid al-Aqsa", "The Ka'bah", "A school"],
        correctIndex: 2,
        explanation: "Ibrāhīm (AS) and Ismā'īl (AS) built the Ka'bah – the house of Allāh! Muslims face it when we pray! 🕋💚"
    },
    {
        question: "What is the rock with Prophet Ibrāhīm's (AS) footprints called? 👣",
        answers: ["Safā", "Marwah", "Maqām Ibrāhīm", "Zamzam Stone"],
        correctIndex: 2,
        explanation: "Maqām Ibrāhīm is the special stone with his footprints. You can still see it near the Ka'bah today! SubhanAllah! ✨"
    },
    {
        question: "What did Allāh command Ibrāhīm (AS) to do after building the Ka'bah? 📢",
        answers: ["Call people to perform Hajj", "Plant trees", "Move to Syria", "Build a well"],
        correctIndex: 0,
        explanation: "Allāh told Ibrāhīm (AS) to call all people to come for Hajj. Millions of Muslims still go every year! Allāhu Akbar! 🕋🌍"
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
        if (!isReviewMode) {
            wrongAnswers.push(question);
        }
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
        message = '🕋 PERFECT! Allāhumma Bārik! You know the story of Prophet Ibrāhīm (AS) perfectly!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent work! You really know about Khalīl Allāh! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep learning about our amazing prophets!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Practice the story of Prophet Ibrāhīm (AS) more!';
    } else {
        message = '🌈 Keep trying! Read about Prophet Ibrāhīm (AS) and try again!';
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
    window.location.href = 'year2-islamic-studies.html';
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = 'year2-islamic-studies.html';
});

// Initialize on page load
initQuiz();
