const express = require('express');
const path = require('path')
const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views', 'home.html')));
app.get('/bunner', (req,res) => res.sendFile(path.join(__dirname,'views', 'bunner.html')));
app.get('/cafetera', (req,res) => res.sendFile(path.join(__dirname,'views', 'cafetera.html')));
app.get('/macbook', (req,res) => res.sendFile(path.join(__dirname,'views', 'macbook.html')));
app.get('/samsung', (req,res) => res.sendFile(path.join(__dirname,'views', 'samsung.html')));
app.get('/smart', (req,res) => res.sendFile(path.join(__dirname,'views', 'smart.html')));

app.listen(port, () =>
    console.log('Server running in http://localhost:' + port));