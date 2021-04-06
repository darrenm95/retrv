const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

// set parse application urlencoded and json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set morgan middelware format for app
app.use(morgan("dev"));

// generate unique id
const generateId = () => JSON.stringify(Date.now());

let cards = [
  {
    id: "1617705249903",
    question: "What is the shape of the Earth?",
    answer: "flat, obviously",
  },
  {
    id: "1617705264439",
    question: "What is a donkey?",
    answer: "shreks companion",
  },
];

// CRUD

// create
app.post("/cards/create", (req, res) => {
  const { question, answer } = req.body;
  const newCard = { id: generateId(), title, director };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// read
app.get("/cards", (req, res) => {
  res.status(200).json(cards);
});

// read one
app.get("/cards/:id", (req, res) => {
  const { id } = req.params;
  cards.map((card) => {
    if (card.id === id) {
      res.status(200).json(card);
      return;
    }
  });
});

// update
app.put("/cards/:id/update", (req, res) => {
  const { id } = req.params;
  cards = cards.map((card) => {
    if (card.id === id) {
      const updatedCard = { ...card, ...req.body };
      return updatedCard;
    }
    return card;
  });
  res.status(200).json(cards);
});

// delete
app.delete("/cards/:id", (req, res) => {
  const { id } = req.params;
  cards = cards.filter((card) => card.id !== id);
  res.status(204).json({});
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
