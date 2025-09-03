// Import necessary packages
const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Define the port the server will run on
// Use the environment's port if available, otherwise default to 5000
const PORT = process.env.PORT || 5000;

// === Middleware ===
// Enable Cross-Origin Resource Sharing (CORS) so your frontend can communicate with this backend
app.use(cors());
// Enable the express.json middleware to parse incoming JSON requests
app.use(express.json());


// === In-Memory "Database" ===
// For now, we'll store our product data in a simple array.
// Later, this data would come from a real database like MongoDB.
const products = [
    {
        id: '1',
        name: 'Modern Smartwatch',
        price: 299.00,
        imageUrl: 'https://placehold.co/400x400/E0E7FF/4F46E5?text=Product+1',
        rating: 4.5,
        reviews: 117
    },
    {
        id: '2',
        name: 'Leather Backpack',
        price: 149.00,
        imageUrl: 'https://placehold.co/400x400/E0E7FF/4F46E5?text=Product+2',
        rating: 5.0,
        reviews: 88
    },
    {
        id: '3',
        name: 'Wireless Headphones',
        price: 199.00,
        imageUrl: 'https://placehold.co/400x400/E0E7FF/4F46E5?text=Product+3',
        rating: 4.0,
        reviews: 204
    },
    {
        id: '4',
        name: 'Classic Sunglasses',
        price: 89.00,
        imageUrl: 'https://placehold.co/400x400/E0E7FF/4F46E5?text=Product+4',
        rating: 4.8,
        reviews: 156
    },
    {
        id: '5',
        name: 'Vintage Denim Jacket',
        price: 120.00,
        imageUrl: 'https://placehold.co/400x400/FEF3C7/FBBF24?text=Seller+1',
        rating: 4.7,
        reviews: 92
    },
    {
        id: '6',
        name: 'Urban Sneakers',
        price: 95.00,
        imageUrl: 'https://placehold.co/400x400/FEF3C7/FBBF24?text=Seller+2',
        rating: 4.6,
        reviews: 130
    }
];


// === API Routes ===

// A simple test route to make sure the server is working
app.get('/', (req, res) => {
    res.send('<h1>E-commerce Backend is Running!</h1>');
});

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Public
 */
app.get('/api/products', (req, res) => {
    // Send the array of products as a JSON response
    res.json(products);
});

/**
 * @route   GET /api/products/:id
 * @desc    Get a single product by its ID
 * @access  Public
 */
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        // If no product is found, send a 404 Not Found status
        res.status(404).json({ message: 'Product not found' });
    }
});


// === Start the Server ===
// Make the server listen for requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Test your API at: http://localhost:${PORT}/api/products`);
});
