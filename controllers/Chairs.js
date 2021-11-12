var Chairs = require("../models/Chairs");

// List of all Chairs
exports.Chairs_list = async function(req, res) {
  res.send("NOT IMPLEMENTED: Chairs list");
  };
  // // for a specific Chair
  // exports.Chairs_detail = function (req, res) {
  // res.send("NOT IMPLEMENTED: Chairs detail: " + req.params.id);
  // };exports.Chairs_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
  result = await Chairs.findById(req.params.id);
  console.log(result);
  res.send(result);
  } catch (error) {
  res.status(500);
  res.send(`{"error": document for id ${req.params.id} not found`);
  }

// Handle Chairs create on POST.
exports.Chairs_create_post = async function (req, res) {
  console.log(req.body)
  let document = new Chairs();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"Chair_type":"Deck Chair, "Cost":35, "Color":"Black"}
  document.Chair_type = req.body.Chair_type;
  document.Color = req.body.Color;
  document.Cost = req.body.Cost;
  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Chairs delete form on DELETE.
exports.Chairs_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Chairs delete DELETE " + req.params.id);
};

// Handle Chairs update form on PUT.
exports.Chairs_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Chairs update PUT" + req.params.id);
};

// VIEWS
// Handle all view
exports.Chairs_view_all_Page = async function (req, res) {
  try {
    theChairs = await Chairs.find();
    res.render("Chairs", { title: "Chairs Search Results", results: theChairs });
  } 
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
