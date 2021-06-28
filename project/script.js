class Product {
    constructor(id, title, description, price) {
        this.id = id;
        this.img = "https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png";
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

let products = [];

products.push(new Product(1, "cocacola", "soft drink", 0.250));
products.push(new Product(2, "Pepsi", "soft drink", 0.250));
products.push(new Product(3, "Merinda", "soft drink", 0.250));

console.log(products)

window.addEventListener("load", loadProducts);

function loadProducts() {
    for (let product of products) {
        let element = document.createElement("div"); // create html div
        element.classList = "col-md-6 col-lg-4 col-xl-3";
        element.innerHTML = `<div class="card">
            <div class="card-header">
                ${product.title}
            </div>
            <div class="card-body">
                <div class="p-3">
                    <img src="${product.img}" width="100%">
                </div>
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <div class="text-center">
                    <div class="badge bg-warning">
                        <b>${product.price} <span>BHD</span></b>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary float-end" onClick="addToCar(${product.id})">Add to cart</button>
            </div>
        </div>`;

        document.querySelector("#products").appendChild(element);
    }
}

function addToCar(id) {
    // TODO: please complete this (for Mina)
    console.log(id);
}