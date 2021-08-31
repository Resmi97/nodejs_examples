class Emp {
    private eid: number;
    private ename: string;
    private esalary: number;
    private econtact:number;
    private eaddress: string;
    private epost:string;


set _empid(val) {
    this.eid=val;
}
get _empid() {
    return this.eid;
}
set _name(val) {
    this.ename=val;
}
get _name() {
    return this.ename;
}
set _salary(val) {
    this.esalary=val;
}
get _salary() {
    return this.esalary;
}
set _contact(val) {
    this.econtact=val;
}
get _contact() {
    return this.econtact;
}
set _addr(val) {
    this.eaddress=val;
}
get _addr() {
    return this.eaddress;
}
set _post(val) {
    this.epost=val;
}
get _post() {
    return this.epost;
}
empDetail() {
    console.log(`Employee id: ${this.eid}, Name: ${this.ename}, Salary: ${this.esalary}, Contact: ${this.econtact}, Address: ${this.eaddress}, Post: ${this.epost}`);
}
}
var empObj =  new Emp();
empObj._empid=121;
empObj._name="Ani"
empObj._salary=55000;
empObj._contact=9999999999;
empObj._addr="Coimbatore"
empObj._post="Manager";
empObj.empDetail();