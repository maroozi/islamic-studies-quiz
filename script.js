// Complete Question Bank - All 45 Questions
const questionBank = [
    // TOPIC: TAWHEED (Questions 1-6)
    {
        topic: "TAWHEED",
        question: "What is Tawheed?",
        answers: [
            { text: "Belief in the oneness of Allah", correct: true },
            { text: "Belief in many gods", correct: false },
            { text: "Worshipping saints", correct: false },
            { text: "Believing only in angels", correct: false }
        ],
        explanation: "Tawheed means Allah is One in His Lordship, worship, and attributes."
    },
    {
        topic: "TAWHEED",
        question: "Tawheed Ar-Rububiyyah is about:",
        answers: [
            { text: "Allah's Lordship", correct: true },
            { text: "Allah's names", correct: false },
            { text: "Worshipping only Allah", correct: false },
            { text: "Charity", correct: false }
        ],
        explanation: "Rububiyyah means Allah alone creates, controls, and manages everything."
    },
    {
        topic: "TAWHEED",
        question: "Tawheed Al-Uluhiyyah is about:",
        answers: [
            { text: "Worshipping only Allah", correct: true },
            { text: "Believing in angels", correct: false },
            { text: "Islamic manners", correct: false },
            { text: "Foods", correct: false }
        ],
        explanation: "Uluhiyyah means all acts of worship must be directed only to Allah."
    },
    {
        topic: "TAWHEED",
        question: "Tawheed Asma wa Sifat:",
        answers: [
            { text: "Allah's names and attributes", correct: true },
            { text: "Prophets", correct: false },
            { text: "Angels", correct: false },
            { text: "Ramadan", correct: false }
        ],
        explanation: "Allah has perfect names like Ar-Rahman, and unique attributes."
    },
    {
        topic: "TAWHEED",
        question: "Example of Rububiyyah:",
        answers: [
            { text: "Only Allah controls the weather", correct: true },
            { text: "Charity", correct: false },
            { text: "Smiling", correct: false },
            { text: "Eating halal", correct: false }
        ],
        explanation: "Only Allah has power over creation, life, death, and the universe."
    },
    {
        topic: "TAWHEED",
        question: "Example of Uluhiyyah:",
        answers: [
            { text: "Fasting in Ramadan", correct: true },
            { text: "Sleeping", correct: false },
            { text: "Drinking", correct: false },
            { text: "Walking", correct: false }
        ],
        explanation: "Worship acts such as fasting, salah, dua are only for Allah."
    },
    // TOPIC: SHIRK (Questions 7-17)
    {
        topic: "SHIRK",
        question: "What is Shirk?",
        answers: [
            { text: "Associating partners with Allah", correct: true },
            { text: "Reading Quran", correct: false },
            { text: "Wudu", correct: false },
            { text: "Smiling", correct: false }
        ],
        explanation: "Shirk is the opposite of Tawheed and the worst major sin."
    },
    {
        topic: "SHIRK",
        question: "Major Shirk example:",
        answers: [
            { text: "Praying to a saint", correct: true },
            { text: "Helping friends", correct: false },
            { text: "Eating", correct: false },
            { text: "Resting", correct: false }
        ],
        explanation: "Major Shirk is giving worship to someone besides Allah."
    },
    {
        topic: "SHIRK",
        question: "Minor Shirk example:",
        answers: [
            { text: "Showing off (Riya)", correct: true },
            { text: "Worshipping idols", correct: false },
            { text: "Rejecting Islam", correct: false },
            { text: "Sleeping", correct: false }
        ],
        explanation: "Minor Shirk happens when we do good deeds for people's praise."
    },
    {
        topic: "SHIRK",
        question: "Hidden Shirk example:",
        answers: [
            { text: "Being unhappy with Allah's plan", correct: true },
            { text: "Laughing", correct: false },
            { text: "Walking", correct: false },
            { text: "Eating", correct: false }
        ],
        explanation: "Hidden Shirk is displeasure with Allah's decree."
    },
    {
        topic: "SHIRK",
        question: "A boy trusts a lucky bracelet:",
        answers: [
            { text: "Major Shirk", correct: true },
            { text: "Minor", correct: false },
            { text: "Hidden", correct: false },
            { text: "Tawheed", correct: false }
        ],
        explanation: "Believing an object protects you is giving it Allah's power."
    },
    {
        topic: "SHIRK",
        question: "Someone prays to a saint at a grave:",
        answers: [
            { text: "Major Shirk", correct: true },
            { text: "Minor", correct: false },
            { text: "Hidden", correct: false },
            { text: "Tawheed", correct: false }
        ],
        explanation: "Worship and supplication must be ONLY to Allah."
    },
    {
        topic: "SHIRK",
        question: "A boy makes dua directly to Allah:",
        answers: [
            { text: "Tawheed", correct: true },
            { text: "Major Shirk", correct: false },
            { text: "Minor", correct: false },
            { text: "Hidden", correct: false }
        ],
        explanation: "Dua is an act of worship and must only be to Allah."
    },
    {
        topic: "SHIRK",
        question: "A girl does charity only to be praised:",
        answers: [
            { text: "Minor Shirk", correct: true },
            { text: "Major", correct: false },
            { text: "Hidden", correct: false },
            { text: "Tawheed", correct: false }
        ],
        explanation: "Riya is showing off to people instead of seeking Allah's reward."
    },
    {
        topic: "SHIRK",
        question: "A girl keeps an idol for \"blessings\":",
        answers: [
            { text: "Major Shirk", correct: true },
            { text: "Minor", correct: false },
            { text: "Hidden", correct: false },
            { text: "Tawheed", correct: false }
        ],
        explanation: "Seeking blessings from idols is worshipping other than Allah."
    },
    {
        topic: "SHIRK",
        question: "Someone says: \"If only I didn't move here...\"",
        answers: [
            { text: "Hidden Shirk", correct: true },
            { text: "Major", correct: false },
            { text: "Minor", correct: false },
            { text: "Tawheed", correct: false }
        ],
        explanation: "Complaining against destiny shows displeasure with Allah's decree."
    },
    {
        topic: "SHIRK",
        question: "Riya (showing off) is:",
        answers: [
            { text: "Minor Shirk", correct: true },
            { text: "Major", correct: false },
            { text: "Hidden", correct: false },
            { text: "None", correct: false }
        ],
        explanation: "It does not remove someone from Islam but ruins the intention."
    },
    // TOPIC: SHARIAH LAW (Questions 18-22)
    {
        topic: "SHARIAH LAW",
        question: "Fard means:",
        answers: [
            { text: "Compulsory", correct: true },
            { text: "Recommended", correct: false },
            { text: "Forbidden", correct: false },
            { text: "Permissible", correct: false }
        ],
        explanation: "Fard acts like the 5 daily prayers must always be done."
    },
    {
        topic: "SHARIAH LAW",
        question: "Which is Fard?",
        answers: [
            { text: "Praying 5 times", correct: true },
            { text: "Sleeping", correct: false },
            { text: "Talking", correct: false },
            { text: "Eating fruit", correct: false }
        ],
        explanation: "Salah is a compulsory pillar of Islam."
    },
    {
        topic: "SHARIAH LAW",
        question: "Mustahab means:",
        answers: [
            { text: "Recommended", correct: true },
            { text: "Forbidden", correct: false },
            { text: "Discouraged", correct: false },
            { text: "Compulsory", correct: false }
        ],
        explanation: "Recommended acts like fasting Mondays earn extra reward."
    },
    {
        topic: "SHARIAH LAW",
        question: "Makruh means:",
        answers: [
            { text: "Discouraged", correct: true },
            { text: "Forbidden", correct: false },
            { text: "Compulsory", correct: false },
            { text: "Permissible", correct: false }
        ],
        explanation: "Makruh actions should be avoided but are not sinful."
    },
    {
        topic: "SHARIAH LAW",
        question: "Haram means:",
        answers: [
            { text: "Forbidden", correct: true },
            { text: "Compulsory", correct: false },
            { text: "Optional", correct: false },
            { text: "Recommended", correct: false }
        ],
        explanation: "Haram things like eating pork are completely forbidden."
    },
    // TOPIC: YEAR OF SORROW & BOYCOTT (Questions 23-30)
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Who started the boycott?",
        answers: [
            { text: "Quraysh", correct: true },
            { text: "Romans", correct: false },
            { text: "Persians", correct: false },
            { text: "Abyssinians", correct: false }
        ],
        explanation: "The Quraysh banned all contact, trade, and marriage with Muslims."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "A trader wants to sell food to Muslims:",
        answers: [
            { text: "Forbidden", correct: true },
            { text: "Allowed", correct: false },
            { text: "Recommended", correct: false },
            { text: "Required", correct: false }
        ],
        explanation: "Trade with Muslims was banned during the boycott."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Someone secretly brings food at night:",
        answers: [
            { text: "Allowed", correct: true },
            { text: "Forbidden", correct: false },
            { text: "Punished", correct: false },
            { text: "Ignored", correct: false }
        ],
        explanation: "Only secret help was possible due to the harsh boycott."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "You want to say salam to a Muslim:",
        answers: [
            { text: "Forbidden", correct: true },
            { text: "Allowed", correct: false },
            { text: "Required", correct: false },
            { text: "Optional", correct: false }
        ],
        explanation: "Even greeting or speaking to Muslims was banned."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Marrying someone from Banu Hashim:",
        answers: [
            { text: "Forbidden", correct: true },
            { text: "Allowed", correct: false },
            { text: "Encouraged", correct: false },
            { text: "Optional", correct: false }
        ],
        explanation: "Marriage with the Prophet's clan was banned during the boycott."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Muslims gathering with patience and iman:",
        answers: [
            { text: "Allowed", correct: true },
            { text: "Forbidden", correct: false },
            { text: "Discouraged", correct: false },
            { text: "Punished", correct: false }
        ],
        explanation: "The Muslims showed sabr and strong iman despite hardship."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Who died in the Year of Sorrow?",
        answers: [
            { text: "Khadijah (RA)", correct: true },
            { text: "Aisha", correct: false },
            { text: "Hafsa", correct: false },
            { text: "Fatimah", correct: false }
        ],
        explanation: "Khadijah (RA) passed away, deeply affecting the Prophet (SAW)."
    },
    {
        topic: "YEAR OF SORROW & BOYCOTT",
        question: "Who else died in the Year of Sorrow?",
        answers: [
            { text: "Abu Talib", correct: true },
            { text: "Umar", correct: false },
            { text: "Ali", correct: false },
            { text: "Hasan", correct: false }
        ],
        explanation: "Abu Talib protected the Prophet (SAW) and his loss was painful."
    },
    // TOPIC: ISRA & MIRAJ (Questions 31-36)
    {
        topic: "ISRA & MIRAJ",
        question: "What is the Isra?",
        answers: [
            { text: "Journey from Makkah to Masjid al-Aqsa", correct: true },
            { text: "Migration", correct: false },
            { text: "Battle", correct: false },
            { text: "Travel to Taif", correct: false }
        ],
        explanation: "The Prophet (SAW) travelled on the Buraq from Makkah to Jerusalem."
    },
    {
        topic: "ISRA & MIRAJ",
        question: "What is the Miraj?",
        answers: [
            { text: "Ascending through 7 heavens", correct: true },
            { text: "Travel to Taif", correct: false },
            { text: "Migration", correct: false },
            { text: "Sleeping", correct: false }
        ],
        explanation: "The Prophet (SAW) met prophets and was given Salah."
    },
    {
        topic: "ISRA & MIRAJ",
        question: "What animal did the Prophet ride?",
        answers: [
            { text: "Buraq", correct: true },
            { text: "Camel", correct: false },
            { text: "Horse", correct: false },
            { text: "Mule", correct: false }
        ],
        explanation: "Buraq is a heavenly animal that travelled with extraordinary speed."
    },
    {
        topic: "ISRA & MIRAJ",
        question: "What gift came during Miraj?",
        answers: [
            { text: "Salah", correct: true },
            { text: "Fasting", correct: false },
            { text: "Zakat", correct: false },
            { text: "Hajj", correct: false }
        ],
        explanation: "Allah gifted the 5 daily prayers during the Miraj."
    },
    {
        topic: "ISRA & MIRAJ",
        question: "How many heavens did he ascend?",
        answers: [
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "3", correct: false },
            { text: "10", correct: false }
        ],
        explanation: "The Prophet (SAW) met different prophets in each heaven."
    },
    {
        topic: "ISRA & MIRAJ",
        question: "Isra started from:",
        answers: [
            { text: "Masjid al-Haram", correct: true },
            { text: "Masjid an-Nabawi", correct: false },
            { text: "Madinah", correct: false },
            { text: "Taif", correct: false }
        ],
        explanation: "Jibril took the Prophet (SAW) from Makkah to Jerusalem."
    },
    // TOPIC: 3 PERSONALITIES (Questions 37-39)
    {
        topic: "3 PERSONALITIES",
        question: "A Mu'min is:",
        answers: [
            { text: "A true believer", correct: true },
            { text: "Rejector", correct: false },
            { text: "Hypocrite", correct: false },
            { text: "Sinner", correct: false }
        ],
        explanation: "A Mu'min believes in Allah and follows His guidance sincerely."
    },
    {
        topic: "3 PERSONALITIES",
        question: "A Kafir is:",
        answers: [
            { text: "One who rejects truth after knowing it", correct: true },
            { text: "A believer", correct: false },
            { text: "An angel", correct: false },
            { text: "A prophet", correct: false }
        ],
        explanation: "A Kafir rejects belief after understanding the truth."
    },
    {
        topic: "3 PERSONALITIES",
        question: "A Munafiq is:",
        answers: [
            { text: "A hypocrite", correct: true },
            { text: "Believer", correct: false },
            { text: "Angel", correct: false },
            { text: "Messenger", correct: false }
        ],
        explanation: "A Munafiq pretends to believe but hides disbelief."
    },
    // TOPIC: PROPHET DAWOOD (AS) (Questions 40-45)
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "What was Dawood (AS) before prophethood?",
        answers: [
            { text: "Shepherd", correct: true },
            { text: "Merchant", correct: false },
            { text: "Soldier", correct: false },
            { text: "Farmer", correct: false }
        ],
        explanation: "Dawood (AS) was a young, devoted shepherd."
    },
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "Who was the giant?",
        answers: [
            { text: "Jalut", correct: true },
            { text: "Talut", correct: false },
            { text: "Firawn", correct: false },
            { text: "Qarun", correct: false }
        ],
        explanation: "Jalut was a strong, cruel warrior leading the enemy army."
    },
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "Who asked the army who would fight Jalut?",
        answers: [
            { text: "Talut", correct: true },
            { text: "Dawood", correct: false },
            { text: "Musa", correct: false },
            { text: "Suleiman", correct: false }
        ],
        explanation: "Talut was the king who asked for a brave volunteer."
    },
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "How did Dawood defeat Jalut?",
        answers: [
            { text: "Slingshot", correct: true },
            { text: "Sword", correct: false },
            { text: "Spear", correct: false },
            { text: "Arrow", correct: false }
        ],
        explanation: "Dawood (AS) defeated him with Allah's help using a slingshot."
    },
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "Which scripture was revealed to Dawood?",
        answers: [
            { text: "Zabur", correct: true },
            { text: "Torah", correct: false },
            { text: "Injil", correct: false },
            { text: "Quran", correct: false }
        ],
        explanation: "Allah revealed the Zabur after making him a prophet."
    },
    {
        topic: "PROPHET DAWOOD (AS)",
        question: "What happened after Dawood defeated Jalut?",
        answers: [
            { text: "Allah made him king", correct: true },
            { text: "He left the army", correct: false },
            { text: "He travelled", correct: false },
            { text: "He moved away", correct: false }
        ],
        explanation: "Allah honoured Dawood (AS) with kingship and prophethood."
    }
];

