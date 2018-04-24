// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
// Jason Seminara's 'js-node-sessions-lesson'
// https://git.generalassemb.ly/wdi-nyc-rover/js-node-sessions-lesson
require('dotenv').config()

// Package requirements
const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const path           = require('path');
const methodOverride = require('method-override');
const session = require('express-session')

// Router imports
const publicRouter   = require('./routes/publicRouter');
const privateRouter  = require('./routes/privateRouter');
const authRouter     = require('./services/auth/authRouter');

// Authentication-Authorization import
const AuthService    = require('./services/auth/authServices')

// Express function call and store
const app = express();
// Declare port
const PORT = process.env.PORT || 3000;

// Set view engine as EJS and join "views" path to root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set server_secret object key
app.set('server_secret', process.env.SERVER_SECRET);

// Ron Addy's Sample Express App Auth
// https://github.com/RonAddy/Sample_Express_App_Auth
// Get server secret
app.use(session({
  secret: app.get('server_secret'),
  resave: false,
  saveUninitialized: false,
}));

// Use morgan
app.use(logger('dev'));
// Join public dir to root dir
app.use(express.static(path.join(__dirname, 'public')));
// Body parser call for json object/array returns
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Set method override _method usage
app.use(methodOverride('_method'));

// From Ron Addy's Sample Express App Auth
// Mount Routers
app.use('/auth', authRouter);
app.use('/public', publicRouter);
// From Jason's "js-node-sessions-lesson"
app.use('/private', AuthService.loginRequired, privateRouter);
// Home route, redirect to public homepage
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

// Port listener and console logged response
app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});
