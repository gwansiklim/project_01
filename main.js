const express = require('express')
const app = express()
const port = 1000
const Memo = require("./schemas/post")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));

const connect = require('./schemas')
connect();

const MemoRouter = require("./routers/index");
app.use("/api", [MemoRouter]);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/editpost', (req, res) => {
    res.render('editpost')
})

app.get('/detail/:_id', async (req, res) => {
    const { _id } = req.params;
    const memo = await Memo.findOne({ _id });
    res.render('detail', { memo });
})

app.get('/editpost/:_id', async (req, res) => {
    const { _id } = req.params;
    const memo = await Memo.findOne({ _id });
    res.render('editpost', { memo });
})

app.put('/editpost/:_id', async (req, res) => {
    const { name, title, write, password } = req.body;
    const { _id } = req.params;
    await Memo.updateOne({ _id }, { $set: { name: name, title: title, write: write, password: password } })
    res.json({ msg: '수정 되었습니다.' })
})

app.delete('/editpost/:_id', async (req, res) => {
    const { _id } = req.params;
    await Memo.deleteOne({ _id })
    res.json({ msg: '삭제 되었습니다.' })
})



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})