//Is mongoose necessary
let mongoose = require('mongoose'),
  Proposition = require('./models/proposition');

let propositions = [
  {
    title: "Bring back the skating rink at parc lafontaine!",
    type: 'PROP',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lafontaine_hiver.JPG",
    author: 'Mark Rivas',
    description: "Instead of draining all the water, we could make the park a winter wonderland. I remember the euphoria that I had when I was a kid... This place was absolutely wonderful!"
  },
  {
    title: "The construction of the new Radio Canada tower generate a lot of traffic",
    type: 'IMP',
    image: "https://img.radio-canada.ca/2014/06/17/635x357/140617_le6ea_rci-construction-workers_sn635.jpg",
    author: 'Mirela Drew',
    description: "Many of the unused equipments are left onto our street, delaying the westbound traffic about the construction area. I believe some of the vehicules and machinery could be move onto the empty parking just by the tower."
  },
  {
    title: 'University accessible to anyone',
    type: 'PROP',
    image: 'https://af-production.s3.amazonaws.com/photos/images/76458/original/books.jpg',
    author: 'Joy Davis',
    description: "Education is the most important riches of society and the less fortunate should also have access to it. Education is not a premium! Most of northern european countries offer free tuitions. Let's take the lead and invest into our next generation."
  },
  {
    title: 'Idea for place emily gamelin',
    type: 'IMP',
    image: 'http://medias.quartierdesspectacles.com/blog/20150826_jardins_gamelin/md_800x450.jpg',
    author: 'Melissa Webb',
    description: "Didn't go this year, but it'd be cool if there were some kind of community garden. There could be also special activities on the weekend. I believe this could be a fantastic opportunity to spend some time with my kids"
  },
  {
    title: 'New bike lane on René-Levesque',
    type: 'PROP',
    image: 'https://i0.wp.com/averagejoecyclist.com/wp-content/uploads/2010/10/Post-Lachine-Canal-end1.jpg?resize=756%2C400&ssl=1',
    author: 'Janon Smath',
    description: "I know there is one on Maisoneuve but this would helps to improve the traffic flow of the bikes."
  },
  {
    title: 'Grafitis walls on place des arts',
    type: 'PROP',
    image: 'https://wall2wallmtl.files.wordpress.com/2015/08/new1508-belhumeur-duguay-mu.jpg?w=470&h=313',
    author: 'Jérémie Décarie',
    description: "The city could install some permanent walls dedicated to grafiti where anybody could exerce and paint on it. There are too fews of these places in Montreal, and we can see that they are very popular."
  },
  {
    title: 'The broken traffic light at the intersection of Stanley and Maisoneuve is causing dangerous accidents.',
    type: 'IMP',
    image: 'http://www.autoparcstanley.com/images/3.jpg',
    author: 'Eisen Erys',
    description: "I realized that the traffic light at this interesection is not working most of time and the city should fix it as soon as possible, there is a lot of traffic."
  },
  {
    title: 'Tree hidding the STOP sign on Peel and Dr. Penfield',
    type: 'IMP',
    image: 'http://spacing.ca/montreal/wp-content/uploads/sites/5/2013/05/15-600x396.jpg',
    author: 'Elisabeth Anemos',
    description: "A large tree is hidding a stop sign on this interesection and most of the bikes and cars don't event see it. I reckon this could be an easy fix to make the street safer for all."
  },
  {
    title: 'The bike path near the construction on Chomedey.',
    type: 'IMP',
    image: 'http://wpmedia.montrealgazette.com/2016/06/montreal-que-june-6-2016-a-construction-worker-walks.jpeg?quality=55&strip=all',
    author: 'Shroud Brad',
    description: "There is a building beeing constructed on Chomedey for 3 months and there's always some gravel on the road. This a dangerous for the bikes."
  },
  {
    title: 'More picnic tables near canal Lachine',
    type: 'PROP',
    image: 'https://i.cbc.ca/1.3238839.1442942825!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/lachine-canal-montreal-weather.jpg',
    author: 'Javier Hiverst',
    description: "I love this trail but more tables to rest or have picnic would be very nice."
  },
  {
    title: 'P-D-A christmas market and collaboration with complex les ailes.',
    type: 'PROP',
    image: 'https://cdn.mtlblog.com/u/2017/12/04/1bfaa47d810dddd8bd8f410b3680997d0db7b3d6.jpg_1200x630.jpg',
    author: 'Mark Brown',
    description: "This would be useful, especially in winter or when it's raining when we go buy some stuff on the complex Desailes."
  },
  {
    title: 'More Bixi station in the south of canal Lachine',
    type: 'PROP',
    image: 'https://www.longueuil.quebec/sites/longueuil/files/styles/image_decorative/public/21333_bixi.jpg?itok=Tzee5dx9',
    author: 'Bruno Larry',
    description: "As a daily user of the bixi, it would be nice to have more station to pickup or park bikes in the South-West of canal Lachine. The closest one are by Verdun metro station which is pretty far from that area. I believe many could use of additional bixi stations"
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
