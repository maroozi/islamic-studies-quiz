// Fisher-Yates shuffle algorithm for unbiased randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Meem Sākinah Questions (25 Real Questions)
const questions = [
    {
        question: "What does Idghām Shafawi mean?",
        answers: ["To hide", "To merge or mix", "To make clear", "To stretch"],
        correctIndex: 1,
        explanation: "Idghām Shafawi (إدغام شفوي) means 'to merge' or 'to mix' - when two meems come together, they merge with ghunnah."
    },
    {
        question: "Which letter causes Idghām Shafawi?",
        answers: ["ب", "م", "و", "ي"],
        correctIndex: 1,
        explanation: "Idghām Shafawi occurs when meem sākinah is followed by another meem (م)."
    },
    {
        question: "When Idghām Shafawi occurs, how many counts of ghunnah are applied?",
        answers: ["1", "2", "3", "None"],
        correctIndex: 1,
        explanation: "Idghām Shafawi requires 2 counts of ghunnah - the same duration as other ghunnah rules."
    },
    {
        question: "What happens when a Meem Sākinah is followed by another Meem?",
        answers: ["It is hidden", "It is pronounced clearly", "The two Meems merge with ghunnah", "It becomes silent"],
        correctIndex: 2,
        explanation: "When meem sākinah meets another meem, they merge together with nasal ghunnah for 2 counts."
    },
    {
        question: "What sign shows Idghām Shafawi in the Qur'an?",
        answers: ["A small meem", "A shaddah on the second meem", "A sukoon circle", "A kasrah"],
        correctIndex: 1,
        explanation: "A shaddah (ّ) on the second meem indicates that the two meems merge (Idghām Shafawi)."
    },
    {
        question: "Identify the rule: مُطْمَئِنٌّ",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Not Meem Sakinah"],
        correctIndex: 3,
        explanation: "This is a trick question - مُطْمَئِنٌّ doesn't have meem sākinah in the relevant position for these rules."
    },
    {
        question: "Identify the rule in: وَمِنْهُمْ مَنْ",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Madd"],
        correctIndex: 0,
        explanation: "The meem sākinah (مْ) in هُمْ is followed by meem (م) in مَنْ, causing Idghām Shafawi."
    },
    {
        question: "What does Ikhfāʾ Shafawi mean?",
        answers: ["To show clearly", "To hide or conceal", "To merge", "To stretch"],
        correctIndex: 1,
        explanation: "Ikhfāʾ Shafawi (إخفاء شفوي) means 'to hide' or 'to conceal' - the meem is partially concealed with ghunnah."
    },
    {
        question: "Which letter causes Ikhfāʾ Shafawi?",
        answers: ["م", "ب", "ن", "ه"],
        correctIndex: 1,
        explanation: "Ikhfāʾ Shafawi occurs when meem sākinah is followed by bāʾ (ب)."
    },
    {
        question: "How is Meem pronounced in Ikhfāʾ Shafawi?",
        answers: ["With full lip closure", "With lips open completely", "Without full pressure on lips", "With a long stretch"],
        correctIndex: 2,
        explanation: "In Ikhfāʾ Shafawi, pronounce the meem without full lip pressure, creating a concealed nasal sound."
    },
    {
        question: "When Ikhfāʾ Shafawi occurs, how many counts of ghunnah are applied?",
        answers: ["0", "1", "2", "4"],
        correctIndex: 2,
        explanation: "Ikhfāʾ Shafawi requires 2 counts of ghunnah while concealing the meem sound."
    },
    {
        question: "Identify the rule in: يَعْلَمْ بِهِ",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Qalqalah"],
        correctIndex: 1,
        explanation: "The meem sākinah (مْ) in يَعْلَمْ is followed by bāʾ (ب) in بِهِ, causing Ikhfāʾ Shafawi."
    },
    {
        question: "Identify the rule: لَهُمْ بِهِ",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Madd"],
        correctIndex: 1,
        explanation: "The meem sākinah (مْ) in لَهُمْ is followed by bāʾ (ب), creating Ikhfāʾ Shafawi."
    },
    {
        question: "Which is an example of Ikhfāʾ Shafawi?",
        answers: ["كَمْ مِنْ", "أَمَّا", "هُمْ بِهِ", "عَلَيْهِمْ"],
        correctIndex: 2,
        explanation: "هُمْ بِهِ shows meem sākinah (مْ) followed by bāʾ (ب), which is Ikhfāʾ Shafawi."
    },
    {
        question: "What does Idh-hār Shafawi mean?",
        answers: ["To hide", "To make clear", "To merge", "To change"],
        correctIndex: 1,
        explanation: "Idh-hār Shafawi (إظهار شفوي) means 'to make clear' - pronouncing meem clearly without ghunnah."
    },
    {
        question: "How is Meem pronounced in Idh-hār Shafawi?",
        answers: ["Merged", "Concealed", "Clear without ghunnah", "With shaddah"],
        correctIndex: 2,
        explanation: "In Idh-hār Shafawi, pronounce meem sākinah clearly and distinctly without ghunnah."
    },
    {
        question: "Which letters belong to Idh-hār Shafawi?",
        answers: ["Only ب", "Only م", "Every letter except ب and م", "Only ح and خ"],
        correctIndex: 2,
        explanation: "Idh-hār Shafawi occurs when meem sākinah is followed by any letter except bāʾ (ب) and meem (م)."
    },
    {
        question: "Identify the rule in: عَلَيْهِمْ خَاصَّةً",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Qalqalah"],
        correctIndex: 2,
        explanation: "The meem sākinah (مْ) in عَلَيْهِمْ is followed by khāʾ (خ), causing Idh-hār Shafawi."
    },
    {
        question: "Identify the rule in: كَيْدَهُمْ فِي",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Madd"],
        correctIndex: 2,
        explanation: "The meem sākinah (مْ) in كَيْدَهُمْ is followed by fāʾ (ف), creating Idh-hār Shafawi."
    },
    {
        question: "Which of these is Idh-hār Shafawi?",
        answers: ["م + ب", "م + م", "م + any other letter", "م + small meem"],
        correctIndex: 2,
        explanation: "Idh-hār Shafawi occurs when meem sākinah (م) is followed by any letter except bāʾ and meem."
    },
    {
        question: "What is Meem Sākinah?",
        answers: ["Meem with shaddah", "Meem with sukoon or no vowel", "Meem with fatha", "Meem with tanween"],
        correctIndex: 1,
        explanation: "Meem Sākinah is a meem with sukoon (مْ) or appearing with no vowel at the end of a word."
    },
    {
        question: "What is the differentiating feature between Ikhfāʾ Shafawi and Idghām Shafawi?",
        answers: ["Length of word", "Makhraj", "The letter after Meem: ب = Ikhfāʾ, م = Idghām", "Script colour"],
        correctIndex: 2,
        explanation: "If meem sākinah is followed by ب, it's Ikhfāʾ Shafawi. If followed by م, it's Idghām Shafawi."
    },
    {
        question: "How do we recognise Ikhfāʾ Shafawi in the Qur'an?",
        answers: ["A small meem sign", "A shaddah", "Meem followed by ب", "Meem with tanween"],
        correctIndex: 2,
        explanation: "Look for meem sākinah (مْ) followed by the letter bāʾ (ب) to identify Ikhfāʾ Shafawi."
    },
    {
        question: "Which rule applies in: كَمْ مَثَلِهِمْ?",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Madd"],
        correctIndex: 0,
        explanation: "The meem sākinah (مْ) in كَمْ is followed by meem (م) in مَثَلِهِمْ, causing Idghām Shafawi."
    },
    {
        question: "Which rule applies in: لَهُمْ قَوْلٌ?",
        answers: ["Idghām Shafawi", "Ikhfāʾ Shafawi", "Idh-hār Shafawi", "Qalqalah"],
        correctIndex: 2,
        explanation: "The meem sākinah (مْ) in لَهُمْ is followed by qāf (ق), causing Idh-hār Shafawi."
    }
];

