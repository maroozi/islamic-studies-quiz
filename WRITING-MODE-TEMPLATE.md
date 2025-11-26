# Arabic Writing Mode Template

## Overview
This template provides a complete guide for implementing a **canvas-based writing mode** where students draw Arabic letters/words with their finger, mouse, or stylus. This follows the existing Year 6 Arabic Studies pattern.

---

## Structure

The writing mode has **3 main screens**:
1. **Mode Selection Screen** - Choose between Read/Meaning/Write modes
2. **Write Mode Screen** - Canvas for drawing + feedback
3. **Results Screen** - Final score and statistics

---

## HTML Structure

### Mode Selection Card (on main menu)

```html
<div class="mode-card" data-mode="write">
    <div class="mode-icon">✍️</div>
    <h3>Write Mode</h3>
    <p class="mode-desc">See the English meaning and write the Arabic word with your finger, pen, or mouse!</p>
    <button class="mode-btn">Practice Writing ✨</button>
</div>
```

### Write Mode Screen

```html
<div id="writeScreen" class="screen">
    <!-- Header with progress -->
    <div class="learn-header">
        <div class="header-info">
            <button id="writeBackBtn" class="back-mode-btn">← Back to Modes</button>
            <div class="score-badge">
                <span class="star-icon">⭐</span>
                <span id="writeScore">0</span>
            </div>
        </div>
        <div class="progress-info">
            <span id="writeProgress">Question 1 of 25</span>
            <span id="writePercent">4%</span>
        </div>
        <div class="progress-bar">
            <div id="writeProgressFill" class="progress-fill"></div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="learn-content">
        <h2 class="mode-title">✍️ Write Mode</h2>
        <p class="instruction">Write the Arabic letter:</p>
        
        <!-- Prompt Display -->
        <div class="english-meaning-display">
            <div id="writePrompt" class="english-meaning"></div>
        </div>
        
        <!-- Drawing Canvas -->
        <div class="canvas-container">
            <div class="canvas-instructions">
                <span class="instruction-icon">👆</span>
                <span>Use your finger, mouse, or pen to write the letter</span>
            </div>
            <canvas id="drawingCanvas" class="drawing-canvas"></canvas>
            
            <!-- Canvas Controls -->
            <div class="canvas-controls">
                <button id="clearCanvas" class="canvas-btn clear-btn">
                    <span class="btn-icon">🗑️</span>
                    <span>Clear</span>
                </button>
                <button id="submitDrawing" class="canvas-btn submit-btn" disabled>
                    <span class="btn-icon">✓</span>
                    <span>Submit</span>
                </button>
            </div>
            
            <!-- Drawing Tools -->
            <div class="drawing-tools">
                <label class="tool-label">Brush Size:</label>
                <input type="range" id="brushSize" min="2" max="20" value="8" class="brush-slider">
                <span id="brushSizeValue" class="size-value">8px</span>
            </div>
        </div>

        <!-- Feedback Section (initially hidden) -->
        <div id="writeFeedback" class="feedback hidden">
            <div id="writeFeedbackEmoji" class="feedback-emoji"></div>
            <p id="writeFeedbackText"></p>
            
            <!-- Show Correct Answer -->
            <div class="answer-reveal">
                <p class="reveal-label">The correct form is:</p>
                <div id="correctAnswer" class="correct-word-display"></div>
            </div>
            
            <!-- Note: No explanation card needed for writing practice -->
            
            <button id="writeNextBtn" class="next-btn">
                <span id="writeNextText">Next Question</span>
                <span class="arrow">→</span>
            </button>
        </div>
    </div>
</div>
```

---

## JavaScript Structure

### Data Format

```javascript
const writingData = [
    {
        id: "ba-isolated",
        prompt: "Write the letter bā' in isolated form",
        expectedAnswer: "ب",
        explanation: "This is the isolated form of bā'"
    },
    {
        id: "ba-beginning",
        prompt: "Write the letter bā' at the beginning of a word",
        expectedAnswer: "بـ",
        explanation: "This is bā' at the beginning, connected to the right"
    }
    // ... more questions
];
```

### Canvas Initialization

```javascript
const drawingCanvas = document.getElementById('drawingCanvas');
const clearCanvas = document.getElementById('clearCanvas');
const submitDrawing = document.getElementById('submitDrawing');
const brushSize = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');

let canvas, ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentBrushSize = 8;
let hasDrawn = false;

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
    // Draw a horizontal line as a guide
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
```

### Drawing Functions

```javascript
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
    drawWritingLine(); // Redraw the guide line
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
```

### Submit Logic (Simplified - No Recognition)

```javascript
function submitWriting() {
    if (!hasDrawn) return;
    
    const currentQuestion = writingData[currentIndex];
    
    // Award star for completion (no auto-grading)
    score += 10;
    document.getElementById('writeScore').textContent = score;
    
    // Simple validation: just check if they drew something
    // (No handwriting recognition - just show the correct answer)
    
    // Show feedback
    document.getElementById('writeFeedback').classList.remove('hidden');
    document.getElementById('writeFeedbackEmoji').textContent = '👀';
    document.getElementById('writeFeedbackText').textContent = 'Great effort! Compare your writing with the correct form below:';
    document.getElementById('correctAnswer').textContent = currentQuestion.expectedAnswer;
    
    // Note: No explanation shown - writing practice focuses on visual comparison only
    
    // Disable canvas
    canvas.removeEventListener('mousedown', startDrawing);
    canvas.removeEventListener('touchstart', handleTouchStart);
    clearCanvas.disabled = true;
    submitDrawing.disabled = true;
}
```

