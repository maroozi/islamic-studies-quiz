# Year 2 Quiz Template - Complete Requirements

## Overview
This template ensures all Year 2 quizzes have consistent structure, proper tablet compatibility, and proper answer distribution.

---

## File Structure

Every Year 2 quiz requires **TWO files**:
1. `[quiz-name].html` - The HTML interface
2. `[quiz-name]-script.js` - The JavaScript logic

---

## HTML TEMPLATE STRUCTURE

### Required Head Section
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Year 2: [Subject] - [Topic]</title>
    <link rel="stylesheet" href="year2-kahoot-style.css">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Baloo+2:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Make Arabic letters bigger and more visible */
        .question-text {
            font-size: 3rem !important;
            line-height: 1.4 !important;
        }
        
        /* Make Arabic letters in topic bubbles bigger too */
        .bubble-emoji {
            font-size: 2.5rem !important;
        }
    </style>
</head>
```

### Required Body Structure

**CRITICAL:** Must have proper wrapper hierarchy for tablet compatibility

```html
<body>
    <div class="container">
        <!-- START SCREEN -->
        <div id="startScreen" class="screen active">
            <div class="start-content">
                <div class="title-section">
                    <h1 class="game-title">🎯 [Quiz Title]</h1>
                    <p class="subtitle">Year 2 – [Subject] Term 1</p>
                    <div class="fun-badge">✨ [Fun Badge Text] ✨</div>
                </div>
                
                <div class="lesson-preview">
                    <h2>Today's Topics:</h2>
                    <div class="topic-grid">
                        <!-- EXACTLY 4 topic bubbles -->
                        <div class="topic-bubble" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                            <span class="bubble-emoji">[Emoji/Text]</span>
                            <span class="bubble-text">[Label]</span>
                        </div>
                        <div class="topic-bubble" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                            <span class="bubble-emoji">[Emoji/Text]</span>
                            <span class="bubble-text">[Label]</span>
                        </div>
                        <div class="topic-bubble" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                            <span class="bubble-emoji">[Emoji/Text]</span>
                            <span class="bubble-text">[Label]</span>
                        </div>
                        <div class="topic-bubble" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                            <span class="bubble-emoji">[Emoji/Text]</span>
                            <span class="bubble-text">& More!</span>
                        </div>
                    </div>
                </div>

                <div class="game-info">
                    <div class="info-card">
                        <span class="info-emoji">📝</span>
                        <span class="info-text">[X] Questions</span>
                    </div>
                    <div class="info-card">
                        <span class="info-emoji">🎯</span>
                        <span class="info-text">Earn Stars!</span>
                    </div>
                    <div class="info-card">
                        <span class="info-emoji">[Icon]</span>
                        <span class="info-text">[Description]</span>
                    </div>
                </div>

                <button id="startBtn" class="start-button">
                    <span class="button-text">🚀 Let's Play!</span>
                </button>
                
                <button id="backBtn" class="back-button">← Back to Lessons</button>
            </div>
        </div>

        <!-- QUIZ SCREEN -->
        <div id="quizScreen" class="screen">
            <div class="quiz-header">
                <div class="progress-section">
                    <div class="question-counter">
                        <span id="currentQuestion">1</span> / <span id="totalQuestions">[X]</span>
                    </div>
                    <div class="star-display">
                        <span id="stars">⭐ 0</span>
                    </div>
                </div>
                <div class="progress-bar-container">
                    <div id="progressBar" class="progress-bar"></div>
                </div>
            </div>

            <div class="question-container">
                <div class="question-box">
                    <h2 id="questionText" class="question-text"></h2>
                </div>

                <div id="answersGrid" class="answers-grid">
                    <!-- Kahoot-style colored answer buttons will be inserted here -->
                </div>
            </div>

            <div id="feedback" class="feedback-container">
                <div class="feedback-content">
                    <span id="feedbackEmoji" class="feedback-emoji"></span>
                    <p id="feedbackText" class="feedback-text"></p>
                    <div id="explanation" class="explanation"></div>
                </div>
                <button id="nextBtn" class="next-button">Next Question →</button>
            </div>
        </div>

        <!-- RESULTS SCREEN -->
        <div id="resultsScreen" class="screen">
            <div class="results-content">
                <div class="results-header">
                    <div class="trophy-emoji">🏆</div>
                    <h1 class="results-title">Amazing Work!</h1>
                </div>

                <div class="stars-earned">
                    <div class="stars-display-big">
                        <span id="totalStars">0</span> ⭐
                    </div>
                    <p class="stars-label">Stars Earned!</p>
                </div>

                <div class="score-details">
                    <div class="score-card">
                        <div class="score-number" id="correctCount">0</div>
                        <div class="score-label">✅ Correct</div>
                    </div>
                    <div class="score-card">
                        <div class="score-number" id="incorrectCount">0</div>
                        <div class="score-label">❌ Try Again</div>
                    </div>
                </div>

                <div id="resultMessage" class="result-message"></div>

                <div class="result-actions">
                    <button id="reviewMistakesBtn" class="review-button" style="display: none;">📝 Review Mistakes</button>
                    <button id="retryBtn" class="retry-button">🔄 Play Again</button>
                    <button id="backToLessonsBtn" class="lessons-button">📚 More Lessons</button>
                </div>
            </div>
        </div>
    </div>

    <script src="[quiz-name]-script.js"></script>
</body>
</html>
```

---

## JAVASCRIPT TEMPLATE STRUCTURE

### Questions Array Format

**CRITICAL RULE:** Distribute correct answers across ALL 4 positions (indices 0, 1, 2, 3)
- **DON'T** make all answers at index 0 or 1
- **DO** vary the correctIndex throughout the quiz

```javascript
const questions = [
    {
        question: "[Question text]",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctIndex: 0,  // First answer is correct
        explanation: "[Explanation text]"
    },
    {
        question: "[Question text]",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctIndex: 2,  // Third answer is correct
        explanation: "[Explanation text]"
    },
    {
        question: "[Question text]",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctIndex: 1,  // Second answer is correct
        explanation: "[Explanation text]"
    },
    {
        question: "[Question text]",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctIndex: 3,  // Fourth answer is correct
        explanation: "[Explanation text]"
    }
    // Continue varying the correctIndex...
];
```

### Complete Script Template

```javascript
// [Quiz Name] - [Description]
const questions = [
    // Insert questions array here
];

// Game state variables
let currentQuestionIndex = 0;
let score = 0;
let stars = 0;
let wrongAnswers = [];
let isReviewMode = false;
let reviewQuestions = [];

// DOM elements - MUST USE THESE EXACT IDs
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
const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const progressBar = document.getElementById('progressBar');
const starsSpan = document.getElementById('stars');

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
    
    // Shuffle answers with originalIndex tracking
    const answersWithIndex = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);
    
    // Create answer buttons
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
        
        button.addEventListener('click', () => selectAnswer(button, answerObj.originalIndex, question));
        answersGrid.appendChild(button);
    });
    
    // Hide feedback
    feedbackContainer.style.display = 'none';
    nextBtn.disabled = true;
}

function selectAnswer(selectedButton, selectedIndex, question) {
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
    feedbackContainer.style.display = 'block';
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
        message = '🎯 PERFECT! Allāhumma Bārik! You got everything right!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You did so well! MashaAllah!';
    } else if (percentage >= 60) {
        message = '👍 Great job! Keep practicing!';
    } else if (percentage >= 40) {
        message = '😊 Good effort! Keep learning!';
    } else {
        message = '🌈 Keep trying! Practice makes perfect!';
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
    reviewQuestions = [...wrongAnswers];
    currentQuestionIndex = 0;
    score = 0;
    stars = 0;
    starsSpan.textContent = `⭐ ${stars}`;
    totalQuestionsSpan.textContent = reviewQuestions.length;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', () => {
    window.location.href = '[parent-menu].html';  // UPDATE THIS
});
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetQuiz);
reviewMistakesBtn.addEventListener('click', startReviewMode);
backToLessonsBtn.addEventListener('click', () => {
    window.location.href = '[parent-menu].html';  // UPDATE THIS
});

