const express = require('express')
const app = express()
const cors = require("cors")
const port =process.env.PORT || 3000
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log(process.env.db_user)
console.log(process.env.db_pass)


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const ourServiceCollection = client.db("Car_Doctor_DB").collection("ourServices");
    // console.log(ourServiceCollection)
    
    
    app.get("/ourServices",async(req,res)=>{
        const result = await ourServiceCollection.find().toArray()
        // console.log(result)
        res.send(result)
    })

    app.get("/ourServices/:id",async(req,res)=>{
      const id = req.params.id;
      const query = {_id :new ObjectId(id)};
      
      //options use for required items shows in frontEnd/UI
      const options = {
        // Include only the `title`,`price` and `service_id`  fields in the returned document
        //jeta jeta lagbe setate 1 dibe r jeta lagbena seta 0 dibe
        projection: { _id: 0, title: 1, service_id: 1,price:1 },
      };
      
      const result = await ourServiceCollection.findOne(query,options)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`)
  console.log(`Example app listening on port ${port}`)
})