const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

const newTicket = (req, res) => {
  console.log("hit it");
  res.render("tickets/new", { title: "Add Ticket", flightId: req.params.id });
};

const create = (req, res) => {
  const flightId = req.params.id;
  Flight.findById(flightId, (err, flight) => {
    req.body.flight = flight;
    const ticket = new Ticket(req.body);
    ticket.save(err => {
      if (err) console.log(err);
      res.redirect(`/flights/${flightId}`);
    });
  });
};

module.exports = { new: newTicket, create };
