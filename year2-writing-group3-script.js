// Year 2: Arabic Writing - Group 3
// Practice writing Arabic letters in different forms

// Writing data for Group 3
const arabicWritingGroup3Data = [
  // Ḍād (ض) - All four forms
  { id: "dad-isolated", englishPrompt: "Write the letter ḍād in isolated form", expectedAnswer: "ض" },
  { id: "dad-beginning", englishPrompt: "Write the letter ḍād at the beginning of a word", expectedAnswer: "ضـ" },
  { id: "dad-middle", englishPrompt: "Write the letter ḍād in the middle of a word", expectedAnswer: "ـضـ" },
  { id: "dad-end", englishPrompt: "Write the letter ḍād at the end of a word", expectedAnswer: "ـض" },
  
  // Ṭā' (ط) - All four forms
  { id: "taa-isolated", englishPrompt: "Write the letter ṭā' in isolated form", expectedAnswer: "ط" },
  { id: "taa-beginning", englishPrompt: "Write the letter ṭā' at the beginning of a word", expectedAnswer: "طـ" },
  { id: "taa-middle", englishPrompt: "Write the letter ṭā' in the middle of a word", expectedAnswer: "ـطـ" },
  { id: "taa-end", englishPrompt: "Write the letter ṭā' at the end of a word", expectedAnswer: "ـط" },
  
  // Ẓā' (ظ) - All four forms
  { id: "zaa-isolated", englishPrompt: "Write the letter ẓā' in isolated form", expectedAnswer: "ظ" },
  { id: "zaa-beginning", englishPrompt: "Write the letter ẓā' at the beginning of a word", expectedAnswer: "ظـ" },
  { id: "zaa-middle", englishPrompt: "Write the letter ẓā' in the middle of a word", expectedAnswer: "ـظـ" },
  { id: "zaa-end", englishPrompt: "Write the letter ẓā' at the end of a word", expectedAnswer: "ـظ" },
  
  // 'Ayn (ع) - All four forms
  { id: "ayn-isolated", englishPrompt: "Write the letter 'ayn in isolated form", expectedAnswer: "ع" },
  { id: "ayn-beginning", englishPrompt: "Write the letter 'ayn at the beginning of a word", expectedAnswer: "عـ" },
  { id: "ayn-middle", englishPrompt: "Write the letter 'ayn in the middle of a word", expectedAnswer: "ـعـ" },
  { id: "ayn-end", englishPrompt: "Write the letter 'ayn at the end of a word", expectedAnswer: "ـع" },
  
  // Ghayn (غ) - All four forms
  { id: "ghayn-isolated", englishPrompt: "Write the letter ghayn in isolated form", expectedAnswer: "غ" },
  { id: "ghayn-beginning", englishPrompt: "Write the letter ghayn at the beginning of a word", expectedAnswer: "غـ" },
  { id: "ghayn-middle", englishPrompt: "Write the letter ghayn in the middle of a word", expectedAnswer: "ـغـ" },
  { id: "ghayn-end", englishPrompt: "Write the letter ghayn at the end of a word", expectedAnswer: "ـغ" },
  
  // Fā' (ف) - All four forms
  { id: "faa-isolated", englishPrompt: "Write the letter fā' in isolated form", expectedAnswer: "ف" },
  { id: "faa-beginning", englishPrompt: "Write the letter fā' at the beginning of a word", expectedAnswer: "فـ" },
  { id: "faa-middle", englishPrompt: "Write the letter fā' in the middle of a word", expectedAnswer: "ـفـ" },
  { id: "faa-end", englishPrompt: "Write the letter fā' at the end of a word", expectedAnswer: "ـف" },
  
  // Qāf (ق) - All four forms
  { id: "qaaf-isolated", englishPrompt: "Write the letter qāf in isolated form", expectedAnswer: "ق" },
  { id: "qaaf-beginning", englishPrompt: "Write the letter qāf at the beginning of a word", expectedAnswer: "قـ" },
  { id: "qaaf-middle", englishPrompt: "Write the letter qāf in the middle of a word", expectedAnswer: "ـقـ" },
  { id: "qaaf-end", englishPrompt: "Write the letter qāf at the end of a word", expectedAnswer: "ـق" }
];

