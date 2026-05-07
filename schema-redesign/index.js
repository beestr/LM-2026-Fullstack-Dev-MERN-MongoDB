const mongoose = require("mongoose");

mongoose.connect("mongodb://adminhousehunt:adminhousehunt@ac-qkqzn7y-shard-00-00.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-01.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-02.nyucjxy.mongodb.net:27017/data-modeling?ssl=true&replicaSet=atlas-wu25a4-shard-0&authSource=admin&appName=HouseHuntCluster")
  .then(() => {
    console.log("Database Connected");
    runApp();
  })
  .catch((err) => console.log(err));


// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// ORDER SCHEMA
const orderSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);


// MODELS
const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);


// MAIN FUNCTION
async function runApp() {
  try {
    // create user
    const user = await User.create({
      name: "Belva",
      email: "belva@example.com",
      address: "Cirebon, Indonesia"
    });

    console.log("User created");

    // create order
    await Order.create({
      productName: "Laptop",
      price: 1200,
      quantity: 1,
      user: user._id
    });

    console.log("Order created");

    // populate data
    const orders = await Order.find().populate("user");

    console.log("Orders with populated user:");
    console.log(JSON.stringify(orders, null, 2));

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}