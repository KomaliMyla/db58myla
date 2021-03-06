var Chairs = require("../models/Chairs");

// List of all Chairs
exports.Chairs_list = async function(req, res) {
  res.send("NOT IMPLEMENTED: Chairs list");
  };
  // // for a specific Chair
  // exports.Chairs_detail = function (req, res) {
  // res.send("NOT IMPLEMENTED: Chairs detail: " + req.params.id);
  // };
  exports.Chairs_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
  result = await Chairs.findById(req.params.id);
  console.log(result);
  res.send(result);
  } catch (error) {
  res.status(500);
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };

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

  // Handle Chairs delete on DELETE.
  exports.Chairs_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Chairs.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Chairs update form on PUT.

exports.Chairs_update_put = async function (req, res) {  
  console.log(`update on id ${req.params.id} 
  with body ${JSON.stringify(req.body)}`);  
  try {    let toUpdate = await Chairs.findById(req.params.id);

  
      // Do updates of properties   
   if (req.body.Chairs_type)     
   toUpdate.Chairs_type = req.body.Chairs_type;   
   if (req.body.color) toUpdate.color = req.body.color;    
  if (req.body.cost) toUpdate.cost = req.body.cost;   
   let result = await toUpdate.save();   
   console.log("Sucess " + result); 
     res.send(result);  } 
  catch (err) {   
   res.status(500);  
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);  }};
  


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

  // Handle a show one view with id specified by query
  exports.Chairs_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Chairs.findById( req.query.id)
    res.render('Chairsdetail',
   { title: 'Chairs Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

    // Handle building the view for creating a chairs.
  // No body, no in path parameter, no query.
  // Does not need to be async
  exports.Chairs_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Chairscreate', { title: 'Chairs Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating chairs.
    // query provides the id
  exports.Chairs_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Chairs.findById(req.query.id)
    res.render('Chairsupdate', { title: 'Chairs Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };   

    // Handle a delete one view with id from query
  exports.Chairs_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Chairs.findById(req.query.id)
    res.render('Chairsdelete', { title: 'Chairs Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };