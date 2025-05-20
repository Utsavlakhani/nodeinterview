const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/User');
const Institue = require('./models/institute');
const StdSub = require('./models/std-sub');
const student = require('./models/student');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());


// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("John"));
app.get('/', (req, res) => {
  res.json({ message: 'Node.js API' });
});


app.post("/node/v1/user/create", (req, res,next) => {
  try{
    console.log("aa")
    res.status(200).json({message :"start"})
  }catch(error){
    return error
  }
});


app.post("/task/v1/institute/master/create",async(req,res,next)=>{
  try{

    const formdata = req.body
    const saveddata = await new Institue(formdata).save()

    res.status(200).json(saveddata)
  }catch(error){
    next(error)
  }
})

app.post("/task/v1/institute/master/retrive",async(req,res,next)=>{
  try{

    const formdata = req.body;
    const data = await Institue.aggregate([
  {
    '$match': {
      'Instiute': 'School'
    }
  }
])

    res.status(200).json(data)
  }catch(error){
    next(error)
  }
})

app.post("/task/v1/stb/sub/create",async(req,res,next)=>{
  try{

    const formdata = req.body;
    const data = await new StdSub(formdata).save()

    res.status(200).json(data)
  }catch(error){
    next(error)
  }
})



app.post("/task/v1/student/registration",async(req,res,next)=>{
  try{
    const formdata = req.body
    const data = await new student(formdata).save()

    res.status(200).json(data)
  }catch(error){
    next(error)
  }
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


