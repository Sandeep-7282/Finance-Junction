const connectToMongo=require('./db');
const express = require('express')
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors());
connectToMongo();
const port = 4100;
app.get('/', (req, res) => {
  res.send('Hello World!');
  res.setHeader("Access-Control-Allow-Credentials","true");
})
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})