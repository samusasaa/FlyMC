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

    cartItems.innerHTML = cart.map((cartItem, index) => `
        <p>${cartItem.item} - $${cartItem.price.toFixed(2)} 
        <button onclick="removeFromCart(${index})">Remove</button></p>
    `).join("");

    let total = cart.reduce((sum, cartItem) => sum + cartItem.price, 0);
    cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function generateInvoice() {
    let invoiceWindow = window.open("", "Invoice", "width=600,height=400");
    let invoiceContent = `
        <h2>Invoice</h2>
        ${cart.map(cartItem => `<p>${cartItem.item} - $${cartItem.price.toFixed(2)}</p>`).join("")}
        <h3>Total: $${cart.reduce((sum, cartItem) => sum + cartItem.price, 0).toFixed(2)}</h3>
        <p>To complete your purchase, please click "Continue with Discord" and follow the instructions.</p>
        <button onclick="window.close()">Close</button>
    `;
    invoiceWindow.document.write(invoiceContent);
    invoiceWindow.document.close();
}

document.addEventListener("DOMContentLoaded", function() {
    updateCart();
});
