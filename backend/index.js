const express = require("express"); // importing express
const cors = require("cors");
const app = express(); // create an express application
const port = 5000; // definte a port

app.use(express.json());

const { myRouter } = require("./routes");

app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello there world!");
});

app.use("/", myRouter);

app.listen(port, () => {
  // run the app on the port
  console.log(`Example app listening at http://localhost:${port}`);
});
