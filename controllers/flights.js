const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

const newFlight = (req, res) => {
  res.render("flights/new");
};

const show = (req, res) => {
  console.log("hit from new ticket");
  Flight.findById(req.params.id, (err, flight) => {
    Ticket.find({ flight: flight._id }, function(err, tickets) {
      res.render("flights/show", {
        title: "Flight Detail",
        flight,
        tickets
      });
    });
  });
};

const index = (req, res) => {
  Flight.find({}, (err, flights) => {
    if (err) return console.log(err);
    const sortedFlights = flights.sort((a, b) => a.departs - b.departs);
    console.log(sortedFlights);
    res.render("flights/index", { flights: sortedFlights });
  });
};

const create = (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(err => {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
};

module.exports = {
  new: newFlight,
  create,
  index,
  show
};
