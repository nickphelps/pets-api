var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/api/owners', function(req,res, nextFn) {
    console.log(owners)
    res.json(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', function(req, res, nextFn) {
    let myArray = []
    const myID = req.params.id
    console.log('Entered URL ID...',myID)
    for (let i = 0; i < owners.length; i++) {
        if (owners[i].id = myID) {
            myArray = owners[i]
        }
    }
    console.log(myArray)
    res.json(myArray)
})

// POST /api/owners
app.post('/api/owners', function(req, res, nextFn) {
    myAddedObject = req.body
    owners.push(myAddedObject)
    console.log(owners)
})

// PUT /api/owners/:id
app.put('/api/owners/:id', function(req, res, nextFn) {
    const myID = req.params.id
    const updatedText = req.body.name //going to change the id

    for (let i = 0; i < owners.length; i++) {
        if (owners[i].id == myID) {
            owners[i].name = updatedText
        }
    }
    console.log(owners)
})

// DELETE /api/owners/:id

// GET /api/owners/:id/pets

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})