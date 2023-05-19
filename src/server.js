const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/truckbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a schema for the user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});
const User = mongoose.model('User', userSchema);

// Create the Express app
const app = express();
app.use(express.json());

// Define the API endpoint to handle user data submission
app.post('/users', async (req, res) => {
  try {
    // Create a new user object using the submitted data
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    // Save the user data to the database
    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving user data' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
