import express from 'express';
import products from './data/products_backend.js';

// Creating a variable for port
// Frontend isrunning on 3000
const port = 5000;

const app = express();

app.get('/', (req, res) => { 
    // Creating the first route
    res.send('API is running...');
});

app.get('/api/products', (req, res) => { 
    res.json(products);
});

// Route for a single product
app.get('/api/products/:id', (req, res) => { 
    const product = products.find((p) => p._id === req.params.id);
    res.json(products);
});

// start the server
app.listen(port, () => console.log(`Server running on port ${port}`))