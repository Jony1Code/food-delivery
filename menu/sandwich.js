class Sandwich{
    //Получение массива с категорией Сэндвич.
    async getSandwich(){
        const data = await allData();
        const dataSandwich = await data.menu.filter(el => {
            if(el.category === "sandwiches"){
                    return el;
            }
        });
        return dataSandwich
    }
}
   
//объявляем класс
let sandwich = new Sandwich();

console.log(sandwich.getSandwich())
let htmlCart = "";
async function view(){
    const data = await sandwich.getSandwich();
    data.forEach(({name,description,image,price,category}) => {
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
        <input class="number-text" type="text" name="count" value="1">
        <button class="number-minus">−</button>
        <button class="number-plus">+</button>
        </div>
        </div>
        <button class="button-price"><b>В КОРЗИНУ</b></button>
        </div>
        </div>
        `
    })
    let html = `${htmlCart}`
    ROOT_VIEWCART.insertAdjacentHTML("afterbegin",html);
    let cart = document.querySelectorAll(".cart");
    let n = cart.length - 1;
    for (let i = 0; i<=n; i++) {
        cart[i].id += i;			
       }
    console.log(document.querySelector(".number-text").value);
}
