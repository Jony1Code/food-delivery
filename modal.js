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
let modalCart = "";
async function outSize(){
    const data = await allData()
    let cartSize = Object.entries(data.sizes);
    console.log(cartSize);
    cartSize.forEach((el) => {
        console.log(el[1].name)
            modalCart += `<div class="modal_out-img"><img class="modal_cart-img" src="${el[1].image}" alt=""></div>
            <p class="modal_cart-size">${el[1].name} см</p>
            <hr style="border-width:1px;">
            <p class="modal_cart-price">Цена: ${el[1].price} р.</p>`
        
        
    });
    // let htmlModal = `${modalCart}`;
    size.addEventListener("click", ()=>{
        modalOutCart.innerHTML = modalCart;
    })
}
outSize();

