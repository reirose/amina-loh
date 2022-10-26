const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


require('./routes/index')(app);
// Смотреть ответ при отладке 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.enable('view cache')

// Связm с EJS
app.set('view engine', 'ejs');


// Слушать порт на котором локально работает машина 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static('styles'));
app.use(express.urlencoded({ extended: false }))


