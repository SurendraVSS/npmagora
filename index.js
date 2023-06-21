const express = require('express');
//const gfgFns = require('agoranpm')

const app = express();
const PORT = 3005;
app.use(express.static(__dirname));

// gfgFns.add(4,5);
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);

app.get('/home', function (req, res) {
    res.sendFile('/lobby.html', { root: __dirname })
})
