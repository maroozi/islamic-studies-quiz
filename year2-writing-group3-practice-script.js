// Year 2 - Arabic Letter Writing Practice (Group 3)
// Letters: ض ط ظ ع غ ف ق

// Writing data
const writingData = [
    // Ḍād (ض) - All four forms
    { id: "dad-isolated", prompt: "Write the letter Ḍād (ض) in isolated form", expectedAnswer: "ض", explanation: "This is Ḍād in isolated form - like Ṣād but with a dot above" },
    { id: "dad-beginning", prompt: "Write the letter Ḍād (ض) at the beginning of a word", expectedAnswer: "ضـ", explanation: "This is Ḍād at the beginning - with a dot above" },
    { id: "dad-middle", prompt: "Write the letter Ḍād (ض) in the middle of a word", expectedAnswer: "ـضـ", explanation: "This is Ḍād in the middle - connected on both sides with a dot above" },
    { id: "dad-end", prompt: "Write the letter Ḍād (ض) at the end of a word", expectedAnswer: "ـض", explanation: "This is Ḍād at the end - with a dot above" },
    
    // Ṭā' (ط) - All four forms
    { id: "taa-isolated", prompt: "Write the letter Ṭā' (ط) in isolated form", expectedAnswer: "ط", explanation: "This is Ṭā' in isolated form - looks like a bowl shape" },
    { id: "taa-beginning", prompt: "Write the letter Ṭā' (ط) at the beginning of a word", expectedAnswer: "طـ", explanation: "This is Ṭā' at the beginning - flat on top" },
    { id: "taa-middle", prompt: "Write the letter Ṭā' (ط) in the middle of a word", expectedAnswer: "ـطـ", explanation: "This is Ṭā' in the middle - flat shape" },
    { id: "taa-end", prompt: "Write the letter Ṭā' (ط) at the end of a word", expectedAnswer: "ـط", explanation: "This is Ṭā' at the end - like a bowl hanging down" },
    
    // Ẓā' (ظ) - All four forms
    { id: "zaa-isolated", prompt: "Write the letter Ẓā' (ظ) in isolated form", expectedAnswer: "ظ", explanation: "This is Ẓā' in isolated form - like Ṭā' but with a dot above" },
    { id: "zaa-beginning", prompt: "Write the letter Ẓā' (ظ) at the beginning of a word", expectedAnswer: "ظـ", explanation: "This is Ẓā' at the beginning - flat on top with a dot above" },
    { id: "zaa-middle", prompt: "Write the letter Ẓā' (ظ) in the middle of a word", expectedAnswer: "ـظـ", explanation: "This is Ẓā' in the middle - flat shape with a dot above" },
    { id: "zaa-end", prompt: "Write the letter Ẓā' (ظ) at the end of a word", expectedAnswer: "ـظ", explanation: "This is Ẓā' at the end - with a dot above" },
    
    // 'Ayn (ع) - All four forms
    { id: "ayn-isolated", prompt: "Write the letter 'Ayn (ع) in isolated form", expectedAnswer: "ع", explanation: "This is 'Ayn in isolated form - has a unique curved shape" },
    { id: "ayn-beginning", prompt: "Write the letter 'Ayn (ع) at the beginning of a word", expectedAnswer: "عـ", explanation: "This is 'Ayn at the beginning - small curved shape" },
    { id: "ayn-middle", prompt: "Write the letter 'Ayn (ع) in the middle of a word", expectedAnswer: "ـعـ", explanation: "This is 'Ayn in the middle - simplified curved form" },
    { id: "ayn-end", prompt: "Write the letter 'Ayn (ع) at the end of a word", expectedAnswer: "ـع", explanation: "This is 'Ayn at the end - curved with a tail" },
    
    // Ghayn (غ) - All four forms
    { id: "ghayn-isolated", prompt: "Write the letter Ghayn (غ) in isolated form", expectedAnswer: "غ", explanation: "This is Ghayn in isolated form - like 'Ayn but with a dot above" },
    { id: "ghayn-beginning", prompt: "Write the letter Ghayn (غ) at the beginning of a word", expectedAnswer: "غـ", explanation: "This is Ghayn at the beginning - like 'Ayn with a dot above" },
    { id: "ghayn-middle", prompt: "Write the letter Ghayn (غ) in the middle of a word", expectedAnswer: "ـغـ", explanation: "This is Ghayn in the middle - curved form with a dot above" },
    { id: "ghayn-end", prompt: "Write the letter Ghayn (غ) at the end of a word", expectedAnswer: "ـغ", explanation: "This is Ghayn at the end - with a dot above" },
    
    // Fā' (ف) - All four forms
    { id: "faa-isolated", prompt: "Write the letter Fā' (ف) in isolated form", expectedAnswer: "ف", explanation: "This is Fā' in isolated form - like Qāf but with 1 dot above" },
    { id: "faa-beginning", prompt: "Write the letter Fā' (ف) at the beginning of a word", expectedAnswer: "فـ", explanation: "This is Fā' at the beginning - with 1 dot above" },
    { id: "faa-middle", prompt: "Write the letter Fā' (ف) in the middle of a word", expectedAnswer: "ـفـ", explanation: "This is Fā' in the middle - simplified form with 1 dot above" },
    { id: "faa-end", prompt: "Write the letter Fā' (ف) at the end of a word", expectedAnswer: "ـف", explanation: "This is Fā' at the end - with 1 dot above" },
    
    // Qāf (ق) - All four forms
    { id: "qaaf-isolated", prompt: "Write the letter Qāf (ق) in isolated form", expectedAnswer: "ق", explanation: "This is Qāf in isolated form - has 2 dots above" },
    { id: "qaaf-beginning", prompt: "Write the letter Qāf (ق) at the beginning of a word", expectedAnswer: "قـ", explanation: "This is Qāf at the beginning - with 2 dots above" },
    { id: "qaaf-middle", prompt: "Write the letter Qāf (ق) in the middle of a word", expectedAnswer: "ـقـ", explanation: "This is Qāf in the middle - simplified form with 2 dots above" },
    { id: "qaaf-end", prompt: "Write the letter Qāf (ق) at the end of a word", expectedAnswer: "ـق", explanation: "This is Qāf at the end - with 2 dots above" }
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
