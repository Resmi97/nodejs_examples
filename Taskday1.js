var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    //constructor
    function Student(rollno, name) {
        this.srollno = rollno;
        this.sname = name;
    }
    Student.prototype.displaystuDetails = function () {
        console.log("Rollno: " + this.srollno + ", Name: " + this.sname);
    };
    return Student;
}());
var studentObj = new Student(2, "John");
console.log("Q1");
studentObj.displaystuDetails();
//task2
var New = /** @class */ (function (_super) {
    __extends(New, _super);
    function New(rollno, name, phone, address) {
        var _this = _super.call(this, rollno, name) || this;
        _this.phone = phone;
        _this.address = address;
        return _this;
    }
    New.prototype.displayDetail = function () {
        console.log("Q2");
        console.log("Rollno: " + this.srollno + ", Name: " + this.sname + ",\n    Phone:" + this.phone + ", Address:" + this.address);
    };
    return New;
}(Student));
var newObj = new New(3, "Sam", 9999999999, "Coimbatore");
newObj.displayDetail();
var new1obj = new New(2, "John", 8888888888, "Noida");
new1obj.displayDetail();
