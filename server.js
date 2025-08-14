// require

const express = require("express")
const path = require("path")

const app = express()

const port = 3000


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,"public","contact.html"))
})

app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`)
})