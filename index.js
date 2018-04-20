const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const path           = require('path');
const methodOverride = require('method-override');
const publicRouter   = require('./routes/publicRouter');
const privateRouter  = require('./routes/privateRouter');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/public', publicRouter);
app.use('/private', privateRouter);
app.get('/', (req, res) => {
  console.log('At Homepage');
  // res.json('Welcome to the IveBin root dir');
  res.redirect('/public')
});


app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});
