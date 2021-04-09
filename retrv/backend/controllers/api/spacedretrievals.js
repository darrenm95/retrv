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
