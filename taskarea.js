var Area = /** @class */ (function () {
    function Area(length, breadth) {
        this.alength = length;
        this.abreadth = breadth;
    }
    Area.prototype.returnArea = function () {
        this.area = this.alength * this.abreadth;
        console.log("Length of the rectangle: " + this.alength);
        console.log("Breadth of the rectangle: " + this.abreadth);
        console.log("Area of the rectangle: " + this.area);
    };
    return Area;
}());
var areaObj = new Area(8, 4);
areaObj.returnArea();
