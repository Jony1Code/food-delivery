window.addEventListener("click", function(event){
    if(event.target.className === "number-plus" || event.target.className === "number-minus"){}
        //DOM оболочка
        let wrapper = event.target.closest(".price");
        //счётчик
        let counter = wrapper.querySelector(".number-text");
        let counterNumber = parseInt(counter.innerText);
        //цена
        let priceText = wrapper.querySelector(".price-text");
        let str = priceText.innerText.replace(/\D+/, '');
        let price = parseInt(str);
        //...   
        //Если плюс 
        if(event.target.className === "number-plus"){
        priceText.innerText = `Цена: ${price} руб`;
        counterNumber += counterNumber
                console.log(counterNumber * price);
            
        }
        //Если минус
        if(event.target.className === "number-minus"){
            if(counter === 1){
                return counter;
            }
            // priceText.innerText = `Цена: ${sum} руб`;
        }

})