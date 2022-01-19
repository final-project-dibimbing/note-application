const express = require("express");

const bodyparser = require("body-parser");
//connect to multi server
const multiparty = require("connect-multiparty");
const MultiparyMiddleware = multiparty({ uploadDir: "./images" });

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "testing servernya",
  });
});

app.post("/uploads", MultiparyMiddleware, (req, res) => {
  console.log(req.files.upload);
});

app.listen(PORT, console.log(`Server has succesful and run in : ${PORT}`));

// console.log("second server");
