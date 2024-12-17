const express = require("express");
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());



const routes = require("./routes/index")

app.use("/", routes)



app.listen(3000, () => console.log("listening on port 3000!"));