// Build the API:

// GET / cards → returns Array of cards
// GET / cards /: id → returns card with title, description, category
// POST / cards → adds a card to cards
// DELETE / cards /: id → removes a card from cards

const fs = require('fs'); // const fs = require('fs').promises;

const express = require('express');
const uid = require('uid');

const app = express(); // neue Server-Instanz
app.use(express.json()); // server vorbereiten, damit er json empfangen / verstehen kann
app.use(express.static('./dist'));

app.listen(3000, (err) => {
  err ? console.log(err) : console.log('server for cards is ready');
});

const pathCards = __dirname + '/cards.json';
// let cardList = getCards(pathCards)
let cardList;
getCards();

app.get('/cards', (request, response) => {
  response.json(cardList);
});

app.get('/cards/:id', (request, response) => {
  //console.log('Request Parameter: ', request.params);
  const { id } = request.params;
  const foundCard = cardList.find((card) => card.id === id);
  //console.log('found card:  ' + foundCard);
  response.json({
    title: foundCard.title,
    description: foundCard.description,
    category: foundCard.category
  });
});

app.post('/cards', (request, response) => {
  let newCard = request.body;
  const newCardId = uid();

  //console.log('server.js neCard', newCard);
  newCard = { ...newCard, id: newCardId };
  //console.log('server.js neCard mikt ID?', newCard);
  cardList.push(newCard);
  //console.log('cardList> ', cardList);
  writeCards(cardList);
  response.json(newCard);
});

app.delete('/cards/:id', (request, response) => {
  const { id } = request.params;
  const index = cardList.map((card) => card.id).indexOf(id);
  if (index >= 0) {
    cardList = [...cardList.slice(0, index), ...cardList.slice(index + 1)];
    writeCards(cardList);
  }
  response.json(cardList);
});

function getCards() {
  fs.readFile(pathCards, 'utf8', (err, cardsJSON) => {
    if (err) {
      console.log(err.message);
      cardList = [];
    } else {
      cardList = JSON.parse(cardsJSON);
      //console.log('CardList of File: ', cardList);
    }
  });

  //alternative
  /* fs.readFile(__dirname + '', "utf8").then(data => {
    cards = JSON.parse(data)

  })
  .catch(err => {
    console.log(error.message)
  }) */
}

function writeCards(cards) {
  // console.log('**********', cards);
  fs.writeFile(pathCards, JSON.stringify(cards), (err) => {
    err && console.log('WRITE CARDS: ', err.message);
  });
}

//app.patch('/cards/:id', async (request, response) => {
//    const card = request.body
//    const { id } = request.params;
// const cardList = await getCards()
//    const index = cardList.map((card) => card.id).indexOf(id);

//  if (index >= 0) {
//wenn nicht gefunden?
//cardList[index] = { ...cardList[index], ...newcard}
//}
