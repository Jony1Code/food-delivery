window.addEventListener("click", (event) => {
     if(event.target.className === "button-price"){
         console.log("name");
         document.querySelector(".modal").classList.add('modal_active');
     }
     if(event.target.className === "modal_img-close"){
        document.querySelector(".modal").classList.remove('modal_active');
     }
})
//Категории
let modalOutCart = document.querySelector(".modal_out");
let size = document.querySelector(".size");
async function outSize(){
    const data = await allData()
    let cartSize = Object.entries(data.sizes);
    cartSize.forEach((el) => {
            modalOutCart.innerHTML += `
            <div class="modal_out-cart">
            <div class="modal_out-img"><img class="modal_cart-img" src="${el[1].image}" alt=""></div>
            <p class="modal_cart-size">${el[1].name}</p>
            <hr style="border-width:1px; width:130px;">
            <p class="modal_cart-price">Цена: ${el[1].price} р.</p>
            </div>
            `
        });
}
outSize();
//переходы в модалке
//li элементы.
let componentsLi = document.querySelector(".components");
let li = componentsLi.querySelectorAll("li");
let len = li.length -1;
let i = 0;
//Кнопки вперёд,назад.
let next = document.querySelector(".btn-next");
let back = document.querySelector(".btn-back");

if(size){
    console.log("yes");
}
