// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose2() → what the lose2 screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose2 screen
// ------------------------------
// drawLose2() is called from main.js
// only when currentScreen === "lose2"
function drawLose2() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("You Lose!", width / 2, 300);

  // Instruction text
  textSize(20);
  text(
    "The bus is delayed by 20 minutes, and as a result, you get to school late. \n\nClick or press R to return to Start.",
    width / 2,
    390,
    600,
  );
}

// ------------------------------
// Mouse input for lose2 screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function lose2MousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose2 screen
// ------------------------------
// R is commonly used for “restart” in games
function lose2KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
