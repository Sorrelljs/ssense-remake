const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const logger = require('morgan');

app.use((req, res, next) => {
    console.log(`📝 ${req.method} – ${req.path} – ${new Date().toString()}`);
    next();
  });

  app.use(express.static('public'))

  app.use(logger('dev'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/menswear', (req, res)=> {
    res.render('menswear')
})



const DOMAIN = 'localhost'
const PORT = '8080'


app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`)
});

