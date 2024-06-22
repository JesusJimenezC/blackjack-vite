import _ from 'underscore';
import './style.css';

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;
let computerPoints = 0;

const btnRequest = document.querySelector('#btnDraw');
const btnStop = document.querySelector('#btnStop');
const btnNew = document.querySelector('#btnNew');

const playerCardsDiv = document.querySelector('#player-cards');
const computerCardsDiv = document.querySelector('#computer-cards');

const pointsHTML = document.querySelectorAll('small');

const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

createDeck();

const requestCard = () => {
  if (deck.length === 0) {
    throw 'No cards in the deck';
  }
  const card = deck.pop();
  return card;
};

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === 'A' ? 11 : 10) : value * 1;
};

const computerTurn = (minimumPoints) => {
  do {
    const card = requestCard();

    computerPoints = computerPoints + cardValue(card);
    pointsHTML[1].innerText = computerPoints;

    const cardImg = document.createElement('img');
    cardImg.src = `./public/cards/${card}.png`;
    cardImg.classList.add('card');
    computerCardsDiv.append(cardImg);

    if (minimumPoints > 21) {
      break;
    }
  } while (computerPoints < minimumPoints && minimumPoints <= 21);

  setTimeout(() => {
    if (computerPoints === minimumPoints) {
      alert('Nobody wins :(');
    } else if (minimumPoints > 21) {
      alert('Computer wins');
    } else if (computerPoints > 21) {
      alert('Player wins');
    } else {
      alert('Computer wins');
    }
  }, 100);
};

btnRequest.addEventListener('click', () => {
  const card = requestCard();

  playerPoints = playerPoints + cardValue(card);
  pointsHTML[0].innerText = playerPoints;

  const cardImg = document.createElement('img');
  cardImg.src = `./public/cards/${card}.png`;
  cardImg.classList.add('card');
  playerCardsDiv.append(cardImg);

  if (playerPoints > 21) {
    console.warn('Sorry, you lost');
    btnRequest.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPoints);
  } else if (playerPoints === 21) {
    console.warn('21, great!');
    btnRequest.disabled = true;
    btnStop.disabled = true;
    computerTurn(playerPoints);
  }
});

btnStop.addEventListener('click', () => {
  btnRequest.disabled = true;
  btnStop.disabled = true;

  computerTurn(playerPoints);
});

btnNew.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = createDeck();

  playerPoints = 0;
  computerPoints = 0;

  pointsHTML[0].innerText = 0;
  pointsHTML[1].innerText = 0;

  computerCardsDiv.innerHTML = '';
  playerCardsDiv.innerHTML = '';

  btnRequest.disabled = false;
  btnStop.disabled = false;
});
