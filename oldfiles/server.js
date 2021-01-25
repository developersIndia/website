const express = require("express");

// initializing the app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
