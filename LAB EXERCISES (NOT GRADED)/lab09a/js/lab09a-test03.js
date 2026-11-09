document.addEventListener('DOMContentLoaded', () => {

    // single cart item
    function CartItem(id, name, price, quantity = 1) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.quantity = parseInt(quantity);
    }

    //store items currently in cart state
    const cart = [];

    // DOM elements
    const cartCountElement = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // even handler loop for each item
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = button.dataset.price;

            addItemToCart(id, name, price);
        });
    });

    function addItemToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = new CartItem(id, name, price);
            cart.push(newItem);
        }
        updateCartTotals();
        renderCartUI();
    }

    function updateCartTotals() {
        let totalItems = 0;
        let totalValue = 0;

        cart.forEach(item => {
            totalItems += item.quantity;
            totalValue += item.price * item.quantity;
        });
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
        if (totalAmountElement) {
            totalAmountElement.textContent = `$${totalValue.toFixed(2)}`;
        }
        if (checkoutBtn) {
            checkoutBtn.disabled = cart.length === 0;
        }
    }
     function renderCartUI() {
        if (!cartItemsContainer) return;
        cartItemsContainer.replaceChildren();

        if (cart.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty-cart');
            emptyDiv.textContent = 'Your cart is empty';
            cartItemsContainer.appendChild(emptyDiv);
            return;
        }
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            const itemInfoDiv = document.createElement('div');
            itemInfoDiv.classList.add('item-info');
            const nameParagraph = document.createElement('p');
            nameParagraph.classList.add('item-name');
            nameParagraph.textContent = `${item.name} x ${item.quantity}`;

            const priceParagraph = document.createElement('p');
            priceParagraph.classList.add('item-price');
            priceParagraph.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            
            itemInfoDiv.appendChild(nameParagraph);
            itemInfoDiv.appendChild(priceParagraph);
            cartItemDiv.appendChild(itemInfoDiv);
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
});