const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL || "mongodb+srv://mathesh-299:Mathesh290905@mathesh.3yj4b.mongodb.net/?retryWrites=true&w=majority&appName=Mathesh");

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log("DB connected");
});

connection.on('error', (err) => {
    console.error("Error:", err); // Log the actual error
});

module.exports = mongoose; // Corrected typo here
