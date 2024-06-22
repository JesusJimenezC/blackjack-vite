# Blackjack Game

This project is designed to practice basic JavaScript skills using Vite and Bun as the foundational technologies. The project is a simple implementation of the classic Blackjack game, where the player competes against the computer.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Game Rules](#game-rules)
- [How to Play](#how-to-play)

## Introduction

This project is a basic implementation of the Blackjack game to help you practice and improve your JavaScript skills. The game allows you to draw cards, accumulate points, and try to beat the computer by getting as close to 21 points as possible without exceeding it.

## Technologies Used

- **JavaScript**: The main programming language used for logic and interaction.
- **Vite**: A fast and modern build tool that leverages native ES modules.
- **Bun**: A fast all-in-one JavaScript runtime.

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/JesusJimenezC/blackjack-vite
    cd blackjack-vite
    ```

2. **Install dependencies using Bun:**

    ```bash
    bun install
    ```

3. **Start the development server:**

    ```bash
    bun run dev
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:5173
    ```

## Game Rules

- The goal of the game is to get as close to 21 points as possible without exceeding it.
- Each card has a value: numbered cards are worth their number, face cards (J, Q, K) are worth 10 points, and Aces can be worth 1 or 11 points.
- The player and the computer take turns drawing cards from the deck.
- The player can choose to draw a card or stop at any point.
- The computer will draw cards until it reaches a score of 17 or higher.
- If either the player or the computer exceeds 21 points, they lose the game.

## How to Play

1. **Draw a card:**
    - Click the "Draw Card" button to draw a card and add its value to your score.

2. **Stop drawing cards:**
    - Click the "Stop" button to stop drawing cards and let the computer take its turn.

3. **Start a new game:**
    - Click the "New Game" button to reset the game and start over.
  

DEMO: https://bljack.vercel.app/
