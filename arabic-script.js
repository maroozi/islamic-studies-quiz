// Arabic Word Bank - 31 Quranic Words
const arabicWordBank = [
    {
        arabic: "بِسْمِ",
        meaning: "In the name of",
        note: "First word of Surah Al-Fātiḥah.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "اللهِ",
        meaning: "Allah (God)",
        note: "The Greatest Name of Allah.",
        surah: "Throughout the Qur'an"
    },
    {
        arabic: "الرَّحْمٰنِ",
        meaning: "The Most Merciful",
        note: "One of Allah's beautiful Names.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "الرَّحِيمِ",
        meaning: "The Most Compassionate",
        note: "Allah's special mercy for believers.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "الْحَمْدُ",
        meaning: "All praise",
        note: "Surah Al-Fātiḥah begins with this.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "رَبِّ",
        meaning: "Lord, Cherisher",
        note: "Allah is Rabb of all creation.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "الْعَالَمِينَ",
        meaning: "All worlds/creation",
        note: "From Surah Al-Fātiḥah.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "يَوْمِ الدِّينِ",
        meaning: "Day of Judgement",
        note: "A pillar belief in Islam.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "نَعْبُدُ",
        meaning: "We worship",
        note: "From Fātiḥah's core verse.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "الصِّرَاط",
        meaning: "The path",
        note: "Guide us to the straight path.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "الَّذِينَ",
        meaning: "Those who",
        note: "Refers to people mentioned in the surah.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "عَلَيْهِمْ",
        meaning: "Upon them",
        note: "Follows الَّذِينَ.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "وَلَا",
        meaning: "And not",
        note: "Common connector in Arabic.",
        surah: "Throughout the Qur'an"
    },
    {
        arabic: "الضَّالِّينَ",
        meaning: "Those who went astray",
        note: "Ending of Fātiḥah.",
        surah: "Surah Al-Fātiḥah"
    },
    {
        arabic: "قُلْ",
        meaning: "Say",
        note: "Opening of many surahs (Ikhlas, Falaq, Nas).",
        surah: "Surah Al-Ikhlas, Al-Falaq, An-Nas"
    },
    {
        arabic: "النَّاسِ",
        meaning: "Mankind",
        note: "Opening of Surah An-Nās.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "مَلِكِ",
        meaning: "King",
        note: "Attribute of Allah in Surah An-Nās.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "إِلٰهِ",
        meaning: "God, Deity",
        note: "The God of mankind.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "شَرِّ",
        meaning: "Evil",
        note: "Appears in Falaq and Nas.",
        surah: "Surah Al-Falaq, An-Nās"
    },
    {
        arabic: "الْوَسْوَاسِ",
        meaning: "The whisperer (devil)",
        note: "Referring to Shaitan's whispers.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "فِي",
        meaning: "In",
        note: "One of the basic Arabic prepositions.",
        surah: "Throughout the Qur'an"
    },
    {
        arabic: "صُدُورِ",
        meaning: "Chests/hearts",
        note: "From Surah An-Nās.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "مِن",
        meaning: "From",
        note: "Very common preposition.",
        surah: "Throughout the Qur'an"
    },
    {
        arabic: "الْجِنَّةِ",
        meaning: "The jinn",
        note: "Ending of Surah An-Nās.",
        surah: "Surah An-Nās"
    },
    {
        arabic: "أَعُوذُ",
        meaning: "I seek refuge",
        note: "Opening of Surah Al-Falaq.",
        surah: "Surah Al-Falaq, An-Nās"
    },
    {
        arabic: "الْفَلَقِ",
        meaning: "Daybreak/dawn",
        note: "Name of Surah 113.",
        surah: "Surah Al-Falaq"
    },
    {
        arabic: "خَلَقَ",
        meaning: "He created",
        note: "Verb form past tense.",
        surah: "Surah Al-Falaq"
    },
    {
        arabic: "وَقَبَ",
        meaning: "Darkness as it spreads",
        note: "From Surah Al-Falaq.",
        surah: "Surah Al-Falaq"
    },
    {
        arabic: "النَّفَّاثَاتِ",
        meaning: "The blowers (in knots)",
        note: "Mentioned in Surah Al-Falaq.",
        surah: "Surah Al-Falaq"
    },
    {
        arabic: "الْحَسَدِ",
        meaning: "Envy",
        note: "Last ayah of Surah Al-Falaq.",
        surah: "Surah Al-Falaq"
    },
    {
        arabic: "حَمَدَ",
        meaning: "Praised",
        note: "Root word of Al-Hamd.",
        surah: "Related to praise"
    }
];

