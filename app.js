const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/query', (req, res) => {
    res.sendFile(__dirname + '/views/query.html')
})

app.get('/profiles', (req, res) => {
    res.sendFile(__dirname + '/views/profiles.html')
})

app.get('/profile1', (req, res) => {
    res.sendFile(__dirname + '/views/profile1.html')
})

app.get('/profile2', (req, res) => {
    res.sendFile(__dirname + '/views/profile2.html')
})

app.get('/profile3', (req, res) => {
    res.sendFile(__dirname + '/views/profile3.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))

