class Sandwich extends GetData{
    getSandwich(){
        this.allData()
        .then(data => {
            data.menu.forEach(element => {
                if(element.category === "sandwiches"){
                    // console.log(element.name);
                    out.innerHTML +=`
                    <div class="cart">
                    <div class="wrapper-logo">
                    <img class = "logo" src="/i/markets/subway_logo.png" alt="Ошибка">
                    </div>
                    <div class = "wrapper-sandwich">
                    <img class="sandwich-icons" src="${element.image}" alt="Ошибка">
                    </div>
                    <p class = "name">${element.name}</p>
                    <div class="wrapper-select">
                    <hr style = "width: 250px;">
                    <a href="#">${element.description}</a>
                    </div>
                    <hr style="width: 250px;">
                    <div class = "price">
                    <p class = "price-text" style ="color:red;">Цена: ${element.price} руб.</p>
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
                    </div>`
                }
            });
            
        })
    }
    getSumSandwich(){
        this.allData().then(data => {
            let mass = data.menu.filter(el => {
                if(el.category ==="sandwiches"){
                    return el
                }
            })
            return mass;
        })
        .then(data => data.forEach(el => {
            console.log(el.price + 100)
        }))
    }
}
//объявляем класс
let sandwich = new Sandwich();
//Работа с DOM элементами
let sandwichOut = document.querySelector(".sandwich");
let out = document.querySelector(".wrapper-cart");
let buttonPlus = document.querySelector(".number-plus");
let numberText = document.querySelector("number-text");
sandwichOut.addEventListener("DOMContentLoaded",sandwich.getSandwich())
sandwich.getSumSandwich();