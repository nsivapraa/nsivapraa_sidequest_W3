// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin2() → what the first win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin2() is called from main.js
// only when currentScreen === "win2"
function drawWin2() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(32);
  text("You Win!", width / 2, 300);

  // Instruction text
  textSize(20);
  text(
    "Your friend picks you up and you arrive at school just before the bell rings. Congratulations! \n\nClick or press R to return to Start.",
    width / 2,
    390,
    600,
  );
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function win2MousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function win2KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
