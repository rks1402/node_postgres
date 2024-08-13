const express = require('express')
const app = express();
const port = 8000;

app.use(express.static(__dirname));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form/main.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})