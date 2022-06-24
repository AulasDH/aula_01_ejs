const express = require('express');
const path = require('path');
const foodsRoutes = require('./routes/foods.routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/foods', foodsRoutes);

app.listen(3333, () => {
    console.log('Minha aplicação esta voando na porta 3333 ✈️');
});