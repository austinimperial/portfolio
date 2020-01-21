const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

console.log(__dirname+'/client/build')
app.use(express.static(path.join(__dirname+'/client/build')));

// app.post('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/public/index.html'))
//     console.log(__dirname+'/build/index.html')
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/public/index.html'))
//     console.log(__dirname+'/build/index.html')
// });

// app.post('*', (req,res) => {
//     console.log('adakf;laskdf;alksdf;a')
// })

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use('/api/contact_email', require('./routes/contactEmail.js'))


const port = process.env.PORT || 5001
app.listen(port, () => console.log(`listenting at port: ${port}`))