const mongoose = require("mongoose");

mongoose.connect("mongodb://adminhousehunt:adminhousehunt@ac-qkqzn7y-shard-00-00.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-01.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-02.nyucjxy.mongodb.net:27017/data-modeling?ssl=true&replicaSet=atlas-wu25a4-shard-0&authSource=admin&appName=HouseHuntCluster")
  .then(() => {
    console.log("Database Connected");
    runApp();
  })
  .catch((err) => console.log(err));


// Schema
const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);


// Main function
async function runApp() {
  try {
    // clear old data (optional)
    await Sale.deleteMany({});

    // insert sample data
    await Sale.insertMany([
      { productName: "Laptop", category: "Electronics", price: 1200, quantity: 2 },
      { productName: "Mouse", category: "Electronics", price: 25, quantity: 5 },
      { productName: "Keyboard", category: "Electronics", price: 75, quantity: 3 },
      { productName: "T-Shirt", category: "Clothing", price: 20, quantity: 10 },
      { productName: "Jeans", category: "Clothing", price: 60, quantity: 4 },
      { productName: "Book", category: "Books", price: 15, quantity: 8 }
    ]);

    console.log("Sample data inserted");

    // Aggregation pipeline
    const result = await Sale.aggregate([
      {
        $match: {
          category: "Electronics"
        }
      },
      {
        $group: {
          _id: "$category",
          totalRevenue: {
            $sum: {
              $multiply: ["$price", "$quantity"]
            }
          },
          totalProducts: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          totalRevenue: 1,
          totalProducts: 1
        }
      },
      {
        $sort: {
          totalRevenue: -1
        }
      }
    ]);

    console.log("Aggregation Result:");
    console.log(result);

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}