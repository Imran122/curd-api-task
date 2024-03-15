const express = require("express");

const app = express();

// routes attached with server

app.use("/api", require("./routes/userRoutes"));

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
