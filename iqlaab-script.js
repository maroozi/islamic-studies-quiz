// Iqlaab Quiz Questions
const questions = [
    {
        question: "What does the word 'Iqlaab' mean?",
        answers: ["To hide", "To mix", "To change", "To separate"],
        correctIndex: 2,
        explanation: "Iqlaab (إِقْلاب) means 'to change' or 'to convert' - the noon sākinah changes into a meem sound."
    },
    {
        question: "What is the only letter of Iqlaab?",
        answers: ["Meem (م)", "Noon (ن)", "Baa (ب)", "Laam (ل)"],
        correctIndex: 2,
        explanation: "Baa (ب) is the only letter that causes Iqlaab when it follows noon sākinah or tanwīn."
    },
    {
        question: "What happens to a Noon Saakinah when it is followed by a Baa?",
        answers: ["It becomes silent", "It changes into a Meem sound", "It is stretched", "It is skipped"],
        correctIndex: 1,
        explanation: "When noon sākinah is followed by bāʾ, it transforms into a meem sound with ghunnah."
    },
    {
        question: "How many counts of ghunnah are applied in Iqlaab?",
        answers: ["1", "2", "3", "No ghunnah"],
        correctIndex: 1,
        explanation: "Iqlaab requires 2 counts (or beats) of ghunnah - the same duration as other ghunnah rules."
    },
    {
        question: "What symbol in the Qur'an helps you recognise Iqlaab?",
        answers: ["A shaddah", "A small meem above or below the letter", "A fatha on the Baa", "A long madd sign"],
        correctIndex: 1,
        explanation: "A small meem (م) appears above or below the noon sākinah/tanwīn to indicate Iqlaab."
    },
    {
        question: "Iqlaab happens when Noon Saakinah or Tanween meets which letter?",
        answers: ["Meem", "Baa", "Laam", "Alif"],
        correctIndex: 1,
        explanation: "Iqlaab only occurs when noon sākinah or tanwīn is followed by the letter bāʾ (ب)."
    },
    {
        question: "In Iqlaab, what sound is produced after the change?",
        answers: ["A noon sound", "A meem sound", "A silent sound", "A stretch"],
        correctIndex: 1,
        explanation: "The noon sākinah/tanwīn changes completely into a meem sound with nasal ghunnah."
    },
    {
        question: "Which example from the book shows Noon Saakinah changing to Meem?",
        answers: ["كَيْدَهُمْ فِي", "لَيُنْبَذَنَّ", "أَنْبِئْهُمْ", "مِنْ بَعْدِ"],
        correctIndex: 3,
        explanation: "مِنْ بَعْدِ (min baʿdi) shows noon sākinah (نْ) followed by bāʾ (ب), read as 'mimm baʿdi'."
    },
    {
        question: "Which example shows Iqlaab inside one word?",
        answers: ["مِنْ بَعْدِ", "أَنْبِئْهُمْ", "لَيُنْبَذَنَّ", "أَبْنَاؤُهُم"],
        correctIndex: 2,
        explanation: "لَيُنْبَذَنَّ (layunbadhanna) contains noon sākinah followed by bāʾ within a single word."
    },
    {
        question: "Iqlaab can happen…",
        answers: ["Only between two words", "Only at the beginning of a word", "In the middle of a word or between words", "Only with tanween"],
        correctIndex: 2,
        explanation: "Iqlaab can occur within a single word (like لَيُنْبَذَنَّ) or between two words (like مِنْ بَعْدِ)."
    },
    {
        question: "In this word: 'لَيُنْبَذَنَّ', what rule applies?",
        answers: ["Idghaam", "Ikhfaa'", "Iqlaab", "Idhaar"],
        correctIndex: 2,
        explanation: "The noon sākinah (نْ) is followed by bāʾ (ب), so Iqlaab applies - read as meem with ghunnah."
    },
    {
        question: "Which tanween example from the book shows Iqlaab?",
        answers: ["زَوْجٍ بَهِيجٍ", "سَمِيعًا بَصِيرًا", "مَلِيئًا بِالْقَارِعَةِ", "All of them"],
        correctIndex: 3,
        explanation: "All three examples show tanwīn followed by bāʾ (ب), so they all demonstrate Iqlaab."
    },
    {
        question: "When tanween meets Baa, what happens?",
        answers: ["The tanween disappears", "It changes to a meem sound with ghunnah", "It becomes silent", "It stays the same"],
        correctIndex: 1,
        explanation: "Tanwīn followed by bāʾ transforms into a meem sound with 2 counts of ghunnah."
    },
    {
        question: "In the Qur'an, where is the small meem placed in Iqlaab?",
        answers: ["Above or below the Noon Saakinah or tanween", "After the Baa", "Before the Baa", "On the Alif"],
        correctIndex: 0,
        explanation: "The small meem symbol is written above or below the noon sākinah/tanwīn to indicate Iqlaab."
    },
    {
        question: "Identify the rule in: 'مُؤْذِنٌ بَهِيجٍ'",
        answers: ["Idhaar", "Iqlaab", "Ikhfaa", "Idghaam"],
        correctIndex: 1,
        explanation: "The tanwīn (ٌ) in مُؤْذِنٌ is followed by bāʾ in بَهِيجٍ, creating Iqlaab."
    },
    {
        question: "What sound should the student apply during Iqlaab?",
        answers: ["Clear sound", "Heavy sound", "Ghunnah for 2 counts", "Whisper sound"],
        correctIndex: 2,
        explanation: "Iqlaab requires a meem sound with nasal ghunnah held for exactly 2 counts."
    },
    {
        question: "Which one of these is NOT an Iqlaab example?",
        answers: ["مِنْ قَبْلِهِ", "سَمِيعًا بَصِيرًا", "كَمْ بَعَثْنَا", "أَلِيمٌ بِمَا"],
        correctIndex: 2,
        explanation: "كَمْ بَعَثْنَا has no noon sākinah or tanwīn meeting bāʾ, so it's not an Iqlaab example."
    },
    {
        question: "In the phrase 'فَأَنْبِئْهُمْ' the Noon Saakinah becomes…",
        answers: ["Silent", "Meem with ghunnah", "Madd", "Heavy letter"],
        correctIndex: 1,
        explanation: "The noon sākinah (نْ) is followed by bāʾ (ب), so it changes to meem with ghunnah."
    },
    {
        question: "Which practice line (Unit 3.1) clearly shows Iqlaab?",
        answers: ["أَنْبِتْ", "فَأَنْبِتَتْ", "مِنْ بَعْضِ", "مِنْ بَعْدِ"],
        correctIndex: 3,
        explanation: "مِنْ بَعْدِ shows noon sākinah (نْ) directly followed by bāʾ (ب), demonstrating Iqlaab clearly."
    },
    {
        question: "What must you always do when reading Iqlaab?",
        answers: ["Stretch the sound", "Hide the sound", "Merge with the next letter", "Change to meem + apply ghunnah"],
        correctIndex: 3,
        explanation: "Always change the noon sākinah/tanwīn to a meem sound and apply 2 counts of ghunnah."
    },
    {
        question: "Which example has tanween followed by Baa?",
        answers: ["سَوَاءً بَيْنَنَا", "عَادًا بِالْقَارِعَةِ", "كَلَّا سَيَعْلَمُونَ", "أَوْدِيَةً بِقَدَرِهَا"],
        correctIndex: 0,
        explanation: "سَوَاءً بَيْنَنَا has tanwīn (ً) followed immediately by bāʾ (ب), showing Iqlaab."
    },
    {
        question: "Iqlaab belongs to which tajweed family?",
        answers: ["Rules of Meem Saakinah", "Rules of Noon Saakinah & Tanween", "Madd rules", "Qalqalah rules"],
        correctIndex: 1,
        explanation: "Iqlaab is one of the four main rules governing noon sākinah and tanwīn."
    },
    {
        question: "What letter must come after Noon Saakinah to trigger Iqlaab?",
        answers: ["Meem", "Baa", "Laam", "Jeem"],
        correctIndex: 1,
        explanation: "Only the letter bāʾ (ب) triggers Iqlaab when it follows noon sākinah or tanwīn."
    },
    {
        question: "In 'يَمُدُّهُ مِنْ بَعْدِهِ', where is the Iqlaab?",
        answers: ["يمده", "من", "بعده", "من → بعده transition"],
        correctIndex: 3,
        explanation: "Iqlaab occurs at the transition between مِنْ and بَعْدِهِ, where noon sākinah meets bāʾ."
    },
    {
        question: "When reading the small meem symbol, the student should…",
        answers: ["Skip the letter", "Read it quickly", "Hold ghunnah for 2 counts", "Stop the recitation"],
        correctIndex: 2,
        explanation: "The small meem symbol indicates to pronounce a meem sound with ghunnah for exactly 2 counts."
    }
];

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const backToUnit = document.getElementById('backToUnit');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const currentQ = document.getElementById('currentQ');
const totalQ = document.getElementById('totalQ');
const progressFill = document.getElementById('progressFill');
const scorePercentage = document.getElementById('scorePercentage');
const scoreText = document.getElementById('scoreText');
const resultMessage = document.getElementById('resultMessage');
const resultsIcon = document.getElementById('resultsIcon');
const retryBtn = document.getElementById('retryBtn');
const backToUnitsBtn = document.getElementById('backToUnitsBtn');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
backToUnit.addEventListener('click', () => window.location.href = 'quran-unit3.html');
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', startQuiz);
backToUnitsBtn.addEventListener('click', () => window.location.href = 'quran-unit3.html');

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resultsScreen.classList.remove('active');
    totalQ.textContent = questions.length;
    showQuestion();
}

