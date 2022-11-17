const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/src'+'/views');
app.use(express.static('src/public'));
app.use(express.json());
//app.use('/', routers);

app.get('/', (req, res)=>{
    res.render('inicio')
})

console.log(path.join(__dirname, 'src', 'routers'))
app.listen(3500, ()=>{
    console.log('Servidor iniciado');
})