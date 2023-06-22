const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});



// docker run --name myapp_c_nodemon -p 4000:4000 --rm -v C:\Ahmed\Docker_NinjaNet\docker-crash-course-lesson-5\api:/app -v /app/nodemodules myapp:nodemon