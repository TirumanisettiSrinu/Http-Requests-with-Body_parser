import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit',  (req, res) => {
  bandname = req.body["email"] +" "+ req.body["name"];
  console.log(req.body);
  res.send(`<h1>Your Gmail and name are: ${bandname}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);  // Display the server's listening port on the console.
});
