const express = require("express");
const router = express.Router();
const studyCardsController = require("../../controllers/api/studycards");

// Get ALL Cards
router.get("/", studyCardsController.getAllCards);

// Get ONE Card
router.get("/:id", studyCardsController.getSingleCard);

// Create Card
router.post("/", studyCardsController.createCard);

// Update Card
router.put("/:id", studyCardsController.updateCard);

// Delete Card
router.delete("/:id", studyCardsController.deleteCard);

module.exports = router;
