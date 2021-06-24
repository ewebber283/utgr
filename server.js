const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const path = require('path');


const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const session = require('express-sessions');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Games are cool',
  cookie: {

  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
};

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
