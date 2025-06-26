<p align="center">
  <img src="https://em-content.zobj.net/thumbs/240/apple/354/cross-mark_274c.png" alt="Tic Tac Toe Game Logo" width="100" style="margin-right: 8px; vertical-align: middle;"/>
  <img src="https://em-content.zobj.net/thumbs/240/apple/354/hollow-red-circle_2b55.png" alt="Tic Tac Toe Game Logo" width="100" style="vertical-align: middle;"/>
</p>

# ❌⭕ Tic Tac Toe Game

A classic **Tic Tac Toe** (Noughts and Crosses) game built with **HTML**, **CSS**, and **JavaScript**. Enjoy a polished, browser-based two-player experience with real-time updates, win/draw detection, and a modern, responsive interface. Ideal for quick fun or as a portfolio project demonstrating interactive web development!

---

## 📸 App Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/fe8867a2-9d5d-4fba-b2c3-2656e2180677" width="330" alt="Tic Tac Toe Screenshot 1" style="margin: 0 8px 12px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <img src="https://github.com/user-attachments/assets/460d7227-099f-402c-bb3d-a0392541d316" width="330" alt="Tic Tac Toe Screenshot 2" style="margin: 0 8px 12px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
</p>

---

## 🎮 Features

- **Two-player Mode:** Play with a friend — local multiplayer with alternating turns.
- **Real-time Updates:** Instantly shows “X” or “O” turns and the current player.
- **Win/Draw Detection:** Automatically detects and displays the winner or if the match is a draw.
- **Restart Button:** Quickly reset the board and start a new game at any time.
- **Responsive UI:** Clean, modern design adapts to desktops, tablets, and smartphones.
- **Visual Feedback:** Winning line highlight, button effects, and clear status messages.

---

## 🛠️ Technologies Used

| Technology           | Purpose                                  |
|----------------------|------------------------------------------|
| **HTML5**            | Structure of the game board and controls |
| **CSS3**             | Styling with Flexbox, Grid, and effects  |
| **JavaScript (ES6)** | Game logic, state management, interactivity |

---

## 🔍 How It Works

1. **Game Board:**  
   - The board is a 3×3 grid rendered with HTML and styled using CSS.
2. **Turns:**  
   - Players alternate clicking empty cells to place “X” or “O”.
   - The current player indicator updates after each turn.
3. **Win & Draw Detection:**  
   - After every move, the game checks for:
     - **Win:** 3 matching marks in a row (horizontal, vertical, diagonal)
     - **Draw:** All cells filled with no winner
   - Once the game ends, a message is displayed and further moves are disabled.
4. **Restart:**  
   - Click the “Restart” button to clear the board and begin a new match.

---

## 🧠 Game Logic Overview

- **State Tracking:**  
  Uses a single array (length 9) or a 2D array to store the current state of the board.
- **Win Checking:**  
  Compares board state against all possible win combinations (rows, columns, diagonals).
- **Event Handling:**  
  Only allows moves on empty cells and disables input once the game is over.
- **UI Updates:**  
  Adds/removes CSS classes for active player, winning line, and disables board when needed.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/tic-tac-toe-game.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd tic-tac-toe-game
   ```
3. **Open `index.html`** in your browser to start playing!

No dependencies or setup required — just open and play.

---

## 📱 Responsive Design

- **Mobile-first layout:** Game board and controls scale perfectly on all devices.
- **Touch-friendly:** Large buttons and intuitive touch targets for the best mobile experience.

---

## 🌟 Future Enhancements

- 🤖 **Single-player Mode:** Play against an AI opponent (random or Minimax).
- 🌗 **Theme Switcher:** Toggle between light and dark mode.
- 🔊 **Sound Effects:** Feedback sounds for moves, wins, or draws.
- 🏆 **Score Tracking:** Keep track of player scores across rounds.
- 📝 **Move History:** Display a list of moves or undo functionality.
- 📱 **Improved Accessibility:** ARIA roles, keyboard navigation, and color-blind support.

---

## 🗂️ Project Structure

```
tic-tac-toe-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 👨‍💻 Author

Made with ❤️ by **Rakhi Yadav**  
If you enjoyed this project, please consider starring the repo, forking it, or submitting suggestions and improvements via issues or pull requests!

---

<p align="center">
  <b>Thanks for playing Tic Tac Toe!</b><br>
  <i>Classic fun, now in your browser.</i>
</p>
