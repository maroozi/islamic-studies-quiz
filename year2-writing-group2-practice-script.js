// Year 2 - Arabic Letter Writing Practice (Group 2)
// Letters: د ذ ر ز س ش ص

// Writing data
const writingData = [
    // Dāl (د) - Only isolated and end forms (non-connector)
    { id: "dal-isolated", prompt: "Write the letter Dāl (د) in isolated form", expectedAnswer: "د", explanation: "Dāl is a non-connecting letter - only has isolated and end forms" },
    { id: "dal-end", prompt: "Write the letter Dāl (د) at the end of a word", expectedAnswer: "ـد", explanation: "This is Dāl at the end - looks the same as isolated but connected from the right" },
    
    // Dhāl (ذ) - Only isolated and end forms (non-connector)
    { id: "dhal-isolated", prompt: "Write the letter Dhāl (ذ) in isolated form", expectedAnswer: "ذ", explanation: "Dhāl is like Dāl but with 1 dot above" },
    { id: "dhal-end", prompt: "Write the letter Dhāl (ذ) at the end of a word", expectedAnswer: "ـذ", explanation: "This is Dhāl at the end - like Dāl with 1 dot above" },
    
    // Rā' (ر) - Only isolated and end forms (non-connector)
    { id: "ra-isolated", prompt: "Write the letter Rā' (ر) in isolated form", expectedAnswer: "ر", explanation: "Rā' is a non-connecting letter with a small curved tail" },
    { id: "ra-end", prompt: "Write the letter Rā' (ر) at the end of a word", expectedAnswer: "ـر", explanation: "This is Rā' at the end - looks like isolated form but connected" },
    
    // Zāy (ز) - Only isolated and end forms (non-connector)
    { id: "zay-isolated", prompt: "Write the letter Zāy (ز) in isolated form", expectedAnswer: "ز", explanation: "Zāy is like Rā' but with 1 dot above" },
    { id: "zay-end", prompt: "Write the letter Zāy (ز) at the end of a word", expectedAnswer: "ـز", explanation: "This is Zāy at the end - like Rā' with 1 dot above" },
    
    // Sīn (س) - All four forms
    { id: "seen-isolated", prompt: "Write the letter Sīn (س) in isolated form", expectedAnswer: "س", explanation: "Sīn has a wavy shape with 3 teeth" },
    { id: "seen-beginning", prompt: "Write the letter Sīn (س) at the beginning of a word", expectedAnswer: "سـ", explanation: "This is Sīn at the beginning - wavy with 3 teeth" },
    { id: "seen-middle", prompt: "Write the letter Sīn (س) in the middle of a word", expectedAnswer: "ـسـ", explanation: "This is Sīn in the middle - simplified wavy form" },
    { id: "seen-end", prompt: "Write the letter Sīn (س) at the end of a word", expectedAnswer: "ـس", explanation: "This is Sīn at the end - full wavy shape with 3 teeth" },
    
    // Shīn (ش) - All four forms
    { id: "sheen-isolated", prompt: "Write the letter Shīn (ش) in isolated form", expectedAnswer: "ش", explanation: "Shīn is like Sīn but with 3 dots above" },
    { id: "sheen-beginning", prompt: "Write the letter Shīn (ش) at the beginning of a word", expectedAnswer: "شـ", explanation: "This is Shīn at the beginning - like Sīn with 3 dots above" },
    { id: "sheen-middle", prompt: "Write the letter Shīn (ش) in the middle of a word", expectedAnswer: "ـشـ", explanation: "This is Shīn in the middle - simplified form with 3 dots above" },
    { id: "sheen-end", prompt: "Write the letter Shīn (ش) at the end of a word", expectedAnswer: "ـش", explanation: "This is Shīn at the end - like Sīn with 3 dots above" }
];

// Global variables
let currentIndex = 0;
let score = 0;
const totalQuestions = writingData.length;

// Canvas variables
const drawingCanvas = document.getElementById('drawingCanvas');
const clearCanvasBtn = document.getElementById('clearCanvas');
const submitDrawingBtn = document.getElementById('submitDrawing');
const revealAnswerBtn = document.getElementById('revealAnswer');
const answerPreview = document.getElementById('answerPreview');
const correctAnswerPreview = document.getElementById('correctAnswerPreview');
const brushSizeSlider = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');

let canvas, ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentBrushSize = 8;
let hasDrawn = false;

// Initialize canvas
function initializeCanvas() {
    canvas = drawingCanvas;
    ctx = canvas.getContext('2d');
    
    // Set canvas size to match display size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Set drawing properties
    ctx.strokeStyle = '#000000'; // Black color for writing
    ctx.lineWidth = currentBrushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Draw writing line (horizontal guide)
    drawWritingLine();
    
    // Use pointer events for universal input support (mouse, touch, pen)
    if (window.PointerEvent) {
        canvas.addEventListener('pointerdown', startDrawing);
        canvas.addEventListener('pointermove', draw);
        canvas.addEventListener('pointerup', stopDrawing);
        canvas.addEventListener('pointerout', stopDrawing);
        canvas.addEventListener('pointercancel', stopDrawing);
    } else {
        // Fallback to mouse and touch events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        
        // Touch events for mobile/tablet
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
    }
}

// Draw horizontal guide line
function drawWritingLine() {
    const lineY = canvas.height * 0.6; // Position line at 60% from top
    
    const savedStrokeStyle = ctx.strokeStyle;
    const savedLineWidth = ctx.lineWidth;
    
    ctx.strokeStyle = '#d0d0d0'; // Light gray
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]); // Dashed line
    
    ctx.beginPath();
    ctx.moveTo(30, lineY);
    ctx.lineTo(canvas.width - 30, lineY);
    ctx.stroke();
    
    ctx.setLineDash([]);
    ctx.strokeStyle = savedStrokeStyle;
    ctx.lineWidth = savedLineWidth;
}

