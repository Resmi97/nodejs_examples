class Company1 {
    private lNo: number;
    private name: string;
    private address: string;


set _lino(val) {
    this.lNo=val;
}
get _lino() {
    return this.lNo;
}
set _name(val) {
    this.name=val;
}
get _name() {
    return this.name;
}
set _addr(val) {
    this.address=val;
}
get _addr() {
    return this.address;
}
companyDetail() {
    console.log(`Licence no: ${this.lNo}, Name: ${this.name}, Address: ${this.address}`);
}
}
var compObj =  new Company1();
compObj._lino=12345;
compObj._name="ABC";
compObj._addr="Delhi";
compObj.companyDetail();