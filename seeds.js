//Is mongoose necessary
let mongoose = require('mongoose'),
    Proposition = require('./models/proposition'),
    Comment = require('./models/comment');

let propositions = [
  {
    title: "Make a skating rink at lafontaine park",
    image: "?image=1076",
    author: 'Mark Rivas',
    description: "Instead of draining all the water, we could make the park a winter wonderland"
  },
  {
    title: "The construction of the new Radio Canada tower generate a lot of traffic",
    image: "image=1078",
    author: 'Mirela Drew',
    description: "Some of the equipment could be moved out from the street"
  },
  {
    title: 'University accessible to anyone',
    image: 'image=1073',
    author: 'Joy Davis',
    description: "Education is the most important riches of society and the less fortunate should also have access to it. Education is not a premium!"
  },
  {
    title: 'Idea for place emily gamelin',
    image: 'image=1080',
    author: 'Melissa Webb',
    description: "Didn't go this year, but it'd be cool if there were some kind of community garden"
  },
  {
    title: 'Condominium development in hochelaga',
    image: 'image=1052',
    author: 'Kennett Leary',
    description: "Condominum developments is a threat to accomodation affordability"
  }
];

function seedDB() {
  Proposition.remove({}, function (err) {
    if (err) console.log(err);
    else{
      console.log('removed all propositions from the list');
      propositions.forEach(function (seed) {
        Proposition.create(seed, function (e, proposition) {
          if (e) console.log(e);
          else { 
            console.log("proposition added");
            Comment.create({
              text: "This is a great proposition",
              author: "Jerry Jeremy"
            }, function(e, comment){
              if(e) console.log(e);
              else{
                proposition.comments.push(comment);
                proposition.save();
              }
            });
          }
        });
      });
    }
  });
}



module.exports = seedDB;
