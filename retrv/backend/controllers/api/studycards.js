const uuid = require("uuid");
const mongoose = require("mongoose");
const StudyCards = mongoose.model("cards");

exports.getAllStudyCards = async (req, res) => {
  const studyCards = await StudyCards.find();
  res.json(studyCards);
};

exports.getSingleStudyCard = async (req, res) => {
  let studyCardId = req.params.id;
  await StudyCards.findById({ _id: studyCardId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Cannot find a card with that information, please try again.",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Card found!",
        data,
      });
    }
  });
};

exports.createStudyCard = async (req, res) => {
  await new StudyCards(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Card Created!",
        data,
      });
    }
  });
};

exports.updateStudyCard = async (req, res) => {
  let studyCardId = req.params.id;
  await StudyCards.findByIdAndUpdate(
    { _id: studyCardId },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "Card Updated!",
          data,
        });
      }
    }
  );
};

exports.deleteStudyCard = async (req, res) => {
  let studyCardId = req.params.id;
  await StudyCards.deleteOne({ _id: studyCardId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Card Deleted!",
      });
    }
  });
};
