const express = require('express')
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);
console.log(__dirname);
app.use(express.static('public'))
// app.use('/css', express.static('public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.html', {status: 0})
})

app.get('/:status', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/index.html', {status})
})

app.get('/0/query', (req, res) => {
    res.render(__dirname + '/views/query.html', {status: 0})
})

app.get('/:status/query', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/query.html', {status})
})

app.get('/0/profiles', (req, res) => {
    res.render(__dirname + '/views/profiles.html', {status: 0})
})

app.get('/:status/profiles', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/profiles.html', {status})
})

app.get('/:status/profile1', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/profile1.html', {status})
})

app.get('/:status/profile2', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/profile2.html', {status})
})

app.get('/:status/profile3', (req, res) => {
    const status = req.params.status;
    res.render(__dirname + '/views/profile3.html', {status})
})

app.listen(port, () => console.info(`App listening on port ${port}`))

