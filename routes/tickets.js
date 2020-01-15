const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

// router.get("/tickets/new", ticketsCtrl.new);
router.get("/flights/:id/tickets", ticketsCtrl.new);
router.post("/flights/:id/tickets", ticketsCtrl.create);

module.exports = router;
