const mongoose = require("mongoose");
const StudyCards = mongoose.model("studycards");

exports.getAllSpacedRetrievals = async (req, res) => {
  try {
    const spacedRetrievals = await StudyCards.find({
      dueRetrvTime: { $lt: Date.now() },
    });

    let updatedSpacedRetrievals = await Promise.all(
      spacedRetrievals.map(async (spacedRetrieval, index, array) => {
        let spacedRetrievalObj;
        let first = index === 0 ? true : false;
        let nextStudyCardId =
          index < array.length - 1 ? array[index + 1]._id : "last";

        try {
          spacedRetrievalObj = await StudyCards.findByIdAndUpdate(
            { _id: spacedRetrieval._id },
            { $set: { first, nextStudyCardId } },
            { upsert: false, new: true }
          );
          return spacedRetrievalObj;
        } catch (e) {
          console.log(e);
        }
      })
    );
    res.status(200).json(updatedSpacedRetrievals);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getSingleSpacedRetrieval = async (req, res) => {
  const spacedRetrievalId = mongoose.Types.ObjectId(req.params.id);

  try {
    const spacedRetrieval = await StudyCards.findById({
      _id: spacedRetrievalId,
    });

    res.status(200).json(spacedRetrieval);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getSingleSpacedRetrievalQuestion = async (req, res) => {
  const spacedRetrievalId = mongoose.Types.ObjectId(req.params.id);

  try {
    const spacedRetrieval = await StudyCards.findById({
      _id: spacedRetrievalId,
    });

    const spacedRetrievalQuestion = {
      _id: spacedRetrieval._id,
      question: spacedRetrieval.question,
    };
    res.status(200).json(spacedRetrievalQuestion);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getSingleSpacedRetrievalAnswer = async (req, res) => {
  const spacedRetrievalId = mongoose.Types.ObjectId(req.params.id);

  try {
    const spacedRetrieval = await StudyCards.findById({
      _id: spacedRetrievalId,
    });

    const spacedRetrievalAnswer = {
      _id: spacedRetrieval._id,
      question: spacedRetrieval.question,
      answer: spacedRetrieval.answer,
      nextStudyCardId: spacedRetrieval.nextStudyCardId,
    };

    res.status(200).json(spacedRetrievalAnswer);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateSpacedRetrieval = async (req, res) => {
  const timeArray = [86400000, 604800000, 1209600000, 2419200000];
  const spacedRetrievalId = mongoose.Types.ObjectId(req.params.id);
  const latestAttemptCorrect = req.body.latestAttemptCorrect;

  try {
    const spacedRetrieval = await StudyCards.findById({
      _id: spacedRetrievalId,
    });

    let { correctAttempts, dueRetrvTime } = spacedRetrieval;

    if (latestAttemptCorrect) {
      correctAttempts++;
    }

    if (correctAttempts < timeArray.length) {
      dueRetrvTime = Date.now() + timeArray[correctAttempts];
    } else {
      dueRetrvTime = Date.now() + timeArray[length - 1];
    }

    const updatedSpacedRetrieval = await StudyCards.findByIdAndUpdate(
      { _id: spacedRetrievalId },
      { $set: { correctAttempts, latestAttemptCorrect, dueRetrvTime } },
      { upsert: false, new: true }
    );

    res.status(200).json(updatedSpacedRetrieval);
  } catch (e) {
    res.status(500).send(e);
  }
};
