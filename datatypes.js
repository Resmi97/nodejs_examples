//number
var no = 123;
console.log("Number: " + no);
//string
var name1 = "String: " + "Resmi";
console.log(name1);
//boolean
var cond = true;
console.log("Boolean: " + cond);
//array
var fruits = ["apple", "mango", "orange"];
console.log("Array: " + fruits);
//tupple
var emp = [123, "new"];
console.log("Tupple: " + emp);
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var cl1 = color.blue;
console.log("Enum: " + cl1);
//union
var mix = "Hello";
console.log("Union: " + mix);
//any
var x = 1230;
console.log("Any: " + x);
//object
var emp1 = {
    id: 101,
    name: "Resmi",
    place: "Tsr"
};
console.log("Object: " + emp1.id + " " + emp1.name + " " + emp1.place);
