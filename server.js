const express = require('express')
const app = express()
require('dotenv').config();
// const PORT = process.env.PORT || 4000;
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
