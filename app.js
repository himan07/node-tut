const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  res.status(200).json({
    data: {
      firstname: "Himanshu",
      lastname: "yadav",
      email: "himan9714@gmail.com",
    },
    message: "Hello from the server side!",
    method: "GET",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}...`);
});
