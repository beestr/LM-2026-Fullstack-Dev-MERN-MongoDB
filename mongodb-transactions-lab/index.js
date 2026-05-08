const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/transactions', transactionRoutes);

// IMPORTANT: pakai replicaSet
mongoose
  .connect('mongodb://127.0.0.1:27017/bankingApp?replicaSet=myReplicaSet')
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });