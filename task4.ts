class Students {
   
    protected stdName:string;
    protected stdId:number;
    protected stdSection:string;
    protected stdContact:number;
    
    
    constructor(id, name, section, contact){
        this.stdId = id;
        this.stdName=name;
        this.stdSection=section;
        this.stdContact=contact;
    }
    //method
    displayStdData (){
        console.log(`id: ${this.stdId}, Name: ${this.stdName}, Section:${this.stdSection}, Contact:${this.stdContact}`);
        }
}
//class object
var stdObj=new Students(101,"Sanu","B",9999999999);
stdObj.displayStdData();
var stdObj=new Students(102,"Manu","C",9999889988);
stdObj.displayStdData();


class Marks extends Students {
    sub1: number;
    sub2: number;
    mark:number;
    constructor(id,name,section,contact,sub1,sub2) {
        super(id, name, section, contact);
    this.sub1=sub1;
    this.sub2= sub2;
    this.mark=this.sub1+this.sub2;

    }

    
allInformation() {
    console.log(`id: ${this.stdId}, Name: ${this.stdName}, Section:${this.stdSection}, Contact:${this.stdContact}, Mark1:${this.sub1}, Mark2:${this.sub2}, Total Marks: ${this.mark}`);
}
}
var markObj=new Marks(101,"Sanu","B",9999999999,52,23);
var markObj1=new Marks(102,"Manu","C",9999889988,50,50);
var markObj2=new Marks(103,"Anu","A",8888888888,25,23);
var markObj3=new Marks(104,"Janu","B",777777777,45,35);
console.log("Displaying all info including marks");
markObj.allInformation();
markObj1.allInformation();
markObj2.allInformation();
markObj3.allInformation();

