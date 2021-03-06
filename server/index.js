const express = require("express");
const app = express();
const path = require("path");

app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '926b79023c1b4939bba70d62b7609d6a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

globalId = 2;

const cats = [{id: 0, name: "Nyan Cat", imageURL: "https://cdn.vox-cdn.com/thumbor/SiIyeqmKIJGcOJccz94pHgwmgvQ=/0x0:1400x1400/1200x800/filters:focal(588x588:812x812):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68837730/poptart1redrainbowfix_1.0.gif", description: "Meowmeowmeowmeowmeowmeowmeowmeowmeow"},
            {id: 1, name: "King", imageURL: "https://static01.nyt.com/images/2020/03/31/arts/television/31xp-tigerking/31xp-tigerking-mobileMasterAt3x.jpg", description: "This cat needs a new home after losing his previous owner."}]

//middleware
app.use("/", express.static(path.join(__dirname, "../client")));

//endpoints
app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/main.js"))
})

app.get("/cats", (req, res) => {
    res.status(200).send(cats)
})

app.delete("/adopt/:id", (req, res) => {
    let id = +req.params.id
    cats.splice(id, 1)
    res.status(200).send(cats)
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})