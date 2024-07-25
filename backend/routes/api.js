var express = require("express");
var router = express.Router();

// Dummy Data

const dummy = [
  {
    id: 1,
    source: "http://localhost:3000/images/pizza-1.jpg",
    title: "pizza 1",
    adlink: "/ad-1",
  },
  {
    id: 2,
    source: "http://localhost:3000/images/pizza-2.jpg",
    title: "pizza 2",
    adlink: "/ad-2",
  },
  {
    id: 3,
    source: "http://localhost:3000/images/pizza-3.jpg",
    title: "pizza 3",
    adlink: "/ad-3",
  },
];

/* GET home page. */
router.get("/images", function (req, res, next) {
  res.json(dummy);
});

module.exports = router;
