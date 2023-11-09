var horse = require('../models/horse');
// List of all horse



// List of all Costumes
exports.horse_list = async function(req, res) {
    try{
    thehorses= await horse.find();
    res.send(thehorses);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    



// Handle a show all view
exports.horse_view_all_Page = async function(req, res) {
try{
thehorses = await horse.find();
res.render('horse', { title: 'horse Search Results', results: thehorses });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};







// for a specific horse.
exports.horse_detail = function(req, res) {
res.send('NOT IMPLEMENTED: horse detail: ' + req.params.id);
};


exports.horse_create_post = async function(req, res) {
console.log(req.body)
let document = new horse();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}

document.name = req.body.name;
document.color = req.body.color;
document.price = req.body.price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};





// Handle horse delete form on DELETE.
exports.horse_delete = function(req, res) {
res.send('NOT IMPLEMENTED: horse delete DELETE ' + req.params.id);
};
// Handle horse update form on PUT.
exports.horse_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: horse update PUT' + req.params.id);
};