// Initialize on page load
initQuiz();
```

---

## CRITICAL CHECKLIST

### HTML File
- [ ] Has `<div class="container">` as main wrapper
- [ ] Start screen is `<div id="startScreen" class="screen active">`
- [ ] Start screen has `<div class="start-content">` wrapper inside it
- [ ] Topic bubbles use `<span class="bubble-emoji">` and `<span class="bubble-text">` structure
- [ ] Button IDs are `startBtn` and `backBtn` (NOT startButton/backButton)
- [ ] Quiz screen is `<div id="quizScreen" class="screen">`
- [ ] Quiz header has `progress-section` div containing question-counter and star-display
- [ ] Question counter uses `<span id="currentQuestion">` and `<span id="totalQuestions">`
- [ ] Star display uses `<span id="stars">⭐ 0</span>`
- [ ] Has `<div id="progressBar" class="progress-bar"></div>` in progress-bar-container
- [ ] Question container has question-box div wrapping the question
- [ ] Question element is `id="questionText"` with `class="question-text"` (NOT class="question")
- [ ] Feedback uses `id="feedback"` with `class="feedback-container"` wrapper
- [ ] Feedback has feedback-content div containing feedbackEmoji, feedbackText, explanation
- [ ] Next button is inside feedback-container
- [ ] Results screen is `<div id="resultsScreen" class="screen">`
- [ ] Results uses totalStars, correctCount, incorrectCount IDs
- [ ] All button IDs match script: retryBtn, reviewMistakesBtn, backToLessonsBtn
- [ ] Links to **Fredoka and Baloo 2** fonts (NOT Poppins or other fonts)
- [ ] Custom styles use `.question-text` and `.bubble-emoji` selectors
- [ ] Links to year2-kahoot-style.css

### JavaScript File  
- [ ] Questions array has varied correctIndex (0, 1, 2, 3) - NOT all 0s!
- [ ] All DOM element IDs match HTML exactly
- [ ] Has Fisher-Yates shuffle function
- [ ] Kahoot colors and shape symbols defined
- [ ] Answer shuffling with originalIndex tracking
- [ ] Review Mistakes feature implemented
- [ ] Back buttons link to correct parent page
- [ ] Stars calculated at 10 per question
- [ ] Result messages for different score percentages
- [ ] Next button uses `nextBtn.style.display = 'none'/'block'` (NOT disabled property)

### Answer Distribution Best Practice
For a 20-25 question quiz:
- ~6 questions with correctIndex: 0
- ~6 questions with correctIndex: 1  
- ~6 questions with correctIndex: 2
- ~6 questions with correctIndex: 3

**Don't make students guess that answers are always first or second!**

---

## REFERENCE FILES

**Working Example:** `year2-arabic-group1.html` and `year2-arabic-group1-script.js`

These files have the correct structure and should be used as the template for all new Year 2 quizzes.

---

## COMMON MISTAKES TO AVOID

1. ❌ Using `id="startContent"` instead of `id="startScreen"`
2. ❌ Using `id="quizContainer"` instead of `id="quizScreen"`
3. ❌ Using `id="resultsContainer"` instead of `id="resultsScreen"`
4. ❌ Using `id="question"` instead of `id="questionText"`
5. ❌ Missing `<div class="container">` wrapper
6. ❌ All correctIndex values = 0 (makes quiz too predictable!)
7. ❌ Using `startButton` instead of `startBtn`
8. ❌ Forgetting the star-display div in quiz header
9. ❌ Missing feedbackEmoji, feedbackText, explanation structure
10. ❌ Using `nextBtn.disabled = true/false` instead of `nextBtn.style.display = 'none'/'block'`
11. ❌ Using `class="question"` instead of `class="question-text"` on question element
12. ❌ Using **Poppins** font instead of **Fredoka and Baloo 2** fonts
13. ❌ Using `.question` or `.topic-bubble` CSS selectors instead of `.question-text` and `.bubble-emoji`
14. ❌ Missing `<div class="start-content">` wrapper inside start screen
15. ❌ Not using `<span class="bubble-emoji">` and `<span class="bubble-text">` in topic bubbles
16. ❌ Wrong quiz header structure - must have `progress-section` containing `currentQuestion`/`totalQuestions` spans
17. ❌ Missing `progress-bar-container` with `progressBar` div
18. ❌ Missing `question-container` and `question-box` wrappers around question
19. ❌ Feedback not wrapped in `feedback-container` with `feedback-content` div inside
20. ❌ Using simple button structure instead of Kahoot-style colored buttons with shapes
10. ❌ Using old result structure without trophy-emoji and stars-display-big

---

## TABLET COMPATIBILITY NOTES

The specific structure with `container > screen > content` hierarchy is REQUIRED for:
- Proper responsive layout on tablets
- Correct CSS inheritance from year2-kahoot-style.css
- Touch event handling
- Font scaling

**DO NOT** skip the wrapper divs - they are essential!

---

## TESTING CHECKLIST

Before marking quiz as complete:
- [ ] Loads without console errors
- [ ] Start button works
- [ ] All 4 answer buttons display with correct colors
- [ ] Answers shuffle on each question
- [ ] Correct/wrong feedback shows properly
- [ ] Stars increment on correct answers
- [ ] Progress bar animates
- [ ] Review Mistakes button appears after quiz (if mistakes made)
- [ ] Review Mistakes mode works correctly
- [ ] Results screen shows correct stats
- [ ] Retry button resets everything
- [ ] Back button navigates to correct page
- [ ] Works on tablet (check font sizes and touch targets)
- [ ] Arabic text displays at 3rem size

---

## VERSION HISTORY

- v1.0 (Nov 25, 2025) - Initial template based on year2-arabic-group1
- Includes all fixes for tablet compatibility
- Ensures proper answer distribution
