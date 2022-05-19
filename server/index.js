const express = require("express");
const path = require("path");

const app = express();

//middleware
app.use("/", express.static(path.join(__dirname, "../client")));

//endpoints
app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/main.js"))
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})