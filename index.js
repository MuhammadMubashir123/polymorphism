class car{
    constructor(n,model,capacity,engineNo){
        this.name= n;
        this.model = model;
        this.capacity=capacity;
        this.engineNo = engineNo
    }
    showdetail(){
        console.log(`Name: ${this.name}
Model: ${this.model}
Capacity: ${this.capacity}
Engine No: ${this.engineNo}        
`)
    }
}
// let c1 = new car("Alto","xyz",4,10010);
// c1.showdetail();

class Tesla extends car{
    constructor(n,model,capacity,engineNo,fuelConsumption){
        super(n,model,capacity,engineNo);
        this.fuel = fuelConsumption;
    }
    showdetail(){
        console.log(`Name: ${this.name}
Model: ${this.model}
Capacity: ${this.capacity}
Engine No: ${this.engineNo}
Fuel Comsumption: ${this.fuel}        
`)
}
}
let t1 = new Tesla("xyz","abc", 4 , 53456,"electricity");
t1.showdetail();

