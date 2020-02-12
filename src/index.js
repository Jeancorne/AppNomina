const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var expressLayouts=require("express-ejs-layouts");
app.set('port',process.env.PORT || 3000); 
app.listen(app.get('port'),() =>{
    console.log('El servidor corre en el puerto: ', app.get('port'));
})
app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressLayouts);
app.set('views', path.join(__dirname, '/public'));
app.use(express.static(__dirname + '/public'));
//Rutas
app.use(require('./rutas/rutas'));

