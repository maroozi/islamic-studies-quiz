// Tajweed Quiz - Year 6 Term 1 - Unit 1: Idh-hār
// Question Bank for Noon Sākinah and Tanween - Idh-hār Rules

const tajweedQuestions = [
    // DEFINITIONS & BASIC UNDERSTANDING
    {
        topic: "Basics",
        question: "What is noon sākinah?",
        answers: [
            "The letter ن with a sukūn or with no vowel",
            "Any ن with fatḥah",
            "Any letter with shaddah",
            "A doubled vowel"
        ],
        correctIndex: 0,
        explanationHtml: "Noon sākinah is <span class='noon'>نْ</span> or a ن with no ḥarakah, occurring in the middle or end of a word."
    },
    {
        topic: "Basics",
        question: "What is tanween?",
        answers: [
            "A doubled vowel on the last letter",
            "A shaddah",
            "A sukoon",
            "A dhammah on ن"
        ],
        correctIndex: 0,
        explanationHtml: "Tanween is the doubled vowel signs like <span class='tanween'>ــً</span>, <span class='tanween'>ــٍ</span>, <span class='tanween'>ــٌ</span>."
    },
    {
        topic: "Basics",
        question: "How many rules of noon sākinah and tanween are there?",
        answers: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        correctIndex: 2,
        explanationHtml: "There are FOUR rules: Idh-hār, Idghām, Iqlāb, Ikhfā'."
    },
    {
        topic: "Basics",
        question: "Which list contains all four rules?",
        answers: [
            "Idh-hār, Idghām, Iqlāb, Ikhfā'",
            "Madd, Qalqalah, Ikhfā', Idh-hār",
            "Idghām, Qalqalah, Madd, Iqlāb",
            "Ikhfā', Ikhfā' Shafawi, Qalqalah, Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "The four rules relate to how noon sākinah / tanween are pronounced."
    },
    
    // IDH-HĀR THEORY
    {
        topic: "Idh-haar",
        question: "What does Idh-hār mean?",
        answers: [
            "To make clear",
            "To merge",
            "To hide",
            "To change"
        ],
        correctIndex: 0,
        explanationHtml: "Idh-hār (إظهار) means <b>to make clear or apparent</b>."
    },
    {
        topic: "Idh-haar",
        question: "Where are Idh-hār letters pronounced?",
        answers: [
            "From the throat",
            "From the lips",
            "From the nose",
            "From the tongue"
        ],
        correctIndex: 0,
        explanationHtml: "All Idh-hār letters are throat letters."
    },
    {
        topic: "Idh-haar",
        question: "Which letters are Idh-hār letters?",
        answers: [
            "ء هـ ع ح غ خ",
            "ي و م ن",
            "ب only",
            "ت ث ج د"
        ],
        correctIndex: 0,
        explanationHtml: "The six throat letters: <span class='idhaar-letter'>ء هـ ع ح غ خ</span> cause Idh-hār."
    },
    {
        topic: "Idh-haar",
        question: "When does Idh-hār apply?",
        answers: [
            "When noon sākinah or tanween is followed by a throat letter",
            "When followed by ب",
            "When there is a shaddah",
            "Whenever a tanween appears"
        ],
        correctIndex: 0,
        explanationHtml: "If <span class='noon'>نْ</span> or <span class='tanween'>tanween</span> is followed by <span class='idhaar-letter'>throat letters</span>, the sound is clear."
    },
    
    // QUR'ĀN AYAH RECOGNITION - NOON SĀKINAH
    {
        topic: "Ayah Recognition",
        question: "Which rule applies? <span class='example-word'>مِ<span class='noon'>نْ</span><span class='idhaar-letter'>هَا</span></span>",
        answers: [
            "Idh-hār",
            "Idghām",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "Noon sākinah <span class='noon'>نْ</span> is followed by <span class='idhaar-letter'>ه</span> → Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Identify the rule: <span class='example-word'>مِ<span class='noon'>نْ</span><span class='idhaar-letter'>عَلِيٍّ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "The noon is followed by ʿayn <span class='idhaar-letter'>ع</span> → throat letter."
    },
    {
        topic: "Ayah Recognition",
        question: "Which is Idh-hār? <span class='example-word'>مِ<span class='noon'>نْ</span><span class='idhaar-letter'>خَشْيَةِ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Qalqalah"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>خ</span> is an Idh-hār letter."
    },
    {
        topic: "Ayah Recognition",
        question: "Identify: <span class='example-word'>وَمِ<span class='noon'>نْ</span><span class='idhaar-letter'>خَلْفِهِمْ</span></span>",
        answers: [
            "Idh-hār",
            "Iqlāb",
            "Ikhfā'",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Noon sākinah followed by <span class='idhaar-letter'>خ</span> → clear Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Which rule applies? <span class='example-word'>فَمِ<span class='noon'>نْ</span><span class='idhaar-letter'>غَضِبَ</span></span>",
        answers: [
            "Idh-hār",
            "Iqlāb",
            "Ikhfā'",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>غ</span> = throat letter → Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Which rule applies? <span class='example-word'>إِ<span class='noon'>نْ</span><span class='idhaar-letter'>أَرَدْتُمْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ء</span> is an Idh-hār letter."
    },
    {
        topic: "Ayah Recognition",
        question: "Identify: <span class='example-word'>لِمَ<span class='noon'>نْ</span><span class='idhaar-letter'>أَرَادَ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāb",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after noon → Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Which rule? <span class='example-word'>فَإِ<span class='noon'>نْ</span><span class='idhaar-letter'>خِفْتُمْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>خ</span> after noon → clear Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Identify the rule: <span class='example-word'>تَنْ<span class='idhaar-letter'>هَرْهُمَا</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ه</span> = Idh-hār letter."
    },
    {
        topic: "Ayah Recognition",
        question: "Which rule applies? <span class='example-word'>وَلَنْ<span class='idhaar-letter'>عَزَمُوا</span></span>",
        answers: [
            "Idh-hār",
            "Idghām",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ع</span> after noon = Idh-hār."
    },
    {
        topic: "Ayah Recognition",
        question: "Identify: <span class='example-word'>فَسَيُغْنِي<span class='noon'>نْ</span><span class='idhaar-letter'>هُمْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāb",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ه</span> is one of the six throat letters."
    },
    
    // IDH-HĀR — WITH TANWEEN
    {
        topic: "Tanween",
        question: "Which rule applies? <span class='example-word'>بَدَلًا<span class='idhaar-letter'> أَوْ</span></span>",
        answers: [
            "Idh-hār",
            "Idghām",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween → Idh-hār."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>سُلْطَانٍ<span class='idhaar-letter'> إِلَّا</span></span> – rule?",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāb",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah after tanween → clear tanween."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>ذَرَّةٍ<span class='idhaar-letter'> خَيْرًا</span></span> – rule?",
        answers: [
            "Idh-hār",
            "Idghām",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>خ</span> after tanween → Idh-hār."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>حَاسِدٍ<span class='idhaar-letter'> إِذَا</span></span> – rule?",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "Starts with hamzah <span class='idhaar-letter'>ء</span> → Idh-hār."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>شَهَادَةٌ<span class='idhaar-letter'> عِنْدَهُ</span></span>",
        answers: [
            "Idh-hār",
            "Idghām",
            "Ikhfā'",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "Tanween then <span class='idhaar-letter'>ʿayn (ع)</span> → Idh-hār."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>نَاصِحٌ<span class='idhaar-letter'> أَمِينٌ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>مَثَلًا<span class='idhaar-letter'> أَصْحَابَ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāb",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween."
    },
    {
        topic: "Tanween",
        question: "<span class='example-word'>غَفُورًا<span class='idhaar-letter'> حَلِيمًا</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāb",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ح</span> is an Idh-hār letter."
    },
    
    // IDH-HĀR — MIXED PRACTICE
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>عَنْ<span class='idhaar-letter'>هُمْ</span></span> – which rule?",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ه</span> after noon → Idh-hār."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>مِ<span class='noon'>نْ</span><span class='idhaar-letter'>عِلْمٍ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāb"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ʿayn (ع)</span> after noon."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>جَمِيعًا<span class='idhaar-letter'> إِنْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>فَمَنْ<span class='idhaar-letter'>خَافَ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>خ</span> after noon."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>لَكَبِيرَةٌ<span class='idhaar-letter'> إِلَّا</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāب"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>عَزِيزٌ<span class='idhaar-letter'> حَكِيمٌ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ح</span> = throat letter."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>خَوْفٌ<span class='idhaar-letter'> عَلَيْهِمْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ʿayn (ع)</span> after tanween."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>فَمَنْ<span class='idhaar-letter'>جَاءَكَ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after noon."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>صِيَامًا<span class='idhaar-letter'> أَوْ</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Iqlāب",
            "Idghām"
        ],
        correctIndex: 0,
        explanationHtml: "Hamzah <span class='idhaar-letter'>ء</span> after tanween."
    },
    {
        topic: "Mixed Practice",
        question: "<span class='example-word'>وَجَنَّةٌ<span class='idhaar-letter'> عَرْضُهَا</span></span>",
        answers: [
            "Idh-hār",
            "Ikhfā'",
            "Idghām",
            "Iqlāب"
        ],
        correctIndex: 0,
        explanationHtml: "<span class='idhaar-letter'>ʿayn (ع)</span> after tanween = Idh-hār."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;

// DOM Elements
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backToQuranBtn = document.getElementById('backToQuran');
const backToQuranFromResultsBtn = document.getElementById('backToQuranFromResults');
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
backToQuranBtn.addEventListener('click', () => window.location.href = 'quran-unit1.html');
backToQuranFromResultsBtn.addEventListener('click', () => window.location.href = 'quran-unit1.html');

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
    const question = tajweedQuestions[currentQuestion];
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
    
    const progress = ((currentQuestion + 1) / tajweedQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${tajweedQuestions.length}`;
    progressPercent.textContent = `${Math.round(progress)}%`;
}

function selectAnswer(selectedIndex) {
    const question = tajweedQuestions[currentQuestion];
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
        document.getElementById('feedbackText').textContent = 'Correct! MashaAllah!';
        document.getElementById('feedbackText').style.color = '#11998e';
    } else {
        document.getElementById('feedbackEmoji').textContent = '😢';
        document.getElementById('feedbackText').textContent = 'Not quite! Keep learning!';
        document.getElementById('feedbackText').style.color = '#eb3349';
    }
    
    document.getElementById('explanationText').innerHTML = question.explanationHtml;
    feedback.classList.remove('hidden');
    
    if (currentQuestion === tajweedQuestions.length - 1) {
        document.getElementById('nextBtnText').textContent = 'See Results';
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < tajweedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / tajweedQuestions.length) * 100);
    document.getElementById('percentageText').textContent = `${percentage}%`;
    document.getElementById('finalScore').textContent = `${score}/${tajweedQuestions.length}`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = tajweedQuestions.length - score;
    
    const circumference = 2 * Math.PI * 100;
    const progressCircle = document.getElementById('progressCircle');
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    let resultTitle, resultMessage, resultEmoji;
    if (percentage === 100) {
        resultTitle = "Perfect Score!";
        resultMessage = "MashaAllah! You are a Tajweed master! 🌟";
        resultEmoji = "🏆";
    } else if (percentage >= 80) {
        resultTitle = "Excellent!";
        resultMessage = "أحسنت (Ahsanta)! Outstanding work with Idh-hār!";
        resultEmoji = "⭐";
    } else if (percentage >= 60) {
        resultTitle = "Good Job!";
        resultMessage = "بارك الله فيك (Barakallahu feek)! Keep practicing!";
        resultEmoji = "👍";
    } else {
        resultTitle = "Keep Trying!";
        resultMessage = "Don't give up! Review the Idh-hār letters and try again! 💪";
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
