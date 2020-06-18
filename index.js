const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on ${port}...`));
