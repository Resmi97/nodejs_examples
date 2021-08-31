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
var Students = /** @class */ (function () {
    function Students(id, name, section, contact) {
        this.stdId = id;
        this.stdName = name;
        this.stdSection = section;
        this.stdContact = contact;
    }
    //method
    Students.prototype.displayStdData = function () {
        console.log("id: " + this.stdId + ", Name: " + this.stdName + ", Section:" + this.stdSection + ", Contact:" + this.stdContact);
    };
    return Students;
}());
//class object
var stdObj = new Students(101, "Sanu", "B", 9999999999);
stdObj.displayStdData();
var stdObj = new Students(102, "Manu", "C", 9999889988);
stdObj.displayStdData();
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks(id, name, section, contact, sub1, sub2) {
        var _this = _super.call(this, id, name, section, contact) || this;
        _this.sub1 = sub1;
        _this.sub2 = sub2;
        _this.mark = _this.sub1 + _this.sub2;
        return _this;
    }
    Marks.prototype.allInformation = function () {
        console.log("id: " + this.stdId + ", Name: " + this.stdName + ", Section:" + this.stdSection + ", Contact:" + this.stdContact + ", Mark1:" + this.sub1 + ", Mark2:" + this.sub2 + ", Total Marks: " + this.mark);
    };
    return Marks;
}(Students));
var markObj = new Marks(101, "Sanu", "B", 9999999999, 52, 23);
var markObj1 = new Marks(102, "Manu", "C", 9999889988, 50, 50);
var markObj2 = new Marks(103, "Anu", "A", 8888888888, 25, 23);
var markObj3 = new Marks(104, "Janu", "B", 777777777, 45, 35);
console.log("Displaying all info including marks");
markObj.allInformation();
markObj1.allInformation();
markObj2.allInformation();
markObj3.allInformation();