// Game State
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = false;

// Encouraging messages
const correctMessages = [
    "🎉 MashaAllah! Correct!",
    "✨ Amazing! You got it!",
    "⭐ Wonderful! That's right!",
    "🌟 Excellent work!",
    "💫 Fantastic! Keep going!",
    "🎊 Brilliant answer!",
    "👏 Great job!",
    "🌙 Superb! Well done!"
];

const wrongMessages = [
    "Keep learning! You can do it! 💪",
    "Don't worry! Try the next one! 🌟",
    "Keep trying! You're doing great! ✨",
    "No problem! Keep going! 💫",
    "Learning is a journey! 📚",
    "Stay positive! Next question! 🌈"
];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const nextBtnText = document.getElementById('nextBtnText');
const restartBtn = document.getElementById('restartBtn');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const questionNumber = document.getElementById('questionNumber');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const topicBadge = document.getElementById('topicBadge');
const finalScore = document.getElementById('finalScore');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const percentageText = document.getElementById('percentageText');
const resultEmoji = document.getElementById('resultEmoji');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const progressCircle = document.getElementById('progressCircle');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = questionBank[currentQuestionIndex];
    selectedAnswer = false;
    
    // Update header info
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questionBank.length}`;
    scoreDisplay.textContent = score;
    topicBadge.textContent = question.topic;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questionBank.length) * 100;
    progressFill.style.width = progress + '%';
    progressPercent.textContent = Math.round(progress) + '%';
    
    // Display question with animation
    questionText.textContent = question.question;
    questionText.style.animation = 'none';
    setTimeout(() => {
        questionText.style.animation = 'questionPop 0.5s ease-out';
    }, 10);
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    feedback.classList.add('hidden');
    explanationBox.style.display = 'none';
    
    // Update next button text
    if (currentQuestionIndex === questionBank.length - 1) {
        nextBtnText.textContent = 'See Results';
    } else {
        nextBtnText.textContent = 'Next Question';
    }
    
    // Create answer buttons with staggered animation
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer.text;
        button.style.opacity = '0';
        button.style.animation = `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`;
        button.addEventListener('click', () => selectAnswer(answer, button));
        answersContainer.appendChild(button);
    });
}

// Select Answer
function selectAnswer(answer, button) {
    if (selectedAnswer) return; // Prevent multiple selections
    
    selectedAnswer = true;
    const question = questionBank[currentQuestionIndex];
    
    // Disable all buttons
    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (answer.correct) {
        button.classList.add('correct');
        feedback.classList.add('correct');
        feedback.classList.remove('wrong');
        
        // Random encouraging message
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        feedbackText.textContent = randomMessage;
        feedbackEmoji.textContent = '🎉';
        
        score++;
        scoreDisplay.textContent = score;
        
        // Animate score
        scoreDisplay.style.transform = 'scale(1.3)';
        setTimeout(() => {
            scoreDisplay.style.transform = 'scale(1)';
        }, 300);
    } else {
        button.classList.add('wrong');
        feedback.classList.add('wrong');
        feedback.classList.remove('correct');
        
        // Random encouraging message
        const randomMessage = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        feedbackText.textContent = randomMessage;
        feedbackEmoji.textContent = '💪';
        
        // Highlight the correct answer
        allButtons.forEach((btn, index) => {
            if (question.answers[index].correct) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Show explanation
    if (question.explanation) {
        explanationText.textContent = question.explanation;
        explanationBox.style.display = 'block';
    }
    
    // Show feedback and next button
    feedback.classList.remove('hidden');
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionBank.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / questionBank.length) * 100);
    const wrong = questionBank.length - score;
    
    // Update scores
    finalScore.textContent = `${score}/${questionBank.length}`;
    percentageText.textContent = `${percentage}%`;
    correctAnswers.textContent = score;
    wrongAnswers.textContent = wrong;
    
    // Animate circular progress
    const circumference = 2 * Math.PI * 100;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    // Add gradient definition for SVG (inline)
    const svg = document.querySelector('.circular-progress');
    if (!document.getElementById('gradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '0%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
    
    // Set message and emoji based on score
    if (percentage >= 95) {
        resultTitle.textContent = "PERFECT! MashaAllah! 🌟";
        resultMessage.textContent = "You're an Islamic Studies Star! Incredible work!";
        resultEmoji.textContent = '🏆';
    } else if (percentage >= 85) {
        resultTitle.textContent = "Outstanding! 🎉";
        resultMessage.textContent = "Amazing knowledge! Keep shining bright!";
        resultEmoji.textContent = '⭐';
    } else if (percentage >= 75) {
        resultTitle.textContent = "Excellent Work! 💪";
        resultMessage.textContent = "You're doing fantastic! Keep it up!";
        resultEmoji.textContent = '🌟';
    } else if (percentage >= 60) {
        resultTitle.textContent = "Good Job! 👍";
        resultMessage.textContent = "You're learning well! Keep studying!";
        resultEmoji.textContent = '�';
    } else if (percentage >= 40) {
        resultTitle.textContent = "Nice Try! 💫";
        resultMessage.textContent = "Review your notes and try again!";
        resultEmoji.textContent = '�';
    } else {
        resultTitle.textContent = "Keep Going! 🌙";
        resultMessage.textContent = "Practice makes perfect! You can do it!";
        resultEmoji.textContent = '💪';
    }
}

// Restart Quiz
function restartQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}
