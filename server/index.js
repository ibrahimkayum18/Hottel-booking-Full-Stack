const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pqcfxjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersCollection = client.db("TravelBookings").collection("users");
    const busesCollection = client.db("TravelBookings").collection("buses");
    const hotelCollection = client.db("TravelBookings").collection("hotels");

    //For users api only
    //POST users
    app.post("/users", async (req, res) => {
      const data = req.body;
      const query = {
        email: data.email,
      };
      const isExists = await usersCollection.findOne(query);
      if (isExists) {
        return res.send({ message: "User already exist" });
      }
      const result = await usersCollection.insertOne(data);
      res.send(result);
    });

    //get all users
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    //get single user
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    //delete user
    app.delete('/users/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await usersCollection.deleteOne(query)
        res.send(result)
    })



    //For buses api only
    //post buses
    app.post('/buses', async(req, res) => {
        const data = req.body;
        const result = await busesCollection.insertOne(data)
        res.send(result)
    })

    //get buses api
    app.get('/buses', async(req, res) => {
        const result = await busesCollection.find().toArray()
        res.send(result)
    })

    //get single bus
    app.get('/buses/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id:new ObjectId(id)}
        const result = await busesCollection.findOne(query)
        res.send(result)
    })

    //delet bus api
    app.delete('/buses/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await busesCollection.deleteOne(query)
        res.send(result)
    })


    //For Hotels only
    //post hotels
    app.post('/hotels', async(req, res) => {
        const body = req.body
        const result = await hotelCollection.insertOne(body)
        res.send(result)
    })

    //get all hotels
    app.get('/hotels', async(req, res) => {
        const result = await hotelCollection.find().toArray()
        res.send(result)
    })

    //get single hotel
    app.get('/hotel/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await hotelCollection.findOne(query)
        res.send(result)
    })

    //Delete hote
    app.delete('/hotels/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await hotelCollection.deleteOne(query)
        res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Travelling App Server is Running");
});

app.listen(port, () => {
  console.log(`Travelling app listening on port ${port}`);
});
