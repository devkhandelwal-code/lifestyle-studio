'use strict';

const products = [   // Sample data
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 19.99 }
];

/**
 * Get all products.
 * @returns {Array} List of products.
 */
const getAllProducts = () => {
    return products;
};

/**
 * Get product by ID.
 * @param {number} id - The ID of the product.
 * @returns {Object|null} The product object or null if not found.
 */
const getProductById = (id) => {
    return products.find(product => product.id === id) || null;
};

module.exports = {
    getAllProducts,
    getProductById
};