const express = require("express");
const app = express()

// 매서드의 작동 방식은 요청이 들어오면 콜백이 실행되는 것.
// app.use((req, res) => {
//     console.log("we got new request")
//     res.send('<h1>This is my webpage!</h1>')
// })

// 라우팅
// /cats => meow!
// /dogs => woof
// '/'
app.get('/', (req, res) => {
    res.send("this is my first home page! by express.js")
})

app.get('/r/:submysite', (req, res) => {
    const { submysite } = req.params;
    res.send(`<h1>Browsing the ${submysite} subsite`)
})

app.get('/r/:submysite/:ID', (req, res) => {
    const { submysite, ID } = req.params;
    res.send(`<h1>viewing the by id: ${ID} on ${submysite} subsite`)
})

app.get('/s/:search', (req, res) => {
    const { search } = req.params;
    // console.log(search)
    const { q } = req.query;
    if(!q){
        res.send("nothing!")
    }
    res.send(`<h1>${search} res for: ${q}</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('Meow!!')
});

app.get('/dogs', (req, res) => {
    res.send('woof!')
});

app.get('*', (req, res) => {
    res.send('i can`t find this!!! site!! please retry~~ :)')
});

// 서버가 요청을 받도록 하는게 우리의 주된 임무
// 요청을 받을때 포트가 필요하다
app.listen(3000, () => {
    console.log("listen on port 3000!")
})