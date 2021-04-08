const uuid = require("uuid");
const mongoose = require('mongoose')
const Cards = mongoose.model('cards')

exports.getAllCards = async (req, res) => {
  const cards = await Cards.find();
  res.json(cards);
}

exports.getSingleCard = async (req, res) => {
  let cardID = req.params.id;
  await Cards.findById({ _id: cardID }, (err, data) => {
        if (err) {
            res.status(500).json({
                message:
                "Cannot find a card with that information, please try again.",
        });
        } else {
            console.log(data);
            res.status(200).json({
                message: "Card found!",
                data
            });
        }
    });
};

exports.createCard = (req, res) => {
  const newCard = {
    id: uuid.v4(),
    question: req.body.question,
    answer: req.body.answer
  };

  if (!newCard.question || !newCard.answer) {
    return res
      .status(400)
      .json({ message: "Please include a question and answer" });
  }

  cards.push(newCard);
  res.status(201).json(cards);
};

exports.updateCard = (req, res) => {
  const found = cards.some((card) => card.id === req.params.id);

  if (found) {
    const updCard = req.body;
    cards.find((card) => {
      if (card.id === req.params.id) {
        card.question = updCard.question ? updCard.question : card.question;
        card.answer = updCard.answer ? updCard.answer : card.answer;

        res.status(200).json({ message: "Card updated", card });
      }
    });
  } else {
    res.status(400).json({
      message: `No card with the id of ${req.params.id}`
    });
  }
};

exports.deleteCard = (req, res) => {
  const found = cards.some((card) => card.id === req.params.id);

  if (found) {
    cards = cards.filter((card) => card.id !== req.params.id);
    res.status(200).json({
      message: "Card deleted",
      cards: cards
    });
  } else {
    res.status(400).json({
      message: `No card with the id of ${req.params.id}`
    });
  }
};
