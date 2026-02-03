// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawRun() → what the screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const runBtn1 = {
  x: 400, // x position (centre of the button)
  y: 310, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Take the main path", // text shown on the button
};
const runBtn2 = {
  x: 400, // x position (centre of the button)
  y: 420, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Take a shortcut", // text shown on the button
};
// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawWakeup()) is called from main.js *only*
// when currentScreen === "run"
function drawRun() {
  // Set background colour for the game screen
  background(235, 176, 231);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You run out the door.", width / 2, 160);

  textSize(18);
  text(
    "To get to school, you can either take the regular route or take a shortcut through the park. Which do you choose?",
    width / 2,
    210,
    600,
  );

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawChoiceButton(runBtn1);
  drawChoiceButton(runBtn2);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  const over = isHover(runBtn1) || isHover(runBtn2);
  cursor(over ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawChoiceButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "run"
function runMousePressed() {
  if (isHover(runBtn1)) {
    currentScreen = "start"; // go to the "run" screen
  } else if (isHover(runBtn2)) {
    currentScreen = "breakfast"; // go to the "breakfast" screen
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function runKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (key === "a" || key === "A") {
    currentScreen = "start";
  }
  if (key === "b" || key === "B") {
    currentScreen = "breakfast";
  }
}
