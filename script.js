let cart = [];
let invoiceCounter = 1;

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
        <div class="cart-item">
            <p>${cartItem.item} - $${cartItem.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
        </div>
    `).join("");

    let total = cart.reduce((sum, cartItem) => sum + cartItem.price, 0);
    cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function generateInvoice() {
    let invoiceNumber = "INV-" + invoiceCounter++;
    let invoiceWindow = window.open("", "Invoice", "width=600,height=400");
    let invoiceContent = `
        <h2>Invoice</h2>
        <p>Invoice Number: ${invoiceNumber}</p>
        ${cart.map(cartItem => `<p>${cartItem.item} - $${cartItem.price.toFixed(2)}</p>`).join("")}
        <h3>Total: $${cart.reduce((sum, cartItem) => sum + cartItem.price, 0).toFixed(2)}</h3>
        <p>To complete your purchase, please click "Continue with Discord" and follow the instructions.</p>
        <p>Take a screenshot of this invoice and upload it in the Discord ticket.</p>
        <button onclick="window.close()">Close</button>
    `;
    invoiceWindow.document.write(invoiceContent);
    invoiceWindow.document.close();
}

function continueWithDiscord() {
    window.open("https://discord.com/invite/your-server-invite", "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    updateCart();
});