### Question Flow

```javascript
let currentIndex = 0;
let score = 0;

function showQuestion() {
    const question = writingData[currentIndex];
    
    // Update prompt
    document.getElementById('writePrompt').textContent = question.prompt;
    
    // Update progress
    document.getElementById('writeProgress').textContent = `Question ${currentIndex + 1} of ${writingData.length}`;
    const percentage = Math.round(((currentIndex + 1) / writingData.length) * 100);
    document.getElementById('writePercent').textContent = `${percentage}%`;
    document.getElementById('writeProgressFill').style.width = `${percentage}%`;
    
    // Reset canvas
    clearDrawingCanvas();
    
    // Hide feedback
    document.getElementById('writeFeedback').classList.add('hidden');
    
    // Re-enable canvas
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', handleTouchStart);
    clearCanvas.disabled = false;
}

function nextQuestion() {
    currentIndex++;
    
    if (currentIndex < writingData.length) {
        showQuestion();
    } else {
        showResults();
    }
}
```

---

## CSS Requirements

### Canvas Styling

```css
.canvas-container {
    background: #f8f9fa;
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
}

.canvas-instructions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 1rem;
    color: #555;
}

.drawing-canvas {
    width: 100%;
    height: 300px;
    background: white;
    border: 3px solid #e0e0e0;
    border-radius: 15px;
    cursor: crosshair;
    touch-action: none;
}

.canvas-controls {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.canvas-btn {
    flex: 1;
    padding: 15px 25px;
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.clear-btn {
    background: #f44336;
    color: white;
}

.clear-btn:hover {
    background: #d32f2f;
    transform: translateY(-2px);
}

.submit-btn {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    color: white;
}

.submit-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
}

.drawing-tools {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    padding: 10px;
    background: white;
    border-radius: 10px;
}

.brush-slider {
    flex: 1;
    -webkit-appearance: none;
    height: 8px;
    border-radius: 5px;
    background: #e0e0e0;
}

.brush-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #667eea;
    cursor: pointer;
}

.size-value {
    font-weight: 600;
    color: #667eea;
    min-width: 40px;
}
```

---

## Event Listeners Setup

```javascript
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCanvas();
    
    // Brush size slider
    brushSize.addEventListener('input', updateBrushSize);
    
    // Canvas controls
    clearCanvas.addEventListener('click', clearDrawingCanvas);
    submitDrawing.addEventListener('click', submitWriting);
    
    // Navigation
    document.getElementById('writeBackBtn').addEventListener('click', goBackToModes);
    document.getElementById('writeNextBtn').addEventListener('click', nextQuestion);
    
    // Show first question
    showQuestion();
});
```

---

## Key Features

1. **Touch Support**: Works on tablets/phones with finger drawing
2. **Mouse Support**: Works on desktop with mouse
3. **Stylus Support**: Works with stylus/pen input
4. **Adjustable Brush**: Slider to change pen thickness
5. **Clear Button**: Erase and start over
6. **Guide Line**: Dashed horizontal line to help with writing alignment
7. **Visual Feedback**: Shows correct answer after submission
8. **Progress Tracking**: Shows question number and percentage
9. **Score System**: Can award stars based on completion

---

## Limitations (No Recognition)

Since handwriting recognition is complex, this mode:
- ✅ Allows students to practice writing
- ✅ Shows the correct answer for comparison
- ✅ Provides visual feedback
- ❌ Does NOT auto-grade the drawing
- ❌ Does NOT compare user drawing to correct answer

Students can self-assess by comparing their drawing to the shown answer.

---

## Integration with Existing Quiz System

### Option 1: Separate Writing Quiz
- Create standalone `year2-writing-group1.html` with canvas mode
- No multiple choice - just drawing practice
- Simpler, focused on writing only

### Option 2: Multi-Mode Quiz (like Year 6 Arabic)
- Mode selection screen with 3 modes:
  * **Read Mode**: Show letter form, ask if they can read it
  * **Recognition Mode**: Multiple choice (current implementation)
  * **Write Mode**: Canvas drawing
- More complex but provides 3 different practice methods

---

## Recommended Approach

For Year 2 Arabic Letters:
1. Keep current multiple-choice quiz as "Recognition Mode"
2. Create separate "Writing Practice" quiz with canvas
3. Add both links to year2-arabic.html menu
4. This gives students two different ways to practice

---

## Files Needed

For each writing quiz:
1. `year2-writing-[group]-practice.html` - HTML with canvas
2. `year2-writing-[group]-practice-script.js` - Canvas logic + data
3. `year2-writing-style.css` - Canvas and drawing styles (can be shared)

---

## Example Implementation

See: `arabic-studies.html` and `arabic-script.js` for complete working example.

---

## Design Improvements

### Removed Features (Nov 26, 2025)
- **Removed explanation card** - Writing practice focuses on visual comparison only
- Students see the correct form immediately and can compare with their drawing
- Keeps feedback simple and focused: emoji + message + correct answer + next button
- No detailed explanations needed - the visual comparison is self-explanatory

### Key Features Retained
- ✅ Canvas drawing with touch/mouse/pen support
- ✅ Reveal button to peek at answer before submitting
- ✅ Clear button to restart
- ✅ Brush size slider for pen thickness
- ✅ Writing guide line for alignment
- ✅ Stars awarded for completion
- ✅ Progress tracking

---

## Version History

- v1.0 (Nov 26, 2025) - Initial template based on Year 6 Arabic Studies write mode
- v1.1 (Nov 26, 2025) - Removed explanation card, simplified feedback to focus on visual comparison
