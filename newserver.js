const express = require('express')
const path=require('path')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/new.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})