const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers/api/cards");

// Get ALL Cards
router.get("/", cardsController.getAllCards);

// Get ONE Card
router.get("/:id", cardsController.getSingleCard);

// Create Card
router.post("/", cardsController.createCard);

// Update Card
router.put("/:id", cardsController.updateCard);

// Delete Card
router.delete("/:id", cardsController.deleteCard);

module.exports = router;