// Quiz State Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backToUnitBtn = document.getElementById('backToUnit');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const currentQuestionNumber = document.getElementById('currentQuestion');
const totalQuestions = document.getElementById('totalQuestions');
const progressBar = document.getElementById('progressBar');
const retryBtn = document.getElementById('retryBtn');
const backBtn = document.getElementById('backBtn');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
backToUnitBtn.addEventListener('click', () => window.location.href = 'quran-unit5.html');
nextBtn.addEventListener('click', loadNextQuestion);
retryBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => window.location.href = 'quran-unit5.html');

// Start Quiz Function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resultsScreen.classList.remove('active');
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    // Update progress
    currentQuestionNumber.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = questions.length;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Shuffle answers using Fisher-Yates algorithm
    const answersWithIndex = currentQuestion.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer buttons
    shuffledAnswers.forEach((answerObj) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answerObj.text;
        button.onclick = () => selectAnswer(answerObj.originalIndex);
        answersContainer.appendChild(button);
    });
    
    nextBtn.style.display = 'none';
}

// Select Answer
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if answer is correct
    if (selectedIndex === currentQuestion.correctIndex) {
        score++;
        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.answers[selectedIndex]) {
                btn.classList.add('correct');
            }
        });
    } else {
        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.answers[selectedIndex]) {
                btn.classList.add('wrong');
            }
            if (btn.textContent === currentQuestion.answers[currentQuestion.correctIndex]) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Show explanation
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    explanation.textContent = currentQuestion.explanation;
    answersContainer.appendChild(explanation);
    
    // Show next button
    nextBtn.style.display = 'inline-block';
}

// Load Next Question
function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
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
        performanceMessage.style.color = '#6a11cb';
    } else if (percentage >= 60) {
        performanceMessage.textContent = '👍 Good job! Practice makes perfect! 👍';
        performanceMessage.style.color = '#2575fc';
    } else {
        performanceMessage.textContent = '💪 Keep practicing! You can do it! 💪';
        performanceMessage.style.color = '#e74c3c';
    }
}
