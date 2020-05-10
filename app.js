//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
    name: {
        title: String,
        Content:String}
});

const Article = mongoose.model("Article", articleSchema);

//TODO
app.get("/articles", function(req,res){
Article.find({}, function(err, foundArticles){
  if(!err){res.send(foundArticles); }
  else{
    res.send(err);
  };

});

});

app.post("")

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
