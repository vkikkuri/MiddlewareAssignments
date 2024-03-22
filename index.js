const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(middleware);

app.get("/", (req, res) => {
    res.send('hello world');
});

var port = 3000

// Start the server on port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

