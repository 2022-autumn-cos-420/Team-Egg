const express = require("express");
const cors = require("cors");
var testAPIRouter = require("./routes/testAPI");
const port = 7080;

var app = express();

app.use(cors());
app.use("/testAPI", testAPIRouter);




app.listen(port, () => {
    console.log(`Dev Server is up on port ${port} (dev)`);
});
