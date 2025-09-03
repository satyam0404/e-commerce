// cart.js

// Function to add a product to the cart
function addToCart(productId) {
    // 1. Get the existing cart from localStorage, or create an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 2. Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // If it is, just increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If it's not, add it as a new item with quantity 1
        cart.push({ id: productId, quantity: 1 });
    }

    // 3. Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // 4. Update the cart icon count
    updateCartIcon();
}

// Function to update the number on the cart icon
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Calculate the total number of items (not just unique items)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        // Show the count only if there are items in the cart
        cartCountElement.classList.toggle('hidden', totalItems === 0);
    }
}

// Run this function when any page loads to make sure the cart count is up-to-date
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
});