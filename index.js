// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
require('dotenv').config()

const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const path           = require('path');
const methodOverride = require('method-override');
const session        = require('express-session')

const publicRouter   = require('./routes/publicRouter');
const privateRouter  = require('./routes/privateRouter');
const authRouter     = require('./services/auth/authRouter');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('server_secret', process.env.SERVER_SECRET);

// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
app.use(session({
  secret: app.get('server_secret'),
  resave: false,
  saveUninitialized: false,
}));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
app.use('/auth', authRouter);

app.use('/public', publicRouter);
app.use('/private', privateRouter);
app.get('/', (req, res) => {
  console.log('At Homepage');
  // res.json('Welcome to the IveBin root dir');
  res.redirect('/public')
});

// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
// Allows app to send a json obj for unrecognized routes
// app.use('*', (err, req, res, next) => {
//   res.status(400).json({
//     error: err,
//     message: err.message
//   })
// })

// json object for server errors
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: err,
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});
