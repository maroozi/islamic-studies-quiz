// Fisher-Yates shuffle algorithm for unbiased randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Ikhfāʾ Questions
const questions = [
    {
        question: "What does the word Ikhfā' mean?",
        answers: ["To make clear", "To hide or conceal", "To merge fully", "To change the letter"],
        correctIndex: 1,
        explanation: "Ikhfā' (إخفاء) means to hide or conceal the sound of noon sākinah or tanwīn."
    },
    {
        question: "How many counts of ghunnah are used when reading Ikhfā'?",
        answers: ["1 count", "2 counts", "4 counts", "No ghunnah"],
        correctIndex: 1,
        explanation: "Ghunnah (nasal sound) is applied for 2 counts in Ikhfā'."
    },
    {
        question: "Ikhfā' happens when noon sākinah or tanwīn is followed by…",
        answers: ["Throat letters", "Letters of Idghām", "Letters of Iqlāb (ب only)", "One of the 15 Ikhfā' letters"],
        correctIndex: 3,
        explanation: "Ikhfā' occurs when noon sākinah or tanwīn is followed by one of the 15 Ikhfā' letters: ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ"
    },
    {
        question: "Which of the following is an Ikhfā' letter?",
        answers: ["خ", "ب", "ذ", "ل"],
        correctIndex: 2,
        explanation: "ذ is one of the 15 Ikhfā' letters."
    },
    {
        question: "Which statement is true about how Ikhfā' is pronounced?",
        answers: ["The tongue touches the roof fully", "The sound becomes heavy without ghunnah", "The noon sound is hidden with a light nasal sound", "The lips must close completely"],
        correctIndex: 2,
        explanation: "In Ikhfā', the noon sound is partially concealed while maintaining a light nasal ghunnah sound."
    },
    {
        question: "Ikhfā' can happen…",
        answers: ["Only between words", "Only inside words", "Only with tanwīn", "Both inside a word and between words"],
        correctIndex: 3,
        explanation: "Ikhfā' can occur both within a word (e.g., أَنْزَلَ) and between words (e.g., مِنْ قَبْلِ)."
    },
    {
        question: "In Uthmānī script, noon sākinah in Ikhfā' is written…",
        answers: ["With a clear sukoon", "Without a sukoon", "With madd sign", "With shaddah"],
        correctIndex: 1,
        explanation: "In Uthmānī script, noon sākinah in Ikhfā' is typically written without showing the sukoon mark."
    },
    {
        question: "Staggered tanwīn (two diagonal lines) followed by an Ikhfā' letter indicates…",
        answers: ["Idghām", "Ikhfā'", "Iqlāb", "Idh-hār"],
        correctIndex: 1,
        explanation: "Staggered tanwīn followed by one of the 15 Ikhfā' letters indicates Ikhfā'."
    },
    {
        question: "Identify the rule: مِــنْ سَيِّئَةٍ",
        answers: ["Idh-hār", "Ikhfā'", "Idghām", "Iqlāb"],
        correctIndex: 1,
        explanation: "نْ is followed by س (seen), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: أَنْزَلَ",
        answers: ["Ikhfā' (نْ + ز)", "Idghām", "Iqlāb", "Idh-hār"],
        correctIndex: 0,
        explanation: "نْ is followed by ز (zāy), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: مِنْ قَبْلِ",
        answers: ["Idghām", "Ikhfā'", "Iqlāb", "Idh-hār"],
        correctIndex: 1,
        explanation: "نْ meets ق (qāf), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: لَنْ تُغْنِيَ",
        answers: ["Ikhfā'", "Idghām", "Idh-hār", "Iqlāb"],
        correctIndex: 0,
        explanation: "نْ meets ت (tā'), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: تَنْزِعُ",
        answers: ["Ikhfā'", "Idghām", "Iqlāb", "Idh-hār"],
        correctIndex: 0,
        explanation: "نْ is followed by ز (zāy), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: أُولَٰئِكَ شَرًّا",
        answers: ["Ikhfā'", "Iqlāb", "Idghām", "Idh-hār"],
        correctIndex: 0,
        explanation: "Tanwīn is followed by ش (shīn), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: كَثِيرًا كَثِيرًا",
        answers: ["Ikhfā'", "Idghām", "Idh-hār", "Iqlāب"],
        correctIndex: 0,
        explanation: "Staggered tanwīn is followed by ك (kāf), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: حَسَنَةٍ فَمِنَ اللَّهِ",
        answers: ["Idghām", "Ikhfā'", "Idh-hār", "Iqlāb"],
        correctIndex: 1,
        explanation: "Tanwīn kasrah is followed by ف (fā'), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: سُوءٍ يُرِدْ",
        answers: ["Ikhfā'", "Idghām", "Idh-hār", "Iqlāb"],
        correctIndex: 0,
        explanation: "Tanwīn followed by an Ikhfā' letter (implied context)."
    },
    {
        question: "Identify the rule: عَذَابًا شَدِيدًا",
        answers: ["Ikhfā'", "Idh-hār", "Idghām", "Madd"],
        correctIndex: 0,
        explanation: "Tanwīn is followed by ش (shīn), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: ذَٰلِكَ كِتَابًا قَيِّمًا",
        answers: ["Idghām", "Ikhfā'", "Idh-hār", "Iqlāb"],
        correctIndex: 1,
        explanation: "Tanwīn is followed by ق (qāf), which is an Ikhfā' letter."
    },
    {
        question: "Identify the rule: قَوْمًا وَقَالُوا",
        answers: ["Ikhfā'", "Idghām", "Idh-hār", "Iqlāب"],
        correctIndex: 0,
        explanation: "Tanwīn is followed by و, but in the context given, it's Ikhfā'."
    },
    {
        question: "Which of these is an Ikhfā' example from the book?",
        answers: ["مَنْ آمَنَ", "مِنْ ءَايَةٍ", "مِــنْ صَدَقَةٍ", "أَنْعَمْتُ"],
        correctIndex: 2,
        explanation: "مِــنْ صَدَقَةٍ shows نْ followed by ص (ṣād), which is an Ikhfā' letter."
    },
    {
        question: "Which letter ALWAYS causes Ikhfā'?",
        answers: ["ب", "ق", "ء", "ه"],
        correctIndex: 1,
        explanation: "ق (qāf) is one of the 15 Ikhfā' letters and always causes Ikhfā'."
    },
    {
        question: "What happens to the noon sound in Ikhfā'?",
        answers: ["It becomes a meem", "It becomes silent", "It is partially hidden with nasal sound", "It is pronounced fully clear"],
        correctIndex: 2,
        explanation: "The noon sound is partially concealed while maintaining a nasal ghunnah."
    },
    {
        question: "Which example shows Ikhfā' BETWEEN words?",
        answers: ["أَنْزَلَ", "مِنْ قَبْلِ", "فَمِنْ هُدًى", "أَنْفُسَكُمْ"],
        correctIndex: 1,
        explanation: "مِنْ قَبْلِ shows Ikhfā' occurring between two separate words."
    },
    {
        question: "Which example shows Ikhfā' INSIDE a word?",
        answers: ["الْإِنسَان", "مِنْ شَرٍّ", "قَوْمًا وَقَالُوا", "شَيْئًا فَقَالَ"],
        correctIndex: 0,
        explanation: "الْإِنسَان shows Ikhfā' occurring within a single word."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backToUnitBtn = document.getElementById('backToUnit');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');
const backToUnitsBtn = document.getElementById('backToUnits');
const progressBar = document.getElementById('progressBar');
const questionNumber = document.getElementById('questionNumber');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const explanation = document.getElementById('explanation');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
if (backToUnitBtn) backToUnitBtn.addEventListener('click', () => window.location.href = 'quran-unit4.html');
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
if (backToUnitsBtn) backToUnitsBtn.addEventListener('click', () => window.location.href = 'quran-unit4.html');

// Start Quiz
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
    
    // Update question info
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
    
    // Display question
    questionText.textContent = question.question;
    
    // Shuffle answers using Fisher-Yates
    const answersWithIndices = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    const shuffledAnswers = shuffleArray(answersWithIndices);
    
    // Find the new position of the correct answer
    const shuffledCorrectIndex = shuffledAnswers.findIndex(
        item => item.originalIndex === question.correctIndex
    );
    
    // Store the shuffled correct index on the question object
    question.shuffledCorrectIndex = shuffledCorrectIndex;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons with shuffled order
    shuffledAnswers.forEach((item, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = item.text;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // Reset explanation and next button
    explanation.classList.remove('show');
    nextBtn.classList.remove('show');
    selectedAnswer = null;
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = selectedIndex;
    const question = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    answerButtons.forEach(btn => btn.classList.add('disabled'));
    
    // Check if answer is correct using shuffled correct index
    if (selectedIndex === question.shuffledCorrectIndex) {
        score++;
        answerButtons[selectedIndex].classList.add('correct');
    } else {
        answerButtons[selectedIndex].classList.add('wrong');
        answerButtons[question.shuffledCorrectIndex].classList.add('correct');
    }
    
    // Show explanation
    explanation.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    explanation.classList.add('show');
    
    // Show next button
    nextBtn.classList.add('show');
    
    // Update score display
    scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = questions.length - score;
    document.getElementById('accuracy').textContent = `${percentage}%`;
    
    const performanceMessage = document.getElementById('performanceMessage');
    
    if (percentage >= 90) {
        performanceMessage.textContent = '🌟 Outstanding! You are a Tajweed Master! 🌟';
        performanceMessage.style.color = '#28a745';
    } else if (percentage >= 75) {
        performanceMessage.textContent = '🎉 Excellent work! Keep it up! 🎉';
        performanceMessage.style.color = '#ff6b6b';
    } else if (percentage >= 60) {
        performanceMessage.textContent = '👍 Good job! Practice makes perfect! 👍';
        performanceMessage.style.color = '#ffa502';
    } else {
        performanceMessage.textContent = '💪 Keep practicing! You can do it! 💪';
        performanceMessage.style.color = '#e74c3c';
    }
}

// Reset Quiz
function resetQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
}
