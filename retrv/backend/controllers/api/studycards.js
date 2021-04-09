const mongoose = require("mongoose");
const StudyCards = mongoose.model("studycards");

exports.getAllStudyCards = async (req, res) => {
  try {
    const studyCards = await StudyCards.find({});
    res.status(200).json(studyCards);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getSingleStudyCard = async (req, res) => {
  const studyCardId = req.params.id;

  try {
    const studyCard = await StudyCards.findById({ _id: studyCardId });
    res.status(200).json(studyCard);
  } catch (e) {
    res.status(500).send(e);
  }
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
