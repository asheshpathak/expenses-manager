const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "../client", "build")));

// Route all other requests to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});

// app.get("/",(req,res)=>{
//   res.send("Hello From Server")
// })

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
