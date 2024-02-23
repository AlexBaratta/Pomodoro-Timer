const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks')
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Only start the server once connected to MongoDB
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db, listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

