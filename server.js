/*const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3009;

// MongoDB Atlas connection string
const uri = 'mongodb+srv://abhi_13:Ab1312@cluster0.av4w3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update with your credentials

// Connect to MongoDB Atlas
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("Could not connect to MongoDB Atlas", err));

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    },
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files

// Define Event model
const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    ticketPrice: Number,
    time: String,
    image: String,
});

const Event = mongoose.model('Event', eventSchema);

// Endpoint to create a new event with image upload
app.post('/api/events', upload.single('image'), (req, res) => {
    const newEvent = new Event({
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        ticketPrice: req.body.ticketPrice,
        time: req.body.time,
        image: req.file.path, // Store the path of the uploaded image
    });

    newEvent.save()
        .then(() => res.status(201).send('Event created successfully!'))
        .catch(err => res.status(400).send('Error creating event: ' + err));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/
const express = require('express');
const app = express();
const collegeRoutes = require('./routes/collegeroutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/colleges', collegeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


