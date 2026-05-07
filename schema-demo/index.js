const mongoose = require("mongoose");

// connect MongoDB Atlas
mongoose.connect("mongodb://adminhousehunt:adminhousehunt@ac-qkqzn7y-shard-00-00.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-01.nyucjxy.mongodb.net:27017,ac-qkqzn7y-shard-00-02.nyucjxy.mongodb.net:27017/data-modeling?ssl=true&replicaSet=atlas-wu25a4-shard-0&authSource=admin&appName=HouseHuntCluster")
.then(() => {
    console.log("Database Connected");
    runApp();
})
.catch((err) => console.log(err));

// schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// model
const User = mongoose.model("User", userSchema);

// function
async function runApp() {
    try {
        // insert sample data
        const newUser = new User({
            name: "Belva",
            email: "belva@example.com",
            age: 20
        });

        await newUser.save();
        console.log("Data inserted successfully");

        // retrieve data
        const users = await User.find();
        console.log("Retrieved Data:");
        console.log(users);

        mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
}