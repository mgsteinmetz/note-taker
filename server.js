// Dependencies

const express = require('express');

// Sets up the Express app

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//  Acquiring routes from route files

require('./routes/htmlRoute')(app);
require('./routes/apiRoute')(app);

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));