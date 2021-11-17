var express = require('express');
const Chairs_controllers = require("../controllers/Chairs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Chairs', { title: 'Search Results Chairs' });
});

module.exports = router;

/*GET flowers*/
router.get("/", Chairs_controllers.Chairs_view_all_Page);