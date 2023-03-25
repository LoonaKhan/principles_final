/*
Web server.

Locally, PixiJS requires files to be served via a web server.
This is because web browsers typically prevent loading local files on locally loaded webpages.
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.listen(port, () => {
    console.log(`Online on port: ${port}`)
})