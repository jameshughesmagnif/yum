var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var MenuItemSchema = new Schema({
  title: String
})


var RestaurantSchema = new Schema({
  name: String,
  address: { street: String, zipcode: Number },
  yelpUrl: String,
  items: [MenuItemSchema]
});

var MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
  Restaurant: RestaurantModel,
  Menu: MenuItemModel
};
