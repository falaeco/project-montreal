let express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
//for temporary lorem picsum
//https://picsum.photos/200/300?image=0
let size = "300/300";
let propositions = [
    {
        title: 'Make a skating rink at lafontaine park',
        image: "image=1076",
        author: 'Mark Rivas',
        description: 'Instead of draining all the water, we could make the park a winter wonderland'
    },
    {
        title: 'The construction of the new Radio Canada tower generate a lot of traffic',
        image: "image=1078",
        author: 'Mirela Drew',
        description: 'Some of the equipment could be moved out from the street'
    },
    {
        title: 'University accessible to anyone',
        image: 'image=1073',
        author: 'Joy Davis'
    },
    {
        title: 'Idea for place emily gamelin',
        image: 'image=1080',
        author: 'Melissa Webb'
    },
    {
        title: 'Condominium development in hochelaga',
        image: 'image=1052',
        author: 'Kennett Leary'
    }
];

app.get("/", function(req, res){
    res.render("landing");
});

//testing purpose
app.get("/project-list", function(req, res){
    res.render("project-list", {
        propositions: propositions,
        size: size
    });
});

app.post("/project-list", function (req, res) {
    let newEntry = {
        id: propositions.length,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    };
    propositions.push(newEntry);
    res.redirect("/project-list");
});

app.get("/project-list/new", function(req, res){
    res.render("list-form");
});



app.get("*", function(req, res){
    res.render("landing");
});

app.listen(3000, function(){
    console.log("listening on local host port 3000");
});

