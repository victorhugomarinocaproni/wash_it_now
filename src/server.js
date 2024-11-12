const express  = require('express');

const routes = require('./routes/routes.js');
const authRoutes = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser');

const database = require('./database/index.js');

const PORT = process.env.APP_PORT || 8080;

const app = express();

// Middleware
app.use(express.static('src/public'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use(routes);
app.use(authRoutes);

// Configuração das Views
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Starting the Server 
app.listen(8080, () => {
    console.log(`Server is now running on PORT: ${PORT}`);
});

