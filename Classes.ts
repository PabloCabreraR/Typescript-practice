class Car{
    brand:string
    date:string
    doors:number

    constructor(brand_:string, date_:string, doors_:number){
        this.brand = brand_
        this.date = date_
        this.doors = doors_
    }

    accelerate():void{
        console.log("Going faster")
    }

    break():void{
        console.log("Slowing down")
    }
}

const car = new Car('Ford', "12/7/2018", 4)

