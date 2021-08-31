class Person {
    //property
    pid: number;
    //private pName:string;
    pName: string;
    protected psalary: number;
    //constructor
    constructor(id, name, sal){
        this.pid = id;
        this.pName=name;
        this.psalary=sal;
    }
    //method
    displayDetails(){
        console.log(`id: ${this.pid}, Name: ${this.pName}, Salary:${this.psalary}`);
        }
}
//class object
var personObj=new Person(101,"anu",24000);

personObj.displayDetails();
console.log(personObj.pName);
var personObj=new Person(102,"manu",23000);
personObj.displayDetails();
console.log(personObj.pName);

class Company extends Person {
    post: string;
    address:string;
    contact: number;
    constructor(id,name,sal,post,address,contact) {
        super(id, name, sal);
    this.post=post;
this.address= address;
this.contact=contact;
    }
displayDetail() {
    console.log(`id:${this.pid}, Name:${this.pName}, Salary:${this.psalary},
    Post:${this.post}, Add:${this.address}, Contact:${this.contact}`)
}
}
var companyObj=new Company(501,"Resmi",75000,"Developer","Coimbatore",9999999999);
companyObj.displayDetail();