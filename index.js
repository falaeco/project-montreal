//Import statement
let express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    Proposition = require('./models/proposition'),
    seedData = require('./seeds');

seedData();
//Database initialization
let uri = 'mongodb://nicph:cart351@ds127428.mlab.com:27428/pmontrealdb';
mongoose.connect(uri, { useMongoClient: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected to mlab');
});
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//for temporary lorem picsum
//https://picsum.photos/200/300?image=0
let size = "300/300";

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - Show all projects
app.get("/project-list", function(req, res){
    Proposition.find({}, function(e, allPropositions){
        if(e){
            console.log(e);
        } else {
            res.render('project-list', {propositions:allPropositions, size: size});
        }
    });
});

//CREATE - Add a new project to the database
app.post("/project-list", function (req, res) {
    let newEntry = {
        title: req.body.title,
        image: req.body.image,
        author: req.body.author,
        description: req.body.description
    };
    //create new entry and safe to mlab
    Proposition.create(newEntry, function(e, allPropositions){
        if(e){
            console.log(e);
        } else {
            res.redirect('/project-list');
        }
    });
});

//NEW - Display the form to post a new project
app.get("/project-list/new", function(req, res){
    res.render("list-form");
});

//SHOW - show more information about a project
app.get("/project/:id", function(req, res){
    //find the project with the provided id
    Proposition.findById(req.params.id).populate("comments").exec(function(e, foundProposition){
        if(e){
            console.log(e);
        } else {
            res.render('show', {proposition: foundProposition});
        }
    });
});



app.get("*", function(req, res){
    res.render("landing");
});

app.listen(3000, function(){
    console.log("listening on local host port 3000");
});

