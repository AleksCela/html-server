import express from 'express'
import fsp from "fs/promises";
const app = express()
const port = 3000
const hostname = '127.0.0.1';

app.get('/', async (req, res) => {
    const webpage = await fsp.readFile('./public/index.html', 'utf-8')
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.send(webpage);
})

app.get('/index.css', async (req, res) => {
    const webpage = await fsp.readFile('./public/index.css', 'utf-8')
    res.status(200);
    res.setHeader('Content-Type', 'text/css');
    res.send(webpage);
})

app.get('/script.js', async (req, res) => {
    const webpage = await fsp.readFile('./public/script.js', 'utf-8')
    res.status(200);
    res.setHeader('Content-Type', 'text/javascript');
    res.send(webpage);
})



app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})