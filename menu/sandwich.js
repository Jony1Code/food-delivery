   //Получение массива с категорией Сэндвич.
async function getSandwich(){
    const data = await allData();
    const dataSandwich = data.menu.filter(el => {
        if(el.category === "sandwiches"){
            return el;
        }
        });
    return dataSandwich
}

let htmlCart = "";

async function view() {
    const data = await getSandwich();
    data.forEach(({name, description, image, price}) => {
        htmlCart += `
        <div class="cart">
        <div class="wrapper-logo">
        <img class = "logo" src="/i/markets/subway_logo.png" alt="Ошибка">
        </div>
        <div class = "wrapper-sandwich">
        <img class="sandwich-icons" src="${image}" alt="Ошибка">
        </div>
        <p class = "name">${name}</p>
        <div class="wrapper-select">
        <hr style = "width: 250px;">
        <a href="#">${description}</a>
        </div>
        <hr style="width: 250px;">
        <div class = "price">
        <p class = "price-text" style ="color:red;">Цена: ${price} руб.</p>
        <p class = "text-quantity">КОЛИЧЕСТВО</p>
        <div class = "quantity">
        <div class="number" data-step="1" data-min="1" data-max="100">
        <div class="number-text">1</div>
        <button class="number-minus">−</button>
        <button class="number-plus">+</button>
        </div>
        </div>
        <button name="Price" type="button" class="button-price">В КОРЗИНУ</button>
        </div>
        </div>
        `
    })
    let html = `${htmlCart}`
    ROOT_VIEWCART.insertAdjacentHTML("afterbegin", html);
    let cart = document.querySelectorAll(".cart");
    let n = cart.length - 1;
    for (let i = 0; i <= n; i++) {
        cart[i].id += i;
    }
}
