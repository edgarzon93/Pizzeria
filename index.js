let express = require('express')
let app = express()
let port = 4000

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})