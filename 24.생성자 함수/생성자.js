function Itme(title,price){
     //this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    };
    //return this;  
}

const itme1 = new Itme("신발",2000);
const itme2 = new Item("의상",3000);
console.log(item1 , itme2);


itme2.showPrice();