// Drawing functions
function startDrawing(e) {
    e.preventDefault(); // Prevent scrolling/zooming on touch
    isDrawing = true;
    const coords = getMousePos(e);
    lastX = coords.x;
    lastY = coords.y;
    
    // Draw a dot at the start point
    ctx.beginPath();
    ctx.arc(lastX, lastY, currentBrushSize / 2, 0, Math.PI * 2);
    ctx.fill();
    
    if (!hasDrawn) {
        hasDrawn = true;
        submitDrawingBtn.disabled = false;
    }
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault(); // Prevent scrolling/zooming on touch
    
    const coords = getMousePos(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    lastX = coords.x;
    lastY = coords.y;
}

function stopDrawing(e) {
    if (e) e.preventDefault();
    isDrawing = false;
}

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    // Handle both mouse and touch/pointer events
    let clientX, clientY;
    
    if (e.touches && e.touches.length > 0) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else if (e.clientX !== undefined) {
        // Mouse or pointer event
        clientX = e.clientX;
        clientY = e.clientY;
    } else {
        return { x: 0, y: 0 };
    }
    
    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

// Touch event handlers
function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// Clear canvas
function clearDrawingCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWritingLine(); // Redraw the guide line
    hasDrawn = false;
    submitDrawingBtn.disabled = true;
}

// Update brush size
function updateBrushSize() {
    currentBrushSize = parseInt(brushSizeSlider.value);
    if (ctx) {
        ctx.lineWidth = currentBrushSize;
    }
    brushSizeValue.textContent = currentBrushSize + 'px';
}

// Reveal correct answer (preview before submit)
function revealCorrectAnswer() {
    const currentQuestion = writingData[currentIndex];
    correctAnswerPreview.textContent = currentQuestion.expectedAnswer;
    answerPreview.classList.remove('hidden');
}

// Show current question
function showQuestion() {
    const question = writingData[currentIndex];
    
    // Update prompt
    document.getElementById('promptText').textContent = question.prompt;
    
    // Update progress
    document.getElementById('progress').textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
    const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);
    document.getElementById('percent').textContent = `${percentage}%`;
    document.getElementById('progressFill').style.width = `${percentage}%`;
    
    // Reset canvas
    clearDrawingCanvas();
    
    // Hide feedback and answer preview
    document.getElementById('feedback').classList.add('hidden');
    answerPreview.classList.add('hidden');
    
    // Show reveal button
    revealAnswerBtn.style.display = 'inline-flex';
    
    // Re-enable canvas
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', handleTouchStart);
    clearCanvasBtn.disabled = false;
    
    // Update next button text
    if (currentIndex === totalQuestions - 1) {
        document.getElementById('nextText').textContent = 'See Results';
    } else {
        document.getElementById('nextText').textContent = 'Next Question';
    }
}

// Submit drawing
function submitWriting() {
    if (!hasDrawn) return;
    
    const currentQuestion = writingData[currentIndex];
    
    // Award star for completing (no auto-grading)
    score += 10;
    document.getElementById('score').textContent = score;
    
    // Hide reveal button and preview
    revealAnswerBtn.style.display = 'none';
    answerPreview.classList.add('hidden');
    
    // Show feedback
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.classList.remove('hidden');
    
    document.getElementById('feedbackEmoji').textContent = '👀';
    document.getElementById('feedbackText').textContent = 'Great effort! Compare your writing with the correct form below:';
    
    document.getElementById('correctAnswer').textContent = currentQuestion.expectedAnswer;
    
    // Disable canvas
    canvas.removeEventListener('mousedown', startDrawing);
    canvas.removeEventListener('touchstart', handleTouchStart);
    clearCanvasBtn.disabled = true;
    submitDrawingBtn.disabled = true;
    
    // Scroll to feedback
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Next question
function nextQuestion() {
    currentIndex++;
    
    if (currentIndex < totalQuestions) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    document.getElementById('writeScreen').classList.add('hidden');
    document.getElementById('writeScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.remove('hidden');
    document.getElementById('resultsScreen').classList.add('active');
    
    // Update results
    document.getElementById('finalStars').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Results message
    const resultsEmoji = document.getElementById('resultsEmoji');
    const resultsMessage = document.getElementById('resultsMessage');
    
    if (score >= totalQuestions * 8) {
        resultsEmoji.textContent = '🌟';
        resultsMessage.textContent = 'Outstanding Writing!';
    } else if (score >= totalQuestions * 6) {
        resultsEmoji.textContent = '🎉';
        resultsMessage.textContent = 'Excellent Practice!';
    } else {
        resultsEmoji.textContent = '👏';
        resultsMessage.textContent = 'Great Effort!';
    }
}

// Go back to menu
function goBackToMenu() {
    window.location.href = 'year2-arabic.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCanvas();
    
    // Brush size slider
    brushSizeSlider.addEventListener('input', updateBrushSize);
    
    // Canvas controls
    clearCanvasBtn.addEventListener('click', clearDrawingCanvas);
    submitDrawingBtn.addEventListener('click', submitWriting);
    revealAnswerBtn.addEventListener('click', revealCorrectAnswer);
    
    // Navigation
    document.getElementById('backBtn').addEventListener('click', goBackToMenu);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('backToMenuBtn').addEventListener('click', goBackToMenu);
    
    // Show first question
    showQuestion();
});
