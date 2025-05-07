// cart.js
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartDisplay = document.getElementById("cart-items");
  
    // Add item to cart
    cartButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ name, price, quantity: 1 });
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} added to cart!`);
      });
    });
  
    // Display cart
    if (cartDisplay) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        cartDisplay.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        cartDisplay.innerHTML = cart.map(item =>
          `<li>${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}</li>`
        ).join("") + `<p><strong>Total:</strong> $${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>`;
      }
    }
  });
  