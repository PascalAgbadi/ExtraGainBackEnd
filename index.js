const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = 4000

const UserModel = require('./models/User');

//middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/register', async (req, res) => {
    try {
      console.log(req.body)
      // Check If User Already Exist in Database
      const existingUser = await UserModel.findOne({ Email: req.body.Email }); // null
      if (existingUser) {
        return res.status(409).json({
          message: "Email Already Exists!!!!",
        });
      }
      // Save User Data to Database
      const userData = await UserModel.create(req.body);
      // Send User Data as Response
      res.status(201).json(userData);
    } catch (error) {
      // Catch User Login Errors and Return 500 - Internal Server Error
      res.status(500).json({
        message: error.message
      });
    }
  });


  app.post('/login', async (req, res) => {
    try {
      console.log(req.body)
      // Check If User Already Exist in Database
      const existingUser = await UserModel.findOne({ Email: req.body.Email }); // null
      if (existingUser) {
        return res.status(200).json(existingUser);
    
      }
      res.status(404).json({
        message: "Email does not exist!!!!",
      });
    } catch (error) {
      // Catch User Login Errors and Return 500 - Internal Server Error
      res.status(500).json({
        message: error.message
      });
    }
  });





mongoose.connect('mongodb+srv://newloginapp:Opaw3z6d5oDuniUV@cluster0.ggxxe.mongodb.net/extra-gain?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
  // Database Connected
  console.log("Database Connection Successful");
  app.listen(port, () => {
    console.log(`login app backend listening at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.log("Database Connection Failed =>", error.message);
});
