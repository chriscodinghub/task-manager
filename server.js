const express = require('express');
const path = require('path');
const apiRouter = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;

 
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRouter);


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// // reads the db 
// app.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// // // GET Route for wildcard
// // app.get('*', (req, res) =>
// //   res.sendFile(path.join(__dirname, '/public/index.html'))
// // );

// app.post('/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.body} request received to add a review`);
//   res.json({message: "test"})
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
  
