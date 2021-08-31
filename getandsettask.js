var Emp = /** @class */ (function () {
    function Emp() {
    }
    Object.defineProperty(Emp.prototype, "_empid", {
        get: function () {
            return this.eid;
        },
        set: function (val) {
            this.eid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_name", {
        get: function () {
            return this.ename;
        },
        set: function (val) {
            this.ename = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_salary", {
        get: function () {
            return this.esalary;
        },
        set: function (val) {
            this.esalary = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_contact", {
        get: function () {
            return this.econtact;
        },
        set: function (val) {
            this.econtact = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_addr", {
        get: function () {
            return this.eaddress;
        },
        set: function (val) {
            this.eaddress = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_post", {
        get: function () {
            return this.epost;
        },
        set: function (val) {
            this.epost = val;
        },
        enumerable: false,
        configurable: true
    });
    Emp.prototype.empDetail = function () {
        console.log("Employee id: " + this.eid + ", Name: " + this.ename + ", Salary: " + this.esalary + ", Contact: " + this.econtact + ", Address: " + this.eaddress + ", Post: " + this.epost);
    };
    return Emp;
}());
var empObj = new Emp();
empObj._empid = 121;
empObj._name = "Ani";
empObj._salary = 55000;
empObj._contact = 9999999999;
empObj._addr = "Coimbatore";
empObj._post = "Manager";
empObj.empDetail();
