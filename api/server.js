const express = require('express');
const app = express();
const path = require('path');
//const PORT = 3000;


app.use(express.static('public'));
app.set('view engine', 'ejs');


/* app.get('/', (req, res) =>
{
    // res.sendFile(path.resolve('public/index.html')); use this for static pages
    // res.render('index'); use this for EJS in the future

}); */


/* app.listen(PORT, () =>
{

console.log(`server is running at http://localhost:${PORT}`);

}); */

module.exports = app;
