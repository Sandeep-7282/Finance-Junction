const connectToMongo=require('./db');
const express = require('express')
require('dotenv').config();
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors());
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));
connectToMongo();
const port = 4100;
app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send('Hello World!');

})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})