const sslRedirect = require('heroku-ssl-redirect')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

console.log(sslRedirect.default)
app.use(sslRedirect.default());
app.use(express.static(path.join(__dirname+'/client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
    console.log(__dirname+'/build/index.html')
}); 

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use('/api/contact_email', require('./routes/contactEmail.js'))

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`listenting at port: ${port}`)) 