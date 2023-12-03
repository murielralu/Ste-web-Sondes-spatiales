const express = require('express');
const router = require("./app/router");

const port = 3000;

const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});