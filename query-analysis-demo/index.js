const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/queryAnalysisDB')
  .then(() => {
    console.log('Connected to MongoDB');
    runDemo();
  })
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
});

const Product = mongoose.model('Product', productSchema);

async function runDemo() {
  try {
    // clear old data
    await Product.deleteMany({});

    // sample data 30 records
    const sampleProducts = [];

    for (let i = 1; i <= 30; i++) {
      sampleProducts.push({
        name: `Product ${i}`,
        category: i % 2 === 0 ? 'Electronics' : 'Books',
        price: Math.floor(Math.random() * 500) + 50,
        stock: Math.floor(Math.random() * 100)
      });
    }

    await Product.insertMany(sampleProducts);
    console.log('Sample data inserted');

    // QUERY BEFORE INDEX
    console.log('\n=== QUERY BEFORE INDEX ===');
    let result = await Product.find({ category: 'Electronics' }).explain('executionStats');
    console.log(JSON.stringify(result.executionStats, null, 2));

    // CREATE SINGLE INDEX
    await Product.collection.createIndex({ category: 1 });
    console.log('\nSingle index created on category');

    // QUERY AFTER SINGLE INDEX
    console.log('\n=== QUERY AFTER SINGLE INDEX ===');
    result = await Product.find({ category: 'Electronics' }).explain('executionStats');
    console.log(JSON.stringify(result.executionStats, null, 2));

    // SORT QUERY
    console.log('\n=== SORT QUERY ===');
    result = await Product.find({ category: 'Electronics' })
      .sort({ price: 1 })
      .explain('executionStats');
    console.log(JSON.stringify(result.executionStats, null, 2));

    // COMPOUND INDEX
    await Product.collection.createIndex({ category: 1, price: 1 });
    console.log('\nCompound index created on category + price');

    // QUERY AFTER COMPOUND INDEX
    console.log('\n=== QUERY AFTER COMPOUND INDEX ===');
    result = await Product.find({ category: 'Electronics' })
      .sort({ price: 1 })
      .explain('executionStats');
    console.log(JSON.stringify(result.executionStats, null, 2));

    console.log('\nLab completed successfully');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}