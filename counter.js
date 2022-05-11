window.addEventListener("click", function(event){
    if(event.target.className === "number-plus"){
        let wrapper = event.target.closest(".quantity");
        let counter = wrapper.querySelector(".number-text");
        counter.value++
    }
    if(event.target.className === "number-minus"){
        let wrapper = event.target.closest(".quantity");
        let counter = wrapper.querySelector(".number-text");
        counter.value--
    }
})
