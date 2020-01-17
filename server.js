const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use('/api/contact_email', require('./routes/contactEmail.js'))

const port = process.env.PORT || 5252
app.listen(port, () => console.log(`listenting at port: ${port}`))