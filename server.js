const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '10mb', extended: true}))

const port = process.env.PORT || 5252
app.listen(port, () => console.log(`listenting at port: ${port}`))