// Show Question
function showQuestion() {
    nextBtn.style.display = 'none';
    selectedAnswer = null;
    
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // Update progress
    currentQ.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Shuffle answers
    const shuffledAnswers = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledArray = shuffleArray(shuffledAnswers);
    
    // Display answers
    answersContainer.innerHTML = '';
    shuffledArray.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(index, answer.originalIndex, question.correctIndex));
        answersContainer.appendChild(button);
    });
}

// Select Answer
function selectAnswer(buttonIndex, originalIndex, correctIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = originalIndex;
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    
    // Mark correct and incorrect answers
    buttons.forEach((button, index) => {
        button.disabled = true;
        const answerOriginalIndex = questions[currentQuestionIndex].answers.indexOf(button.textContent);
        
        if (answerOriginalIndex === correctIndex) {
            button.classList.add('correct');
        } else if (index === buttonIndex) {
            button.classList.add('wrong');
        }
    });
    
    // Update score
    if (originalIndex === correctIndex) {
        score++;
    }
    
    // Show explanation
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    explanation.textContent = questions[currentQuestionIndex].explanation;
    answersContainer.appendChild(explanation);
    
    // Show next button
    nextBtn.style.display = 'inline-block';
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
    scorePercentage.textContent = percentage + '%';
    scoreText.textContent = `${score}/${questions.length}`;
    
    // Set message and icon based on score
    if (percentage >= 90) {
        resultMessage.textContent = "Outstanding! You've mastered Iqlaab! 🌟";
        resultsIcon.textContent = "🎉";
    } else if (percentage >= 70) {
        resultMessage.textContent = "Great job! You have a solid understanding of Iqlaab!";
        resultsIcon.textContent = "👏";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good effort! Review the Iqlaab rules and try again.";
        resultsIcon.textContent = "📚";
    } else {
        resultMessage.textContent = "Keep practicing! Review the welcome screen and try again.";
        resultsIcon.textContent = "💪";
    }
}
