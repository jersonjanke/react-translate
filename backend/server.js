const express = require("express");
const bodyParse = require("body-parser");

const app = express();
app.use(bodyParse.json());
const port = 5000;

let records = [
  {
    id: 1,
    recordName: "Build an App",
    artistName: "Artist name",
    description: "Descripton",
  },
];

app.get("/api/records", (req, res) => {
  res.send(records);
});

app.post("/api/records", (req, res) => {
  const newRecord = {
    id:
      records.reduce((acc, item) => {
        return item.id > acc ? item.id : acc;
      }, 0) + 1,
    ...req.body,
  };

  records.push(newRecord);
  res.send(newRecord);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
