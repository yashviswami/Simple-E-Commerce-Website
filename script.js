// script.js

const products = [
            { name: "Laptop", price: 50000, image: "images/laptop.jpg", description: "High-performance laptop with latest specs." },
            { name: "Smartphone", price: 20000, image: "images/smartphone.jpg", description: "Latest model smartphone with advanced features." },
            { name: "Headphones", price: 2000, image: "images/headphones.jpg", description: "Noise-cancelling wireless headphones." },
            { name: "Smartwatch", price: 5000, image: "images/smartwatch.jpg", description: "Feature-packed smartwatch with health tracking." },
            { name: "Camera", price: 30000, image: "images/camera.jpg", description: "Professional DSLR camera for stunning photography." },
            { name: "Tablet", price: 15000, image: "images/tablet.jpg", description: "Powerful tablet with a high-resolution display." },
            { name: "Speakers", price: 3500, image: "images/speaker.jpg", description: "Bluetooth speakers with immersive sound quality." },
            { name: "Keyboard", price: 1500, image: "images/keyboard.jpg", description: "Mechanical keyboard for gaming and productivity." },
            { name: "Mouse", price: 1000, image: "images/mouse.jpg", description: "Wireless ergonomic mouse for comfort and precision." },
            { name: "Monitor", price: 10000, image: "images/monitor.jpg", description: "Full HD monitor with vibrant colors and fast refresh rate." },
            { name: "Charger", price: 500, image: "images/charger.jpg", description: "Fast-charging adapter with multiple ports." },
            { name: "USB Drive", price: 800, image: "images/usb.jpg", description: "32GB USB drive for data storage and transfer." },
            { name: "Gaming Console", price: 40000, image: "images/console.jpg", description: "Next-gen gaming console with 4K support." },
            { name: "Microphone", price: 7000, image: "images/mic.jpg", description: "Studio-quality microphone for streaming and recording." },
            { name: "Printer", price: 12000, image: "images/printer.jpg", description: "All-in-one printer with wireless printing." },
            { name: "Router", price: 2500, image: "images/router.jpg", description: "High-speed WiFi router for seamless connectivity." },
            { name: "External Hard Drive", price: 5500, image: "images/harddrive.jpg", description: "1TB external HDD for extra storage." },
            { name: "Graphics Card", price: 60000, image: "images/gpu.jpg", description: "High-end GPU for gaming and rendering." },
            { name: "Cooling Pad", price: 1200, image: "images/coolingpad.jpg", description: "Laptop cooling pad with adjustable fan speed." },
            { name: "VR Headset", price: 25000, image: "images/vr.jpg", description: "Virtual reality headset for an immersive experience." }
        ];

// Display products on home page
function displayProducts() {
    let productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    products.forEach((item, index) => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>₹${item.price.toLocaleString()}</strong></p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>`;
    });
}

// Add item to cart
function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products[index];

    // Check if product already exists in cart
    let existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

// Display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-image">
                <p>${item.name} - ${item.quantity} x ₹${item.price.toLocaleString()}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>`;
    });

    document.getElementById("total-price").innerText = `₹${totalPrice.toLocaleString()}`;
}

// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Checkout function
function checkout() {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "home.html";
}

// Ensure functions run correctly when the pages load
if (document.getElementById("products")) {
    displayProducts();
    updateCartCount();
}
if (document.getElementById("cart-items")) {
    document.addEventListener("DOMContentLoaded", displayCart);
}
