const express = require('express')
var cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(require('./router'))
app.listen(3000, () => {
    console.log("Server running at port 3000");
})


module.exports = app;