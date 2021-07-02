const express = require('express');

const app = express();
const port = 4000;
const path = require('path');

app.get('/', (req, res) =>{
    console.log('hola')
    const filePath = path.join(__dirname, 'src','views', 'home.html');
    res.sendFile(filePath)
})

const publicPath = path.join('src', 'public');
app.use(express.static(publicPath))

app.listen(port);