/**
 * Shared Quiz Functions Module
 * Common functions used across all Year 2 Kahoot-style quizzes
 * Import this file in your quiz HTML before the specific quiz script
 */

// Shared Quiz State
const QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    stars: 0,
    wrongAnswers: [],
    isReviewMode: false,
    reviewQuestions: []
};

/**
 * Fisher-Yates shuffle algorithm
 * Randomly shuffles an array in place
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Shuffle answers for a question with Kahoot-style buttons
 * Preserves the original correct answer index
 */
function shuffleAnswers(answers, correctIndex) {
    const answersWithIndex = answers.map((answer, index) => ({
        text: answer,
        originalIndex: index,
        isCorrect: index === correctIndex
    }));
    
    shuffleArray(answersWithIndex);
    return answersWithIndex;
}

/**
 * Get Kahoot color for button based on index
 */
function getKahootColor(index) {
    const colors = ['red', 'blue', 'yellow', 'green'];
    return colors[index % 4];
}

/**
 * Get Kahoot shape for button based on color
 */
function getKahootShape(color) {
    const shapes = {
        red: '🔺',
        blue: '💠',
        yellow: '⭐',
        green: '🔷'
    };
    return shapes[color];
}

/**
 * Create Kahoot-style answer buttons
 * @param {Array} answers - Array of answer objects with text, originalIndex, isCorrect
 * @param {Function} onAnswerClick - Callback when answer is clicked
 * @returns {DocumentFragment} Fragment containing all answer buttons
 */
function createKahootButtons(answers, onAnswerClick) {
    const fragment = document.createDocumentFragment();
    
    answers.forEach((answer, index) => {
        const color = getKahootColor(index);
        const shape = getKahootShape(color);
        
        const btn = document.createElement('button');
        btn.className = `answer-btn ${color}`;
        btn.onclick = () => onAnswerClick(answer, btn);
        
        const content = document.createElement('div');
        content.className = 'answer-btn-content';
        
        const shapeDiv = document.createElement('div');
        shapeDiv.className = 'answer-shape';
        shapeDiv.textContent = shape;
        
        const textDiv = document.createElement('div');
        textDiv.className = 'answer-text';
        textDiv.textContent = answer.text;
        
        content.appendChild(shapeDiv);
        content.appendChild(textDiv);
        btn.appendChild(content);
        fragment.appendChild(btn);
    });
    
    return fragment;
}

/**
 * Show feedback with animation
 * @param {boolean} isCorrect - Whether answer was correct
 * @param {string} explanation - Explanation text
 * @param {HTMLElement} feedbackContainer - Feedback container element
 * @param {HTMLElement} nextBtn - Next button element
 */
function showFeedback(isCorrect, explanation, feedbackContainer, nextBtn) {
    const feedbackEmoji = feedbackContainer.querySelector('#feedbackEmoji');
    const feedbackText = feedbackContainer.querySelector('#feedbackText');
    const explanationDiv = feedbackContainer.querySelector('#explanation');
    
    if (isCorrect) {
        feedbackEmoji.textContent = '🎉';
        feedbackText.textContent = 'Correct! MashaAllah!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackEmoji.textContent = '😅';
        feedbackText.textContent = 'Not quite! Keep learning!';
        feedbackText.className = 'feedback-text wrong';
    }
    
    explanationDiv.textContent = explanation;
    feedbackContainer.style.display = 'block';
    nextBtn.style.display = 'inline-block'; // Centered display
}

/**
 * Hide feedback
 */
function hideFeedback(feedbackContainer, nextBtn) {
    feedbackContainer.style.display = 'none';
    nextBtn.style.display = 'none';
}

/**
 * Update progress bar
 */
function updateProgress(current, total, progressBar, currentQuestionSpan, totalQuestionSpan) {
    const percentage = (current / total) * 100;
    progressBar.style.width = percentage + '%';
    currentQuestionSpan.textContent = current;
    totalQuestionSpan.textContent = total;
}

/**
 * Update star display
 */
function updateStars(stars, starsElement) {
    starsElement.textContent = `⭐ ${stars}`;
}

/**
 * Disable all answer buttons
 */
function disableAllButtons(container) {
    const buttons = container.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);
}

/**
 * Mark button as correct or wrong with animation
 */
function markButton(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}

/**
 * Calculate results message based on score
 */
function getResultsMessage(percentage) {
    if (percentage === 100) {
        return "🌟 Perfect Score! Amazing work! 🌟";
    } else if (percentage >= 80) {
        return "🎉 Excellent! You're doing great!";
    } else if (percentage >= 60) {
        return "👏 Good job! Keep practicing!";
    } else if (percentage >= 40) {
        return "💪 Nice try! Keep learning!";
    } else {
        return "📚 Keep studying! You'll get better!";
    }
}

/**
 * Show results screen
 */
function showResults(correct, total, stars, resultsScreen, quizScreen) {
    const percentage = (correct / total) * 100;
    
    document.getElementById('totalStars').textContent = stars;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('incorrectCount').textContent = total - correct;
    document.getElementById('resultMessage').textContent = getResultsMessage(percentage);
    
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

/**
 * Start review mode for wrong answers
 */
function startReviewMode(wrongAnswers) {
    QuizState.isReviewMode = true;
    QuizState.reviewQuestions = [...wrongAnswers]; // Correct way to copy
    QuizState.currentQuestionIndex = 0;
    return QuizState.reviewQuestions;
}

/**
 * Navigate to lessons page
 */
function goToLessons() {
    window.location.href = 'year2-lessons.html';
}

/**
 * Screen transition helper
 */
function transitionScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    toScreen.classList.add('active');
}

// Export for ES6 modules (optional, for modern browsers)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QuizState,
        shuffleArray,
        shuffleAnswers,
        getKahootColor,
        getKahootShape,
        createKahootButtons,
        showFeedback,
        hideFeedback,
        updateProgress,
        updateStars,
        disableAllButtons,
        markButton,
        getResultsMessage,
        showResults,
        startReviewMode,
        goToLessons,
        transitionScreen
    };
}
