const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello!!!!')
})

app.get('/test', (req, res) => {
  res.send('Hello test!!!!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
