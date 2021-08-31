var Company1 = /** @class */ (function () {
    function Company1() {
    }
    Object.defineProperty(Company1.prototype, "_lino", {
        get: function () {
            return this.lNo;
        },
        set: function (val) {
            this.lNo = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Company1.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Company1.prototype, "_addr", {
        get: function () {
            return this.address;
        },
        set: function (val) {
            this.address = val;
        },
        enumerable: false,
        configurable: true
    });
    Company1.prototype.companyDetail = function () {
        console.log("Licence no: " + this.lNo + ", Name: " + this.name + ", Address: " + this.address);
    };
    return Company1;
}());
var compObj = new Company1();
compObj._lino = 12345;
compObj._name = "ABC";
compObj._addr = "Delhi";
compObj.companyDetail();
