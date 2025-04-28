const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Product = require('./models/product.model.js');
app.use(express.json());


app.get('/testapi',(req,res)=>{
    res.send("hello snega")
})

app.listen(3000)

app.post('/api/products', async (req, res) => {
    try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  
  })

  app.get('/api/products', async (req, res) => {
    try{
      const products = await Product.find({});
      res.status(200).json(products);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  })
  app.get('/api/products/:id', async (req, res) => {
    try{
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  })
  
  app.put('/api/products/:id', async (req, res) => {
    try{
     const {id} = req.params;
     const product = await Product.findByIdAndUpdate(id, req.body);
     if(!product){
      return res.status(404).json({message: 'Product not found'});
     }
     const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  })

  app.delete('/api/products/:id', async (req, res) => {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if(!product){
        return res.status(404).json({message: 'Product not found'});
      }
      res.status(200).json({message: "Product Deleted Succesfully"})
    }
    catch(error){
      res.status(500).json({message: error.message});
    }
  })
  
mongoose.connect('mongodb+srv://snegapriya4:KHcMHVFGVXfhrmj1@cluster0.ptqrk0r.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("connected"));