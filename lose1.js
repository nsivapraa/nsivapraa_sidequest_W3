// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose1() → what the lose1 screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose1 screen
// ------------------------------
// drawLose1() is called from main.js
// only when currentScreen === "lose1"
function drawLose1() {
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
    "Due to construction, the shortcut in the park is closed off. You end up having to take an even longer route and get to school late. \n\nClick or press R to return to Start.",
    width / 2,
    390,
  );
}

// ------------------------------
// Mouse input for lose1 screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function lose1MousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose1 screen
// ------------------------------
// R is commonly used for “restart” in games
function lose1KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
