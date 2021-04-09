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
