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
var Person = /** @class */ (function () {
    //constructor
    function Person(id, name, sal) {
        this.pid = id;
        this.pName = name;
        this.psalary = sal;
    }
    //method
    Person.prototype.displayDetails = function () {
        console.log("id: " + this.pid + ", Name: " + this.pName + ", Salary:" + this.psalary);
    };
    return Person;
}());
//class object
var personObj = new Person(101, "anu", 24000);
personObj.displayDetails();
console.log(personObj.pName);
var personObj = new Person(102, "manu", 23000);
personObj.displayDetails();
console.log(personObj.pName);
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, sal, post, address, contact) {
        var _this = _super.call(this, id, name, sal) || this;
        _this.post = post;
        _this.address = address;
        _this.contact = contact;
        return _this;
    }
    Company.prototype.displayDetail = function () {
        console.log("id:" + this.pid + ", Name:" + this.pName + ", Salary:" + this.psalary + ",\n    Post:" + this.post + ", Add:" + this.address + ", Contact:" + this.contact);
    };
    return Company;
}(Person));
var companyObj = new Company(501, "Resmi", 75000, "Developer", "Coimbatore", 9999999999);
companyObj.displayDetail();
