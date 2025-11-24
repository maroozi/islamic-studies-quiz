// Tajweed Quiz - Year 6 Term 1 - Unit 2: Idghām
// Question Bank for Noon Sākinah and Tanween - Idghām Rules

const idghamQuestions = [
    // THEORY QUESTIONS
    {
        topic: "Basics",
        question: "What does Idghām mean?",
        answers: [
            "To merge",
            "To hide",
            "To make clear",
            "To change"
        ],
        correctIndex: 0,
        explanationHtml: "Idghām means <b>to merge</b> the noon sākinah or tanween into the next letter."
    },
    {
        topic: "Letters",
        question: "Which letters cause Idghām **with ghunnah**?",
        answers: [
            "<span class='idgham-letter'>ي ن م و</span>",
            "<span class='idgham-letter'>ر ل</span>",
            "<span class='idgham-letter'>ء هـ</span>",
            "<span class='idgham-letter'>ب</span>"
        ],
        correctIndex: 0,
        explanationHtml: "The letters of Idghām with ghunnah are <span class='ghunnah'>ي ن م و</span>."
    },
    {
        topic: "Letters",
        question: "Which letters cause Idghām **without ghunnah**?",
        answers: [
            "<span class='idgham-letter'>ر ل</span>",
            "<span class='idgham-letter'>ي ن</span>",
            "<span class='idgham-letter'>م و</span>",
            "<span class='idgham-letter'>خ غ</span>"
        ],
        correctIndex: 0,
        explanationHtml: "If <span class='noon'>نْ</span> or tanween is followed by <span class='idgham-letter'>ر</span> or <span class='idgham-letter'>ل</span> → merge completely with NO ghunnah."
    },
    {
        topic: "Recognition",
        question: "How do you recognise Idghām in the Qur'an?",
        answers: [
            "A noon written without sukoon followed by letters of يرملون",
            "A noon with shaddah",
            "A tanween followed by hamzah",
            "A meem sākinah before ب"
        ],
        correctIndex: 0,
        explanationHtml: "Noon sākinah without sukoon → followed by <span class='idgham-letter'>يرملون</span> → Idghām applies."
    },
    {
        topic: "Ghunnah",
        question: "What is ghunnah?",
        answers: [
            "A nasal sound for 2 counts",
            "A throat sound",
            "A long madd",
            "A qalqalah echo"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='ghunnah'>Ghunnah</span> is the nasal humming sound held for 2 counts."
    },
    
    // IDGHĀM — WITH GHUNNAH — NOON SĀKINAH
    {
        topic: "With Ghunnah",
        question: "Identify the rule: <span class='example-word'>مِ<span class='noon'>نْ</span><span class='ghunnah'>يَبْتَغِ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='noon'>نْ</span> + <span class='ghunnah'>ي</span> → merge with nasal ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>أَنْ<span class='ghunnah'>يُؤْمِنُوا</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='noon'>نْ</span> followed by <span class='ghunnah'>ي</span> → Idghām with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>مِ<span class='noon'>نْ</span><span class='ghunnah'>نَفَادٍ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idghām without ghunnah",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='ghunnah'>ن</span> after <span class='noon'>نْ</span> merges fully with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>أَنَا خَيْرٌ<span class='ghunnah'>مِنْهُ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "Tanween followed by <span class='ghunnah'>م</span> → Idghām with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>مَ<span class='noon'>نْ</span><span class='ghunnah'>يَعْمَلْ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idghām without ghunnah",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='noon'>نْ</span> + <span class='ghunnah'>ي</span> → merging with nasal sound."
    },
    
    // IDGHĀM — WITH GHUNNAH — TANWEEN
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>إِلَٰهٌ<span class='ghunnah'>وَاحِدٌ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Iqlāb",
            "Ikhfā'"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>و</span> → merge with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>يَوْمًا<span class='ghunnah'>مُبِينًا</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Idh-hār",
            "Ikhfā'"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>م</span> → Idghām with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>نَصِيبًا<span class='ghunnah'>مِمَّا</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>م</span> = Idghām with ghunnah."
    },
    {
        topic: "With Ghunnah",
        question: "<span class='example-word'>صَلَوَاتٌ<span class='ghunnah'>مِنْ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idghām without ghunnah",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>م</span> → Idghām with ghunnah."
    },
    
    // IDGHĀM — WITHOUT GHUNNAH
    {
        topic: "Without Ghunnah",
        question: "<span class='example-word'>مِ<span class='noon'>نْ</span><span class='idgham-letter'>رَبِّهِمْ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idgham-letter'>ر</span> causes Idghām WITHOUT ghunnah."
    },
    {
        topic: "Without Ghunnah",
        question: "<span class='example-word'>مِ<span class='noon'>نْ</span><span class='idgham-letter'>لَدُنْهُ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idgham-letter'>ل</span> after noon → merge without ghunnah."
    },
    {
        topic: "Without Ghunnah",
        question: "<span class='example-word'>حُكْمًا<span class='idgham-letter'>لِقَوْمٍ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idghām with ghunnah",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='idgham-letter'>ل</span> → Idghām without ghunnah."
    },
    {
        topic: "Without Ghunnah",
        question: "<span class='example-word'>هُمْزَةٌ<span class='idgham-letter'>لُمَزَةٍ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Idghām with ghunnah",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> → <span class='idgham-letter'>ل</span> with shaddah → no ghunnah."
    },
    
    // MIXED IDGHĀM
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>فَتْحًا<span class='ghunnah'>مِنْ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> then <span class='ghunnah'>م</span> → Idghām with ghunnah."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>دَرَجَاتٍ<span class='ghunnah'>مِمَّا</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>م</span> → nasal merger."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>عَذَابًا<span class='idgham-letter'>لِكُلِّ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Idghām with ghunnah",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='idgham-letter'>ل</span> → Idghām without ghunnah."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>مِنْ<span class='ghunnah'>نَبَإٍ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='noon'>نْ</span> + <span class='ghunnah'>ن</span> → full nasal merging."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>خَالِصَةً<span class='idgham-letter'>لَكُمْ</span></span>",
        answers: [
            "Idghām without ghunnah",
            "Idghām with ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> before <span class='idgham-letter'>ل</span> → no ghunnah."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>سَمِيعًا<span class='ghunnah'>يَعْلَمُ</span></span>",
        answers: [
            "Idghām with ghunnah",
            "Idghām without ghunnah",
            "Ikhfā'",
            "Idh-hār"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='tanween'>Tanween</span> + <span class='ghunnah'>ي</span> → merge with nasal sound."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;

// DOM Elements
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backToUnitBtn = document.getElementById('backToUnit');
const backToUnitFromResultsBtn = document.getElementById('backToUnitFromResults');
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('scoreDisplay');
const topicBadge = document.getElementById('topicBadge');
const questionNumber = document.getElementById('questionNumber');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
backToUnitBtn.addEventListener('click', () => window.location.href = 'quran-unit2.html');
backToUnitFromResultsBtn.addEventListener('click', () => window.location.href = 'quran-unit2.html');

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showQuestion() {
    const question = idghamQuestions[currentQuestion];
    questionText.innerHTML = question.question;
    topicBadge.textContent = question.topic;
    
    // Create array of answers with their original indices
    const answersWithIndices = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    // Shuffle the answers
    const shuffledAnswers = shuffleArray(answersWithIndices);
    
    answersContainer.innerHTML = '';
    shuffledAnswers.forEach((answerObj) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = answerObj.text;
        button.addEventListener('click', () => selectAnswer(answerObj.originalIndex));
        answersContainer.appendChild(button);
    });
    
    feedback.classList.add('hidden');
    nextBtn.style.display = 'none';
    
    const progress = ((currentQuestion + 1) / idghamQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${idghamQuestions.length}`;
    progressPercent.textContent = `${Math.round(progress)}%`;
}

function selectAnswer(selectedIndex) {
    const question = idghamQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === question.correctIndex;
    const correctAnswerText = question.answers[question.correctIndex];
    
    buttons.forEach((button) => {
        button.disabled = true;
        // Highlight correct answer by matching text content
        if (button.innerHTML === correctAnswerText) {
            button.classList.add('correct');
        }
        // Highlight wrong answer only if user clicked it
        if (button.innerHTML === question.answers[selectedIndex] && !isCorrect) {
            button.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        document.getElementById('feedbackEmoji').textContent = '🎉';
        document.getElementById('feedbackText').textContent = 'Excellent! MashaAllah!';
        document.getElementById('feedbackText').style.color = '#11998e';
    } else {
        document.getElementById('feedbackEmoji').textContent = '😢';
        document.getElementById('feedbackText').textContent = 'Not quite! Keep learning!';
        document.getElementById('feedbackText').style.color = '#e53935';
    }
    
    document.getElementById('explanationText').innerHTML = question.explanationHtml;
    feedback.classList.remove('hidden');
    nextBtn.style.display = 'flex';
    
    if (currentQuestion === idghamQuestions.length - 1) {
        document.getElementById('nextBtnText').textContent = 'See Results';
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < idghamQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / idghamQuestions.length) * 100);
    document.getElementById('percentageText').textContent = `${percentage}%`;
    document.getElementById('finalScore').textContent = `${score}/${idghamQuestions.length}`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = idghamQuestions.length - score;
    
    const circumference = 2 * Math.PI * 90;
    const progressCircle = document.getElementById('progressCircle');
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    let resultTitle, resultMessage, resultEmoji;
    if (percentage === 100) {
        resultTitle = "Perfect Score!";
        resultMessage = "MashaAllah! You are an Idghām master! 🌟";
        resultEmoji = "🏆";
    } else if (percentage >= 80) {
        resultTitle = "Excellent!";
        resultMessage = "أحسنت (Ahsanta)! Outstanding work with Idghām!";
        resultEmoji = "⭐";
    } else if (percentage >= 60) {
        resultTitle = "Good Job!";
        resultMessage = "بارك الله فيك (Barakallahu feek)! Keep practicing!";
        resultEmoji = "👍";
    } else {
        resultTitle = "Keep Trying!";
        resultMessage = "Don't give up! Review the Idghām letters and try again! 💪";
        resultEmoji = "📚";
    }
    
    document.getElementById('resultTitle').textContent = resultTitle;
    document.getElementById('resultMessage').textContent = resultMessage;
    document.getElementById('resultEmoji').textContent = resultEmoji;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreDisplay.textContent = '0';
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
    document.getElementById('nextBtnText').textContent = 'Next Question';
}