// Game State
let currentMode = '';
let currentWordIndex = 0;
let score = 0;
let wordsLearned = 0;
let selectedAnswer = false;

// Encouraging Messages
const correctMessages = [
    "MashaAllah! Excellent! ✨",
    "Perfect! You're amazing! 🌟",
    "Brilliant! Keep it up! 💪",
    "Wonderful! You know it! 🎉",
    "Outstanding! Great job! ⭐"
];

const wrongMessages = [
    "Keep trying! You're learning! 💪",
    "Good effort! Keep practicing! 🌟",
    "Don't worry! You'll get it! ✨",
    "Nice try! Keep going! 🎯",
    "Almost there! Keep learning! 📚"
];

// DOM Elements - Mode Screen
const modeScreen = document.getElementById('modeScreen');
const wordsLearnedDisplay = document.getElementById('wordsLearned');
const backToMainBtn = document.getElementById('backToMainBtn');

// DOM Elements - Read Mode
const readScreen = document.getElementById('readScreen');
const readBackBtn = document.getElementById('readBackBtn');
const readScore = document.getElementById('readScore');
const readProgress = document.getElementById('readProgress');
const readPercent = document.getElementById('readPercent');
const readProgressFill = document.getElementById('readProgressFill');
const arabicWord = document.getElementById('arabicWord');
const playAudio = document.getElementById('playAudio');
const canReadBtn = document.getElementById('canReadBtn');
const needHelpBtn = document.getElementById('needHelpBtn');
const readFeedback = document.getElementById('readFeedback');
const readFeedbackEmoji = document.getElementById('readFeedbackEmoji');
const readFeedbackText = document.getElementById('readFeedbackText');
const wordMeaning = document.getElementById('wordMeaning');
const wordNote = document.getElementById('wordNote');
const readNextBtn = document.getElementById('readNextBtn');
const readNextText = document.getElementById('readNextText');

// DOM Elements - Meaning Mode
const meaningScreen = document.getElementById('meaningScreen');
const meaningBackBtn = document.getElementById('meaningBackBtn');
const meaningScore = document.getElementById('meaningScore');
const meaningProgress = document.getElementById('meaningProgress');
const meaningPercent = document.getElementById('meaningPercent');
const meaningProgressFill = document.getElementById('meaningProgressFill');
const meaningArabicWord = document.getElementById('meaningArabicWord');
const meaningPlayAudio = document.getElementById('meaningPlayAudio');
const meaningAnswersContainer = document.getElementById('meaningAnswersContainer');
const meaningFeedback = document.getElementById('meaningFeedback');
const meaningFeedbackEmoji = document.getElementById('meaningFeedbackEmoji');
const meaningFeedbackText = document.getElementById('meaningFeedbackText');
const meaningExplanation = document.getElementById('meaningExplanation');
const meaningNote = document.getElementById('meaningNote');
const meaningNextBtn = document.getElementById('meaningNextBtn');
const meaningNextText = document.getElementById('meaningNextText');

// DOM Elements - Write Mode
const spellScreen = document.getElementById('spellScreen');
const spellBackBtn = document.getElementById('spellBackBtn');
const spellScore = document.getElementById('spellScore');
const spellProgress = document.getElementById('spellProgress');
const spellPercent = document.getElementById('spellPercent');
const spellProgressFill = document.getElementById('spellProgressFill');
const englishMeaning = document.getElementById('englishMeaning');
const drawingCanvas = document.getElementById('drawingCanvas');
const clearCanvas = document.getElementById('clearCanvas');
const submitDrawing = document.getElementById('submitDrawing');
const brushSize = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');
const correctArabicWord = document.getElementById('correctArabicWord');
const spellFeedback = document.getElementById('spellFeedback');
const spellFeedbackEmoji = document.getElementById('spellFeedbackEmoji');
const spellFeedbackText = document.getElementById('spellFeedbackText');
const spellExplanation = document.getElementById('spellExplanation');
const spellNote = document.getElementById('spellNote');
const spellNextBtn = document.getElementById('spellNextBtn');
const spellNextText = document.getElementById('spellNextText');

