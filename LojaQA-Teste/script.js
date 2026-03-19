let products = [
    { id: 1, name: "Notebook", price: 3000, category: "eletronico" },
    { id: 2, name: "Celular", price: 1500, category: "eletronico" },
    { id: 3, name: "Camiseta", price: 80, category: "roupa" },
    { id: 4, name: "Calça", price: 120, category: "roupa" }
];

let cart = [];

function renderProducts(list) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    list.forEach(product => {
        container.innerHTML += `
            <div class="product" data-cy="product-item">
                <strong>${product.name}</strong> - R$ ${product.price}
                <button onclick="addToCart(${product.id})" data-cy="add-to-cart">Adicionar</button>
            </div>
        `;
    });
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("login-message");

    if (email === "admin@teste.com" && password === "123456") {
        message.innerText = "Login realizado com sucesso!";
    } else {
        message.innerText = "Email ou senha inválidos.";
    }
}

function register() {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const message = document.getElementById("register-message");

    if (!name || !email || !password) {
        message.innerText = "Preencha todos os campos!";
        return;
    }

    message.innerText = "Cadastro realizado com sucesso!";
}

function searchProduct() {
    const value = document.getElementById("search-input").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    renderProducts(filtered);
}

function filterCategory() {
    const category = document.getElementById("category-filter").value;

    if (category === "all") {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const total = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let sum = 0;

    cart.forEach(item => {
        cartList.innerHTML += `<li data-cy="cart-item">${item.name}</li>`;
        sum += item.price;
    });

    total.innerText = sum;
}

function clearCart() {
    cart = [];
    updateCart();
}

renderProducts(products);