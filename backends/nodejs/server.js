const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3001

app.use(cors())
app.use(express.json())

app.get("/helloworld", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, console.log(`Server started and listening on port: ${PORT}`))