// DOM Elements - Results Screen
const resultsScreen = document.getElementById('resultsScreen');
const resultEmoji = document.getElementById('resultEmoji');
const percentageText = document.getElementById('percentageText');
const finalScore = document.getElementById('finalScore');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const progressCircle = document.getElementById('progressCircle');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const changeModeBtn = document.getElementById('changeModeBtn');

// Event Listeners
document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', function() {
        selectMode(this.dataset.mode);
    });
});

backToMainBtn.addEventListener('click', goBackToMain);
readBackBtn.addEventListener('click', backToModeSelection);
meaningBackBtn.addEventListener('click', backToModeSelection);
spellBackBtn.addEventListener('click', backToModeSelection);
canReadBtn.addEventListener('click', () => handleReadAnswer(true));
needHelpBtn.addEventListener('click', () => handleReadAnswer(false));
readNextBtn.addEventListener('click', nextWord);
meaningNextBtn.addEventListener('click', nextWord);
spellNextBtn.addEventListener('click', nextWord);
tryAgainBtn.addEventListener('click', restartMode);
changeModeBtn.addEventListener('click', backToModeSelection);
playAudio.addEventListener('click', () => playWordAudio());
meaningPlayAudio.addEventListener('click', () => playWordAudio());
clearCanvas.addEventListener('click', clearDrawingCanvas);
submitDrawing.addEventListener('click', handleSubmitDrawing);
brushSize.addEventListener('input', updateBrushSize);

// Canvas Drawing Variables
let canvas, ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentBrushSize = 8;
let hasDrawn = false;

// Initialize Canvas
function initializeCanvas() {
    canvas = drawingCanvas;
    ctx = canvas.getContext('2d');
    
    // Set canvas size to match display size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Set drawing properties first
    ctx.strokeStyle = '#000000'; // Black color for writing
    ctx.lineWidth = currentBrushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Draw writing line (horizontal line in the middle)
    drawWritingLine();
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile/tablet
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    // Prevent scrolling when touching canvas
    canvas.addEventListener('touchstart', (e) => e.preventDefault());
    canvas.addEventListener('touchmove', (e) => e.preventDefault());
}

function drawWritingLine() {
    // Draw a horizontal line in the middle of the canvas to look like writing paper
    const lineY = canvas.height * 0.6; // Position line at 60% from top
    
    // Save current context settings
    const savedStrokeStyle = ctx.strokeStyle;
    const savedLineWidth = ctx.lineWidth;
    
    ctx.strokeStyle = '#d0d0d0'; // Light gray color
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]); // Dashed line pattern
    
    ctx.beginPath();
    ctx.moveTo(30, lineY);
    ctx.lineTo(canvas.width - 30, lineY);
    ctx.stroke();
    
    // Reset line dash and restore context settings for drawing
    ctx.setLineDash([]);
    ctx.strokeStyle = savedStrokeStyle;
    ctx.lineWidth = savedLineWidth;
}

function startDrawing(e) {
    isDrawing = true;
    const coords = getMousePos(e);
    lastX = coords.x;
    lastY = coords.y;
    hasDrawn = true;
    submitDrawing.disabled = false;
}

