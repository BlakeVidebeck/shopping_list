const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB config
const db = require('./config/keys').MongoURI;

// Connect to mongo
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
