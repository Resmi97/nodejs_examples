class Area {
    
    alength: number;
   abreadth: number;
   area:number;
  
    constructor(length,breadth){
        this.alength = length;
        this.abreadth= breadth;
    }
    
    returnArea() { 
        this.area =this.alength*this.abreadth;
        console.log("Length of the rectangle: "+ this.alength);
        console.log("Breadth of the rectangle: "+ this.abreadth);
        console.log("Area of the rectangle: "+ this.area);
        }
}

var areaObj=new Area(8,4);
areaObj.returnArea();
