let sandwichOut = document.querySelector(".sandwich");
let out = document.querySelector(".wrapper-cart");
let buttonPlus = document.querySelector(".number-plus");
let number = document.querySelector(".number-text");
let numberText = document.querySelector(".number");
window.addEventListener("click", function(event){
    // console.log(event.target)
    if(event.target.className === "number-plus"){
        console.log("plus");
        const wrapper = event.target.closest(".quantity");
        console.log(wrapper);
        document.querySelector(".number-text").value++
    }
})
