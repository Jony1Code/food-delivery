class Sandwich extends GetData{
    //Получение массива с категорией Сэндвич.
    async getSandwich(){
        const data = await this.allData();
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
//Работа с DOM элементами
// let sandwichOut = document.querySelector(".sandwich");
// let out = document.querySelector(".wrapper-cart");
// let buttonPlus = document.querySelector(".number-plus");
// let number = document.querySelector(".number-text");
// let numberText = document.querySelector(".number");

