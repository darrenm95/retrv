const express = require("express");
const app = express();
const morgan = require("morgan");
const { NODE_ENV } = require("./config");
const studyCardsRouter = require("./routes/api/studycards");

// set parse application urlencoded and json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set morgan middelware format for app
app.use(morgan(NODE_ENV));

// Cards API routes
app.use("/api/studycards", studyCardsRouter);

// export the app
module.exports = app;
