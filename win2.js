// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin1() → what the first win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin1() is called from main.js
// only when currentScreen === "win1"
function drawWin1() {
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
    "You take the regular route and although you arrive hungry and exhausted, you arrive nonethless. Congratulations! \n\nClick or press R to return to Start.",
    width / 2,
    390,
    600,
  );
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function win1MousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function win1KeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