function draw(e) {
    if (!isDrawing) return;
    
    const coords = getMousePos(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    lastX = coords.x;
    lastY = coords.y;
}

function stopDrawing() {
    isDrawing = false;
}

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function handleTouchStart(e) {
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function clearDrawingCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWritingLine(); // Redraw the writing line after clearing
    hasDrawn = false;
    submitDrawing.disabled = true;
}

function updateBrushSize() {
    currentBrushSize = parseInt(brushSize.value);
    if (ctx) {
        ctx.lineWidth = currentBrushSize;
    }
    brushSizeValue.textContent = currentBrushSize + 'px';
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Go back to main subject selection
function goBackToMain() {
    window.location.href = 'home.html';
}

// Select Mode
function selectMode(mode) {
    currentMode = mode;
    currentWordIndex = 0;
    score = 0;
    
    modeScreen.classList.remove('active');
    
    if (mode === 'read') {
        readScreen.classList.add('active');
        showReadWord();
    } else if (mode === 'meaning') {
        meaningScreen.classList.add('active');
        showMeaningWord();
    } else if (mode === 'spell') {
        spellScreen.classList.add('active');
        showSpellWord();
    }
}

// Back to mode selection
function backToModeSelection() {
    readScreen.classList.remove('active');
    meaningScreen.classList.remove('active');
    spellScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    modeScreen.classList.add('active');
    updateWordsLearned();
}

// Update words learned display
function updateWordsLearned() {
    wordsLearnedDisplay.textContent = wordsLearned;
}

// Play word audio (placeholder - implement with actual audio files)
function playWordAudio() {
    // Placeholder for audio playback
    // You can add: new Audio('path/to/audio/' + currentWord.arabic + '.mp3').play();
    console.log('Audio playback for:', arabicWordBank[currentWordIndex].arabic);
}

// ========== READ MODE ==========
function showReadWord() {
    const word = arabicWordBank[currentWordIndex];
    selectedAnswer = false;
    
    // Update progress
    readProgress.textContent = `Word ${currentWordIndex + 1} of ${arabicWordBank.length}`;
    readScore.textContent = score;
    const progress = ((currentWordIndex + 1) / arabicWordBank.length) * 100;
    readProgressFill.style.width = progress + '%';
    readPercent.textContent = Math.round(progress) + '%';
    
    // Display Arabic word
    arabicWord.textContent = word.arabic;
    arabicWord.style.animation = 'none';
    setTimeout(() => {
        arabicWord.style.animation = 'wordPop 0.6s ease-out';
    }, 10);
    
    // Reset UI
    readFeedback.classList.add('hidden');
    canReadBtn.disabled = false;
    needHelpBtn.disabled = false;
    
    // Update next button text
    if (currentWordIndex === arabicWordBank.length - 1) {
        readNextText.textContent = 'See Results';
    } else {
        readNextText.textContent = 'Next Word';
    }
}

function handleReadAnswer(canRead) {
    if (selectedAnswer) return;
    selectedAnswer = true;
    
    const word = arabicWordBank[currentWordIndex];
    
    // Disable buttons
    canReadBtn.disabled = true;
    needHelpBtn.disabled = true;
    
    if (canRead) {
        readFeedback.classList.add('correct');
        readFeedback.classList.remove('wrong');
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        readFeedbackText.textContent = randomMessage;
        readFeedbackEmoji.textContent = '🎉';
        score++;
        readScore.textContent = score;
        
        // Animate score
        readScore.style.transform = 'scale(1.3)';
        setTimeout(() => {
            readScore.style.transform = 'scale(1)';
        }, 300);
    } else {
        readFeedback.classList.add('wrong');
        readFeedback.classList.remove('correct');
        const randomMessage = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        readFeedbackText.textContent = randomMessage;
        readFeedbackEmoji.textContent = '💪';
    }
    
    // Show explanation
    wordMeaning.textContent = word.meaning;
    wordNote.textContent = word.note + ' (Found in ' + word.surah + ')';
    
    readFeedback.classList.remove('hidden');
}

// ========== MEANING MODE ==========
function showMeaningWord() {
    const word = arabicWordBank[currentWordIndex];
    selectedAnswer = false;
    
    // Update progress
    meaningProgress.textContent = `Word ${currentWordIndex + 1} of ${arabicWordBank.length}`;
    meaningScore.textContent = score;
    const progress = ((currentWordIndex + 1) / arabicWordBank.length) * 100;
    meaningProgressFill.style.width = progress + '%';
    meaningPercent.textContent = Math.round(progress) + '%';
    
    // Display Arabic word
    meaningArabicWord.textContent = word.arabic;
    meaningArabicWord.style.animation = 'none';
    setTimeout(() => {
        meaningArabicWord.style.animation = 'wordPop 0.6s ease-out';
    }, 10);
    
    // Reset UI
    meaningFeedback.classList.add('hidden');
    meaningAnswersContainer.innerHTML = '';
    
    // Update next button text
    if (currentWordIndex === arabicWordBank.length - 1) {
        meaningNextText.textContent = 'See Results';
    } else {
        meaningNextText.textContent = 'Next Word';
    }
    
    // Create answer options - 1 correct + 3 wrong
    const correctMeaning = word.meaning;
    const wrongMeanings = arabicWordBank
        .filter((w, i) => i !== currentWordIndex && w.meaning !== correctMeaning)
        .map(w => w.meaning);
    
    // Shuffle and pick 3 wrong answers
    const shuffledWrong = shuffleArray(wrongMeanings);
    const selectedWrong = shuffledWrong.slice(0, 3);
    
    // Combine and shuffle all answers
    const allAnswers = [
        { text: correctMeaning, correct: true },
        { text: selectedWrong[0], correct: false },
        { text: selectedWrong[1], correct: false },
        { text: selectedWrong[2], correct: false }
    ];
    const shuffledAnswers = shuffleArray(allAnswers);
    
    // Create buttons
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer.text;
        button.style.opacity = '0';
        button.style.animation = `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`;
        button.addEventListener('click', () => selectMeaningAnswer(answer, button, shuffledAnswers));
        meaningAnswersContainer.appendChild(button);
    });
}

