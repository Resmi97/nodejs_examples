var Child = /** @class */ (function () {
    function Child(no, name, addr) {
        this.stdNo = no;
        this.stdName = name;
        this.stdAddress = addr;
    }
    Child.prototype.stdDetail = function () {
        console.log("Rollno: " + this.stdNo + ", Name:" + this.stdName + ", Address: " + this.stdAddress);
    };
    return Child;
}());
var ChildObj = new Child(301, "Resmi", "Pune");
ChildObj.stdDetail();
