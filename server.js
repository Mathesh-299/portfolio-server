require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const DBcon = require('./config/db'); // Ensure DB connection is correctly set up
const projects = require("./routes/ProjectRoutes");
// const Users = require("./routes/UserRouters");

app.use(express.json());
const port = process.env.PORT || 7778;
app.use(cors());
app.use('/projects', projects);
// app.use('/users', Users);

// Uncomment the following code if you want to use the root endpoint
// app.get('/', (req, res) => {
//     res.json({ message: "welcome" });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Corrected "sever" to "server"
});
