const express = require('express');
const morgan = require('morgan');
const app = express();

// 이런것을 미들웨어라고 볼 수 있다.
app.use(morgan('tiny'))
app.use((req, res, next) => {
    // console.log(req.method.toLowerCase())
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('i love dogs!')
    next();
})

const verifyPassword = (req, res, next) => {
    // console.log(req.query)
    const {password} = req.query
    if (password === 'chk'){
        next()
    }
    res.send('not equal password!')
}
// app.use((req, res, next) => {
//     console.log("first middle")
//     next();
// })
// app.use((req, res, next) => {
//     console.log("second middleware")
//     next();
// })

app.get('/', (req, res) => {
    res.send('home page!')
})

app.get('/dogs', (req, res) => {
    res.send('wof wof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('welcome~!, secreet page~')
})

app.use((req, res) => {
    res.status(404).send('not found')
})

app.listen(3000, () => {
    console.log('app is running on localhost:3000')
})