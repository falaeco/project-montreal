let express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

app.use(bodyparse.urlencode({extended: true}));
app.set('view engine', 'ejs');

let proposition = [
    {
        id: 0,
        title: 'Make a skating rink at lafontaine park',
        author: 'Mark',
        description: 'Instead of draining all the water, we could make the park a winter wonderland'
    },
    {
        id: 2,
        title: 'The construction of the new Radio Canada tower generate a lot of traffic',
        author: 'Mirela',
        description: 'Some of the equipment could be moved out from the street'
    }
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("*", function(req, res){
    res.render("404");
});

app.listen(3000, function(){
    console.log("listening on local host port 3000");
});