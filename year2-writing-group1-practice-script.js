// Year 2 - Arabic Letter Writing Practice (Group 1)
// Letters: أ ب ت ث ج ح خ

// Writing data
const writingData = [
    // Alif (أ) - Only isolated form
    { id: "alif-isolated", prompt: "Write the letter Alif (أ) in isolated form", expectedAnswer: "أ", explanation: "Alif is a non-connecting letter and only appears in isolated form" },
    
    // Bā' (ب) - All four forms
    { id: "ba-isolated", prompt: "Write the letter Bā' (ب) in isolated form", expectedAnswer: "ب", explanation: "This is Bā' in isolated form - not connected to any other letters" },
    { id: "ba-beginning", prompt: "Write the letter Bā' (ب) at the beginning of a word", expectedAnswer: "بـ", explanation: "This is Bā' at the beginning - connected to the letter after it" },
    { id: "ba-middle", prompt: "Write the letter Bā' (ب) in the middle of a word", expectedAnswer: "ـبـ", explanation: "This is Bā' in the middle - connected on both sides" },
    { id: "ba-end", prompt: "Write the letter Bā' (ب) at the end of a word", expectedAnswer: "ـب", explanation: "This is Bā' at the end - connected to the letter before it" },
    
    // Tā' (ت) - All four forms
    { id: "ta-isolated", prompt: "Write the letter Tā' (ت) in isolated form", expectedAnswer: "ت", explanation: "This is Tā' in isolated form - it looks like Bā' but with 2 dots above" },
    { id: "ta-beginning", prompt: "Write the letter Tā' (ت) at the beginning of a word", expectedAnswer: "تـ", explanation: "This is Tā' at the beginning - with 2 dots above" },
    { id: "ta-middle", prompt: "Write the letter Tā' (ت) in the middle of a word", expectedAnswer: "ـتـ", explanation: "This is Tā' in the middle - connected on both sides with 2 dots above" },
    { id: "ta-end", prompt: "Write the letter Tā' (ت) at the end of a word", expectedAnswer: "ـت", explanation: "This is Tā' at the end - with 2 dots above" },
    
    // Thā' (ث) - All four forms
    { id: "tha-isolated", prompt: "Write the letter Thā' (ث) in isolated form", expectedAnswer: "ث", explanation: "This is Thā' in isolated form - like Bā' but with 3 dots above" },
    { id: "tha-beginning", prompt: "Write the letter Thā' (ث) at the beginning of a word", expectedAnswer: "ثـ", explanation: "This is Thā' at the beginning - with 3 dots above" },
    { id: "tha-middle", prompt: "Write the letter Thā' (ث) in the middle of a word", expectedAnswer: "ـثـ", explanation: "This is Thā' in the middle - connected on both sides with 3 dots above" },
    { id: "tha-end", prompt: "Write the letter Thā' (ث) at the end of a word", expectedAnswer: "ـث", explanation: "This is Thā' at the end - with 3 dots above" },
    
    // Jīm (ج) - All four forms
    { id: "jeem-isolated", prompt: "Write the letter Jīm (ج) in isolated form", expectedAnswer: "ج", explanation: "This is Jīm in isolated form - looks like a small bowl with 1 dot in the center" },
    { id: "jeem-beginning", prompt: "Write the letter Jīm (ج) at the beginning of a word", expectedAnswer: "جـ", explanation: "This is Jīm at the beginning - flat on top with a dot" },
    { id: "jeem-middle", prompt: "Write the letter Jīm (ج) in the middle of a word", expectedAnswer: "ـجـ", explanation: "This is Jīm in the middle - flat shape with a dot in the center" },
    { id: "jeem-end", prompt: "Write the letter Jīm (ج) at the end of a word", expectedAnswer: "ـج", explanation: "This is Jīm at the end - like a bowl hanging down with a dot" },
    
    // Ḥā' (ح) - All four forms
    { id: "haa-isolated", prompt: "Write the letter Ḥā' (ح) in isolated form", expectedAnswer: "ح", explanation: "This is Ḥā' in isolated form - looks like Jīm but without any dot" },
    { id: "haa-beginning", prompt: "Write the letter Ḥā' (ح) at the beginning of a word", expectedAnswer: "حـ", explanation: "This is Ḥā' at the beginning - flat on top like Jīm without a dot" },
    { id: "haa-middle", prompt: "Write the letter Ḥā' (ح) in the middle of a word", expectedAnswer: "ـحـ", explanation: "This is Ḥā' in the middle - flat shape like Jīm without a dot" },
    { id: "haa-end", prompt: "Write the letter Ḥā' (ح) at the end of a word", expectedAnswer: "ـح", explanation: "This is Ḥā' at the end - like Jīm at the end but without a dot" },
    
    // Khā' (خ) - All four forms
    { id: "kha-isolated", prompt: "Write the letter Khā' (خ) in isolated form", expectedAnswer: "خ", explanation: "This is Khā' in isolated form - looks like Jīm but with 1 dot above" },
    { id: "kha-beginning", prompt: "Write the letter Khā' (خ) at the beginning of a word", expectedAnswer: "خـ", explanation: "This is Khā' at the beginning - flat on top with 1 dot above" },
    { id: "kha-middle", prompt: "Write the letter Khā' (خ) in the middle of a word", expectedAnswer: "ـخـ", explanation: "This is Khā' in the middle - flat shape with 1 dot above" },
    { id: "kha-end", prompt: "Write the letter Khā' (خ) at the end of a word", expectedAnswer: "ـخ", explanation: "This is Khā' at the end - like a bowl hanging down with 1 dot above" }
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
