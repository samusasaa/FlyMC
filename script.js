let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(item + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = cart.map((cartItem, index) => `<p>${cartItem.item} - $${cartItem.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`).join("");
    cartTotal.innerHTML = `<h2>Total: $${cart.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2)}</h2>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function generateInvoice() {
    let invoice = document.getElementById("invoice");
    if (!invoice) return;

    let invoiceContent = `
        <h2>Invoice</h2>
        ${cart.map(cartItem => `<p>${cartItem.item} - $${cartItem.price.toFixed(2)}</p>`).join("")}
        <h3>Total: $${cart.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2)}</h3>
    `;

    invoice.innerHTML = invoiceContent;
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("cart-items")) {
        updateCart();
    }
    if (document.getElementById("invoice")) {
        generateInvoice();
    }
});
