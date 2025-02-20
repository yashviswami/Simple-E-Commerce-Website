# Simple-E-Commerce-Website
This project is a simple e-commerce website that allows users to browse products, add them to a cart, view their cart, and proceed to checkout. The website is built using HTML, CSS, and JavaScript and leverages localStorage to manage the cart functionality.
Features
Home Page

Displays a list of products with images, names, descriptions, and prices.
Users can add products to the cart.
Includes a search bar to filter products by name.
Category filtering to view specific types of products.
Cart Page

Displays products added to the cart.
Shows the quantity of each product.
Users can increase, decrease, or remove items.
Calculates the total price dynamically.
Checkout button to place an order (simulated with an alert).
Navigation

Users can navigate between the home page and cart page using buttons.
Responsive Design

The website is mobile-friendly and adapts to different screen sizes.
Local Storage

The cart items persist even after the page is refreshed.
Technologies Used
HTML: Structure of the web pages.
CSS: Styling and layout (Flexbox, Grid, responsive design).
JavaScript: Handles dynamic functionality such as:
Adding/removing items from the cart.
Storing cart data using localStorage.
Updating the total price dynamically.
Implementing search and filter features.
File Structure
bash
Copy
Edit
/ecommerce-project
│── index.html         # Home page displaying products
│── cart.html          # Cart page showing added products
│── styles.css         # Styling for the website
│── script.js          # JavaScript file for functionality
│── images/            # Folder containing product images
│── README.md          # Documentation for GitHub
How It Works
Home Page (index.html)

Displays all available products.
Clicking "Add to Cart" stores the product in localStorage.
The search bar filters products by name.
The category filter allows browsing specific product types.
Cart Page (cart.html)

Retrieves products from localStorage and displays them.
Allows users to increase/decrease quantity or remove items.
Shows the total price dynamically.
Clicking "Proceed to Checkout" clears the cart.
Setup Instructions
Clone the Repository
sh
Copy
Edit
git clone https://github.com/yashviswami/ecommerce-project.git
Open index.html in a browser.
To Test the Cart
Add items from the home page.
Click "Cart" to view added products.
Future Improvements
Add a backend using Node.js & Express.
Store cart data in a database (MongoDB/Firebase).
Implement a payment gateway (Razorpay, Stripe, PayPal).
Add user authentication for login/sign-up.
