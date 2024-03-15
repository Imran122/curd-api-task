const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// routes attached with server

app.use("/api", require("./routes/userRoutes"));

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
