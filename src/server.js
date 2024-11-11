const express  = require('express');

const routes = require('./routes/routes.js');
const authRoutes = require('./routes/authRoutes.js');

const database = require('./database/index.js');

const PORT = process.env.APP_PORT || 8080;

const app = express();
app.use(express.json());
app.use(routes);
app.use(authRoutes);

app.listen(8080, () => {
    console.log(`Server is now running on PORT: ${PORT}`);
});
