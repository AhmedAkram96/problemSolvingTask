const express = require('express')
const bodyParser = require('body-parser');
const controllers = require('./controllers')
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/countNumbers/', controllers.countNumbers)
app.get('/api/alphabetIndex/', controllers.alphabetIndex)
app.get('/api/fewSteps/', controllers.fewSteps)

app.listen(port, () => {
    console.log(`seamlabs task app is listening on port ${port}`)
})

module.exports = app