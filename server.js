// Dependencies Created
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Star Wars Characters Data

const characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350,
  },
];


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// Displays all characters
app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get('/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);
});

// Start Server
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
