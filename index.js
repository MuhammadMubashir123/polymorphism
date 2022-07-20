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
let c1 = new car("Alto","xyz",4,10010);
c1.showdetail();