function selectMeaningAnswer(answer, button, shuffledAnswers) {
    if (selectedAnswer) return;
    selectedAnswer = true;
    
    const word = arabicWordBank[currentWordIndex];
    
    // Disable all buttons
    const allButtons = meaningAnswersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (answer.correct) {
        button.classList.add('correct');
        meaningFeedback.classList.add('correct');
        meaningFeedback.classList.remove('wrong');
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        meaningFeedbackText.textContent = randomMessage;
        meaningFeedbackEmoji.textContent = '🎉';
        score++;
        meaningScore.textContent = score;
        
        // Animate score
        meaningScore.style.transform = 'scale(1.3)';
        setTimeout(() => {
            meaningScore.style.transform = 'scale(1)';
        }, 300);
    } else {
        button.classList.add('wrong');
        meaningFeedback.classList.add('wrong');
        meaningFeedback.classList.remove('correct');
        const randomMessage = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        meaningFeedbackText.textContent = randomMessage;
        meaningFeedbackEmoji.textContent = '💪';
        
        // Highlight correct answer
        allButtons.forEach((btn, index) => {
            if (shuffledAnswers[index].correct) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Show explanation
    meaningExplanation.textContent = `"${word.arabic}" means "${word.meaning}"`;
    meaningNote.textContent = word.note + ' (Found in ' + word.surah + ')';
    
    meaningFeedback.classList.remove('hidden');
}

// ========== WRITE MODE (Canvas Drawing) ==========
function showSpellWord() {
    const word = arabicWordBank[currentWordIndex];
    selectedAnswer = false;
    
    // Initialize canvas if not already done
    if (!ctx) {
        initializeCanvas();
    } else {
        // Reset drawing properties to ensure consistency
        ctx.strokeStyle = '#000000'; // Black color
        ctx.lineWidth = currentBrushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }
    
    // Update progress
    spellProgress.textContent = `Word ${currentWordIndex + 1} of ${arabicWordBank.length}`;
    spellScore.textContent = score;
    const progress = ((currentWordIndex + 1) / arabicWordBank.length) * 100;
    spellProgressFill.style.width = progress + '%';
    spellPercent.textContent = Math.round(progress) + '%';
    
    // Display English meaning
    englishMeaning.textContent = word.meaning;
    englishMeaning.style.animation = 'none';
    setTimeout(() => {
        englishMeaning.style.animation = 'wordPop 0.6s ease-out';
    }, 10);
    
    // Reset UI
    spellFeedback.classList.add('hidden');
    clearDrawingCanvas();
    submitDrawing.disabled = true;
    
    // Update next button text
    if (currentWordIndex === arabicWordBank.length - 1) {
        spellNextText.textContent = 'See Results';
    } else {
        spellNextText.textContent = 'Next Word';
    }
}

function handleSubmitDrawing() {
    if (!hasDrawn || selectedAnswer) return;
    selectedAnswer = true;
    
    const word = arabicWordBank[currentWordIndex];
    
    // Disable drawing
    submitDrawing.disabled = true;
    clearCanvas.disabled = true;
    
    // Since we can't programmatically verify handwriting, we give encouragement
    // and show the correct answer for learning
    spellFeedback.classList.add('correct');
    spellFeedback.classList.remove('wrong');
    spellFeedbackText.textContent = "Great effort! Let's check the correct word! 🌟";
    spellFeedbackEmoji.textContent = '✨';
    
    // Award points for trying
    score++;
    spellScore.textContent = score;
    
    // Animate score
    spellScore.style.transform = 'scale(1.3)';
    setTimeout(() => {
        spellScore.style.transform = 'scale(1)';
    }, 300);
    
    // Show correct answer
    correctArabicWord.textContent = word.arabic;
    
    // Show explanation
    spellExplanation.textContent = `"${word.arabic}" means "${word.meaning}"`;
    spellNote.textContent = word.note + ' (Found in ' + word.surah + ')';
    
    spellFeedback.classList.remove('hidden');
}

// Next Word
function nextWord() {
    currentWordIndex++;
    
    // Re-enable canvas controls for write mode
    if (currentMode === 'spell') {
        clearCanvas.disabled = false;
    }
    
    if (currentWordIndex < arabicWordBank.length) {
        if (currentMode === 'read') {
            showReadWord();
        } else if (currentMode === 'meaning') {
            showMeaningWord();
        } else if (currentMode === 'spell') {
            showSpellWord();
        }
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    readScreen.classList.remove('active');
    meaningScreen.classList.remove('active');
    spellScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const percentage = Math.round((score / arabicWordBank.length) * 100);
    const wrong = arabicWordBank.length - score;
    
    // Update words learned
    if (percentage >= 60) {
        wordsLearned = Math.max(wordsLearned, currentWordIndex + 1);
    }
    
    // Update scores
    finalScore.textContent = `${score}/${arabicWordBank.length}`;
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
        resultMessage.textContent = "You're an Arabic superstar! Outstanding work!";
        resultEmoji.textContent = '🏆';
    } else if (percentage >= 85) {
        resultTitle.textContent = "Excellent! بارك الله فيك 🎉";
        resultMessage.textContent = "Amazing knowledge! Keep up the great work!";
        resultEmoji.textContent = '⭐';
    } else if (percentage >= 75) {
        resultTitle.textContent = "Great Job! أحسنت 💪";
        resultMessage.textContent = "You're doing wonderful! Keep learning!";
        resultEmoji.textContent = '🌟';
    } else if (percentage >= 60) {
        resultTitle.textContent = "Good Work! جيد 👍";
        resultMessage.textContent = "You're making progress! Keep practicing!";
        resultEmoji.textContent = '📚';
    } else if (percentage >= 40) {
        resultTitle.textContent = "Keep Trying! تابع 💫";
        resultMessage.textContent = "Practice more and you'll improve!";
        resultEmoji.textContent = '✨';
    } else {
        resultTitle.textContent = "Keep Learning! استمر 🌙";
        resultMessage.textContent = "Don't give up! Practice makes perfect!";
        resultEmoji.textContent = '💪';
    }
}

// Restart Mode
function restartMode() {
    currentWordIndex = 0;
    score = 0;
    resultsScreen.classList.remove('active');
    
    if (currentMode === 'read') {
        readScreen.classList.add('active');
        showReadWord();
    } else if (currentMode === 'meaning') {
        meaningScreen.classList.add('active');
        showMeaningWord();
    } else if (currentMode === 'spell') {
        spellScreen.classList.add('active');
        showSpellWord();
    }
}

// Initialize
updateWordsLearned();
