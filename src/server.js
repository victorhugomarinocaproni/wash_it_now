const express  = require('express');
const routes = require('./routes.js');
const database = require('./database/index.js');

const PORT = process.env.APP_PORT || 8080;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
    console.log(`Server is now running on PORT: ${PORT}`);
});