// Common wrong answers for letter forms
const commonWrongForms = {
    isolated: ['ـ', 'ــ', 'ـــ', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق'],
    beginning: ['ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ـضـ', 'ـطـ', 'ـظـ'],
    middle: ['ضـ', 'طـ', 'ظـ', 'عـ', 'غـ', 'فـ', 'قـ', 'ـض', 'ـط', 'ـظ'],
    end: ['ـضـ', 'ـطـ', 'ـظـ', 'ـعـ', 'ـغـ', 'ـفـ', 'ـقـ', 'ض', 'ط', 'ظ']
};

// Convert writing data to quiz questions
const questions = arabicWritingGroup3Data.map((item, index) => {
    const form = item.id.includes('beginning') ? 'beginning' :
                 item.id.includes('middle') ? 'middle' :
                 item.id.includes('end') ? 'end' : 'isolated';
    
    // Get wrong answers that don't match the correct answer
    let wrongAnswers = commonWrongForms[form].filter(w => w !== item.expectedAnswer);
    
    // Add some variations from all Group 3 letters
    const allLetterForms = [
        'ض', 'ضـ', 'ـضـ', 'ـض',
        'ط', 'طـ', 'ـطـ', 'ـط',
        'ظ', 'ظـ', 'ـظـ', 'ـظ',
        'ع', 'عـ', 'ـعـ', 'ـع',
        'غ', 'غـ', 'ـغـ', 'ـغ',
        'ف', 'فـ', 'ـفـ', 'ـف',
        'ق', 'قـ', 'ـقـ', 'ـق'
    ];
    wrongAnswers = wrongAnswers.concat(
        allLetterForms.filter(l => l !== item.expectedAnswer)
    );
    
    // Shuffle and pick 3 wrong answers
    wrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
    
    // Create answers array with correct answer at varied positions
    const answers = [...wrongAnswers];
    const correctIndex = index % 4; // Vary position: 0,1,2,3,0,1,2,3...
    answers.splice(correctIndex, 0, item.expectedAnswer);
    
    return {
        question: item.englishPrompt,
        answers: answers,
        correctIndex: correctIndex,
        explanation: `The correct form is: ${item.expectedAnswer}`
    };
});

// Game state variables
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Show the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update question text
    document.getElementById('question').textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('percent').textContent = Math.round(progress) + '%';
    
    // Clear and populate answers
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';
    
    const colors = ['red', 'blue', 'yellow', 'green'];
    const shapes = ['🔺', '💠', '⭐', '🔷'];
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = `answer-btn ${colors[index]}`;
        button.onclick = () => selectAnswer(index);
        button.innerHTML = `
            <span class="answer-shape">${shapes[index]}</span>
            <span class="answer-text">${answer}</span>
        `;
        answersGrid.appendChild(button);
    });
    
    // Hide feedback
    document.getElementById('feedback').classList.add('hidden');
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    // Disable all buttons
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, idx) => {
        btn.onclick = null;
        if (idx === question.correctIndex) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Update score
    if (isCorrect) {
        score += 10;
        correctCount++;
        document.getElementById('feedbackEmoji').textContent = '🎉';
        document.getElementById('feedbackText').textContent = 'Correct!';
    } else {
        document.getElementById('feedbackEmoji').textContent = '💪';
        document.getElementById('feedbackText').textContent = 'Keep practicing!';
    }
    
    document.getElementById('score').textContent = score;
    
    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    
    // Update next button text
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('nextText').textContent = 'See Results';
    }
}

// Go to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results screen
function showResults() {
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    document.getElementById('resultsScreen').classList.add('active');
    
    document.getElementById('finalStars').textContent = score;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Set results message based on performance
    const percentage = (correctCount / questions.length) * 100;
    const resultsEmoji = document.getElementById('resultsEmoji');
    const resultsMessage = document.getElementById('resultsMessage');
    
    if (percentage === 100) {
        resultsEmoji.textContent = '🌟';
        resultsMessage.textContent = 'Perfect Score!';
    } else if (percentage >= 80) {
        resultsEmoji.textContent = '🎉';
        resultsMessage.textContent = 'Excellent Work!';
    } else if (percentage >= 60) {
        resultsEmoji.textContent = '👏';
        resultsMessage.textContent = 'Good Job!';
    } else {
        resultsEmoji.textContent = '💪';
        resultsMessage.textContent = 'Keep Practicing!';
    }
}

// Navigate back to menu
function backToMenu() {
    window.location.href = 'year2-arabic.html';
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('quizScreen').classList.add('active');
    showQuestion();
});

document.getElementById('backBtn').addEventListener('click', backToMenu);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('backToMenuBtn').addEventListener('click', backToMenu);
