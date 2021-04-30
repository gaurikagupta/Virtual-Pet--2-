class Food{
    constructor(foodStock,lastFed){
    this.image=loadImage("fishfood.png"); 
    this.foodStock=foodStock;
    console.log(this.foodStock);   
    }
getFoodStock(){}
updateFoodStock(){}
deductFood(){}
display(){
    var x=30;
    var y=170;

    imageMode(CENTER);
    image(this.image,150,250,40,40);
    
    if(this.foodStock!=0){
        for(var i=0; i<this.foodStock; i++){
         if(i%10===0){
         x=30;
         y=y+40;

         }
         image(this.image,x,y,40,40);
         x=x+30;
          }
        }
}
}

