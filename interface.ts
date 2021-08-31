interface IStudent {
    stdNo: number;
    stdName: string;
    stdAddress:string;

    stdDetail();
}
class Child implements IStudent {
    stdNo;
    stdName;
    stdAddress;
    constructor(no, name, addr) {
    this.stdNo= no;
    this.stdName= name;
    this.stdAddress= addr;
    }
    stdDetail(){
        console.log(`Rollno: ${this.stdNo}, Name:${this.stdName}, Address: ${this.stdAddress}`);
    }
}
var ChildObj = new Child(301, "Resmi" , "Pune");
ChildObj.stdDetail();