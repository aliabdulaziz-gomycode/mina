let items = [];
let cart = [];

fetch("https://jsonplaceholder.typicode.com/todos")
.then(data => data.json())
.then(data => {
    items = data.slice(0, 9);
    items.map(d => `<div class="item">
        <h2>${d.title}</h2>
        <div>
            <button onclick="addToCart(${d.id})">Add to cart</button>
        </div>
    </div>`).forEach(element => { 
        document.querySelector(".items-container").innerHTML += element;
    });
}).catch(err => {
    console.log(err);
});

function addToCart(id) {
    let item = items.find(i => i.id === id);
    let cartItem = cart.find(ci => ci.id === id);


    if (cartItem) {
        // existing item
        let item = cart.find(ci => ci.id === id);
        item.qty += 1;

        rebuildCart();

    } else {
        // new item
        let newItem = Object.assign({}, item); // create new copy of item and store it in newItem variable
        newItem.qty = 1;
        cart.push(newItem);

        rebuildCart();
    }
}

function rebuildCart() {
    console.log(cart);
    document.querySelector(".cart-container").innerHTML = `<tr>
        <th>title</th>
        <th>qty</th>
        <th>#</th>
        <th>#</th>
    </tr>`;
    cart.map(d => `<tr class="item">
        <td>${d.title}</td>
        <td>${d.qty}</td>
        <td>
            <button onclick="decrement(${d.id})"> - </button>
            <button onclick="increment(${d.id})"> + </button>
        </td>
        <td>
            <button onclick="removeItemFromCart(${d.id})">remove</button>
        </td>
    </tr>`).forEach(element => { 
        document.querySelector(".cart-container").innerHTML += element;
    });
}

function removeItemFromCart(id) {
    cart = cart.filter(i => i.id != id);
    rebuildCart();
}

function increment(id) {
    cart.forEach(i => {
        if (id === i.id) {
            i.qty++;
        }
    });

    rebuildCart();
}

function decrement(id) {
    cart.forEach(i => {
        if (id === i.id && i.qty > 0) {
            i.qty--;
        }

        if (i.qty === 0) {
            removeItemFromCart(id);
            return; // because removeItemFromCart calls the rebuildCart()
        }
    });

    rebuildCart();
}
