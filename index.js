const express = require('express')
const path = require('path')
const member = require('./Members')
const app = express()

const port = process.env.PORT|| 3000

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api',require('./routes/api/members'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

