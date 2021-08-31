//default function
function add() {
    return 10 + 20;
}
console.log(add());
//parameterised function
function add1(no1, no2) {
    return no1 + no2;
}
console.log(add1(6, 2));
//anonymus function
var sub = function (no3, no4) {
    return no3 - no4;
};
console.log(sub(12, 2));
//arrow function
var mul = function () { return 2 * 3; };
console.log(mul());
var div = function (no1, no2) {
    return no1 / no2;
};
console.log("parameterized arrow fn:", div(9, 3));
//rest parameterized function
var stdlist = function () {
    var std = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        std[_i] = arguments[_i];
    }
    return std + ",";
};
console.log(stdlist("Resmi", "Sajeesh"));
