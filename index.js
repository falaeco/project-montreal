let express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let propositions = [
    {
        id: 0,
        title: 'Make a skating rink at lafontaine park',
        author: 'Mark',
        description: 'Instead of draining all the water, we could make the park a winter wonderland'
    },
    {
        id: 1,
        title: 'The construction of the new Radio Canada tower generate a lot of traffic',
        author: 'Mirela',
        description: 'Some of the equipment could be moved out from the street'
    }
];

app.get("/", function(req, res){
    res.render("landing");
});

//testing purpose
app.get("/project-list", function(req, res){
    res.render("project-list", {propositions: propositions});
});

app.get("/submit", function(req, res){
    res.render("submit");
});

app.post("/addtolist", function(req, res){
    let newEntry = {
        id:  propositions.length,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    };
    propositions.push(newEntry);
    res.redirect("/project-list");
})
app.get("*", function(req, res){
    res.render("404");
});

app.listen(3000, function(){
    console.log("listening on local host port 3000");
});