// Year 2: Arabic Writing - Group 4
// Practice writing Arabic letters in different forms

// Writing data for Group 4
const arabicWritingGroup4Data = [
  // Kāf (ك) - All four forms
  { id: "kaf-isolated", englishPrompt: "Write the letter kāf in isolated form", expectedAnswer: "ك" },
  { id: "kaf-beginning", englishPrompt: "Write the letter kāf at the beginning of a word", expectedAnswer: "كـ" },
  { id: "kaf-middle", englishPrompt: "Write the letter kāf in the middle of a word", expectedAnswer: "ـكـ" },
  { id: "kaf-end", englishPrompt: "Write the letter kāf at the end of a word", expectedAnswer: "ـك" },
  
  // Lām (ل) - All four forms
  { id: "lam-isolated", englishPrompt: "Write the letter lām in isolated form", expectedAnswer: "ل" },
  { id: "lam-beginning", englishPrompt: "Write the letter lām at the beginning of a word", expectedAnswer: "لـ" },
  { id: "lam-middle", englishPrompt: "Write the letter lām in the middle of a word", expectedAnswer: "ـلـ" },
  { id: "lam-end", englishPrompt: "Write the letter lām at the end of a word", expectedAnswer: "ـل" },
  
  // Mīm (م) - All four forms
  { id: "meem-isolated", englishPrompt: "Write the letter mīm in isolated form", expectedAnswer: "م" },
  { id: "meem-beginning", englishPrompt: "Write the letter mīm at the beginning of a word", expectedAnswer: "مـ" },
  { id: "meem-middle", englishPrompt: "Write the letter mīm in the middle of a word", expectedAnswer: "ـمـ" },
  { id: "meem-end", englishPrompt: "Write the letter mīm at the end of a word", expectedAnswer: "ـم" },
  
  // Nūn (ن) - All four forms
  { id: "noon-isolated", englishPrompt: "Write the letter nūn in isolated form", expectedAnswer: "ن" },
  { id: "noon-beginning", englishPrompt: "Write the letter nūn at the beginning of a word", expectedAnswer: "نـ" },
  { id: "noon-middle", englishPrompt: "Write the letter nūn in the middle of a word", expectedAnswer: "ـنـ" },
  { id: "noon-end", englishPrompt: "Write the letter nūn at the end of a word", expectedAnswer: "ـن" },
  
  // Hā' (ه) - All four forms
  { id: "haa-isolated", englishPrompt: "Write the letter hā' in isolated form", expectedAnswer: "ه" },
  { id: "haa-beginning", englishPrompt: "Write the letter hā' at the beginning of a word", expectedAnswer: "هـ" },
  { id: "haa-middle", englishPrompt: "Write the letter hā' in the middle of a word", expectedAnswer: "ـهـ" },
  { id: "haa-end", englishPrompt: "Write the letter hā' at the end of a word", expectedAnswer: "ـه" },
  
  // Wāw (و) - Only isolated and end forms (non-connector)
  { id: "waw-isolated", englishPrompt: "Write the letter wāw in isolated form", expectedAnswer: "و" },
  { id: "waw-end", englishPrompt: "Write the letter wāw at the end of a word", expectedAnswer: "ـو" },
  
  // Yā' (ي) - All four forms
  { id: "yaa-isolated", englishPrompt: "Write the letter yā' in isolated form", expectedAnswer: "ي" },
  { id: "yaa-beginning", englishPrompt: "Write the letter yā' at the beginning of a word", expectedAnswer: "يـ" },
  { id: "yaa-middle", englishPrompt: "Write the letter yā' in the middle of a word", expectedAnswer: "ـيـ" }
];

// Common wrong answers for letter forms
const commonWrongForms = {
    isolated: ['ـ', 'ــ', 'ـــ', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'],
    beginning: ['ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي', 'ـكـ', 'ـلـ', 'ـمـ'],
    middle: ['كـ', 'لـ', 'مـ', 'نـ', 'هـ', 'يـ', 'ـك', 'ـل', 'ـم'],
    end: ['ـكـ', 'ـلـ', 'ـمـ', 'ـنـ', 'ـهـ', 'ـيـ', 'ك', 'ل', 'م']
};

// Convert writing data to quiz questions
const questions = arabicWritingGroup4Data.map((item, index) => {
    const form = item.id.includes('beginning') ? 'beginning' :
                 item.id.includes('middle') ? 'middle' :
                 item.id.includes('end') ? 'end' : 'isolated';
    
    // Get wrong answers that don't match the correct answer
    let wrongAnswers = commonWrongForms[form].filter(w => w !== item.expectedAnswer);
    
    // Add some variations from all Group 4 letters
    const allLetterForms = [
        'ك', 'كـ', 'ـكـ', 'ـك',
        'ل', 'لـ', 'ـلـ', 'ـل',
        'م', 'مـ', 'ـمـ', 'ـم',
        'ن', 'نـ', 'ـنـ', 'ـن',
        'ه', 'هـ', 'ـهـ', 'ـه',
        'و', 'ـو',
        'ي', 'يـ', 'ـيـ', 'ـي'
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
