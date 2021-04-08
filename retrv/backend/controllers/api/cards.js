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

exports.createCard = async (req, res) => {
  await new Cards(req.body).save((err, data) => {
      if (err) {
          res.status(500).json({
              message:
              "Something went wrong, please try again later."
          });
      } else {
          res.status(200).json({
              message: "Card Created!",
              data,
          });
      }
  });
  // else if (!cards.question || !cards.answer) {
  //   return res.status(400).json({ 
  //     message: 
  //     "Please include a question and answer" 
  //   });
};

exports.updateCard = async (req, res) => {
  let cardID = req.params.id;
    await Cards.findByIdAndUpdate({_id: cardID}, {$set : req.body}, (err, data) => {
        if (err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again later.",
            });
        } else {
            res.status(200).json({
                message: "Card Updated!",
                data,
            });
        }
    });
}

exports.deleteCard = async (req, res) => {
  let cardID = req.params.id;
  await Cards.deleteOne({ _id: cardID }, (err, data) => {
      if (err) {
          res.status(500).json({
              message:
              "Something went wrong, please try again later."
          });
      } else {
          res.status(200).json({
              message: "Card Deleted!"
          });
      }
  });
};
