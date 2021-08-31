class Student {

    sname: string;
    srollno: number;
    //constructor
    constructor(rollno, name){
        this.srollno = rollno;
        this.sname=name;    
    }
    displaystuDetails(){
        console.log(`Rollno: ${this.srollno}, Name: ${this.sname}`);
        }
}
var studentObj=new Student(2,"John");
console.log("Q1");
studentObj.displaystuDetails();
//task2
class New extends Student { 
    phone: number;
    address:string;
    constructor(rollno,name,phone,address) {
        super(rollno, name);
    this.phone=phone;
this.address= address;

    }
displayDetail() {
    console.log("Q2");
    console.log(`Rollno: ${this.srollno}, Name: ${this.sname},
    Phone:${this.phone}, Address:${this.address}`)
}
}
var newObj=new New(3,"Sam",9999999999,"Coimbatore");
newObj.displayDetail();
var new1obj=new New(2,"John",8888888888,"Noida");
new1obj.displayDetail();