const express = require('express');
const app = express();
const path = require('path')
const database = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// console.log(app.set('view engine', 'ejs'))

app.get('/', (req, res) => {
    res.render('home', {name: 'home'})
})

app.get('/r/:subsite', (req, res) => {
    const { subsite } = req.params;
    // res.render('subsite', { subsite })
    const data = database[subsite];
    if (data) {
        res.render('subsite', { ...data });
    } else {
        res.render('notfound', { subsite })
    }
})

app.get('/cats', (req, res) => {
    cats = [
        '야옹이', '양이', '고양이', '캣우먼', '냥냥이'
    ]
    res.render('cats', { cats })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10)
    res.render('random', {rand: num, name: 'random'})
})

app.listen(3000, () => {
    console.log("listen on port 3000")
})