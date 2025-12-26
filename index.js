const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
{

res.send('<h1> Jewlery for those who write their own story</h>');

});


app.listen(PORT, () =>
{

console.log('server is running at http://localhost:${PORT}');

});
