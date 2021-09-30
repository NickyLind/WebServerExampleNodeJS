const path = require('path');
//? this is a core node module so no installation is necessary
const express = require('express');
//? express is a single function rather than an object like more node packages

// console.log(__dirname);
// console.log(path.join(__dirname, '../public/index.html'));
//? path.join() will combine the __dirname directory with a string representing where you want to move locally from that directory
const publicDirectoryPath = path.join(__dirname, '../public') 

const app = express();

app.use(express.static(publicDirectoryPath))
//? these methods are how you hook a public directory path tot he root route of the server (index.html)


// app.get('', (req, res) => {
//   res.send('<h1>Weather</h1>')
// });
//? let's us configure what the server will do when someone tries to get the resource at a specific URL
//? the first function parameter is the route ('' = root)
// ? the second parameter is a callback function that describe what we want the server to do at the route. 
//? the first argument passed in, is an object containing information about the incoming request to the sever ()
//? the second argument is a response, which contains a bunch of methods allowing us to customize what we're going to send back to the requester 

// app.get('/help', (req, res) => {
//   res.send([
//     {name: 'Andrew'},
//     {name: 'Nick'}
//   ])
// });

// app.get('/about', (req, res) => {
//   res.send('<h1 style="color:brown;text-align:center">About</h1>')
// });

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    lcoation: 'Duluth, Minnesota'
  })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
//? starts up the server and has it listen on a specific port
//? the second parameter is an optional callback function which just runs when the server is up and running