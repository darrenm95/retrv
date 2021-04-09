const express = require("express");
const router = express.Router();
const studyCardsController = require("../../controllers/api/studycards");

// Get ALL Cards
router.get("/", studyCardsController.getAllStudyCards);

// Get ONE Card
router.get("/:id", studyCardsController.getSingleStudyCard);

// Create Card
router.post("/", studyCardsController.createStudyCard);

// Update Card
router.put("/:id", studyCardsController.updateStudyCard);

// Delete Card
router.delete("/:id", studyCardsController.deleteStudyCard);

module.exports = router;
