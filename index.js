
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('dotenv').config();
require('./src/routes/routes')(app);

const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});



app.listen(3050, () => {
    console.log(`Server Started at ${3050}`)
});

app.use('/api', routes);


app.get('/', (req, res) => {
  res.render('index', { title: 'Yourverify Code Challenge - NodeJS API' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;