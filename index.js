const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    console.log('Server called');
    res.send('Hello World!');
})

app.listen(port, '0.0.0.0', function() {
    console.log('Running on port ' + port);
})