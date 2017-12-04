//Is mongoose necessary
let mongoose = require('mongoose'),
  Proposition = require('./models/proposition');

let propositions = [
  {
    title: "Make a skating rink at lafontaine park",
    type: 'PROP',
    image: "?image=1076",
    author: 'Mark Rivas',
    description: "Instead of draining all the water, we could make the park a winter wonderland"
  },
  {
    title: "The construction of the new Radio Canada tower generate a lot of traffic",
    type: 'IMP',
    image: "image=1078",
    author: 'Mirela Drew',
    description: "Some of the equipment could be moved out from the street"
  },
  {
    title: 'University accessible to anyone',
    type: 'PROP',
    image: 'image=1073',
    author: 'Joy Davis',
    description: "Education is the most important riches of society and the less fortunate should also have access to it. Education is not a premium!"
  },
  {
    title: 'Idea for place emily gamelin',
    type: 'IMP',
    image: 'image=1080',
    author: 'Melissa Webb',
    description: "Didn't go this year, but it'd be cool if there were some kind of community garden"
  },
  {
    title: 'Condominium development in hochelaga',
    type: 'IMP',
    image: 'image=1052',
    author: 'Kennett Leary',
    description: "Condominum developments is a threat to accomodation affordability"
  },
  {
    title: 'New bike lane on René-Levesque',
    type: 'PROP',
    image: 'image=1052',
    author: 'Janon Smath',
    description: "I know there is one on Maisoneuve but this would helps to improve the traffic flow of the bikes."
  },
  {
    title: 'Grafitis walls on place des arts',
    type: 'PROP',
    image: 'image=1052',
    author: 'Weeman Catas',
    description: "The city could install some permanent walls dedicated to grafiti where anybody could exerce and paint on it."
  },
  {
    title: 'Fix the traffic light at the intersection of Stanley and Maisoneuve',
    type: 'IMP',
    image: 'image=1052',
    author: 'Eisen Erys',
    description: "I realized that the traffic light at this interesection is not working most of time and the city should fix it as soon as possible, there is a lot of traffic."
  },
  {
    title: 'Trim the tree hidding the STOP sign on Wood - Maisoneuve',
    type: 'IMP',
    image: 'image=1052',
    author: 'Elisabeth Anemos',
    description: "A large tree is hidding a stop sign on this interesection and most of the bikes and cars don't event see it."
  },
  {
    title: 'Please, clean the bike path near the construction on Chomedey.',
    type: 'IMP',
    image: 'image=1052',
    author: 'Shroud Brad',
    description: "There is a building beeing constructed on Chomedey for 3 months and there's always some gravel on the road. This a dangerous for the bikes."
  },
  {
    title: 'More picnic tables near canal Lachine',
    type: 'PROP',
    image: 'image=1052',
    author: 'Javier Hiverst',
    description: "I love this trail but more tables to rest or have picnic would be very nice."
  },
  {
    title: 'Outlets for eboards on the mains bikes path',
    type: 'PROP',
    image: 'image=1052',
    author: 'Kassy Neisto',
    description: "Montreal would be a better city if we could charge our electrical boards on the main bikes path of the city. Like Maisoneuve or canal Lachine."
  },
  {
    title: 'More trees on Chemin de Casson.',
    type: 'IMP',
    image: 'image=1052',
    author: 'Smath Cud',
    description: "This street is very nice but there is plenty of space to add more trees. Why don't we have more ?"
  },
  {
    title: 'A covered bike station near the Complex Desailes.',
    type: 'PROP',
    image: 'image=1052',
    author: 'Mark Brown',
    description: "This would be useful, especially in winter or when it's raining when we go buy some stuff on the complex Desailes."
  },
  {
    title: 'Bridge over the railroad on Belgrav',
    type: 'PROP',
    image: 'image=1052',
    author: 'Danny Rock',
    description: "I would love to have another bridge over the rail road, down on Balgrav Avenue."
  },
  {
    title: 'More Bixi station in the south of canal Lachine',
    type: 'PROP',
    image: 'image=1052',
    author: 'Bruno Larry',
    description: "As a daily user of the bixi, that will be nice to have more station to pickup or park bikes in the South-West of canal Lachine."
  },
  {
    title: 'Quality of the road on Rue Rachel Est, near park Lafontaine',
    type: 'IMP',
    image: 'image=1052',
    author: 'Stass Liro',
    description: "I don't know what happened for the last two months on this street but there are a lot of cracks on potholes all over the road near the park."
  }
];

function seedDB() {
  Proposition.remove({}, function (err) {
    if (err) console.log(err);
    else {
      console.log('removed all propositions from the list');
      propositions.forEach(function (seed) {
        Proposition.create(seed, function (e) {
          if (e) console.log(e);
          else console.log("proposition added");
        });
      });
    }
  });
}



module.exports = seedDB;
