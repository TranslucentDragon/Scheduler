const express = require('express');
const page = express();
const port = 12000;

// express
page.set('views', './View');
page.set('view engine', 'pug');

page.get('/', function (req, res) {
  res.render('msgScreen.pug');
})

page.use(express.static('./'));

page.listen(port, () => console.log(`Example app listening on port ${port}!`))
