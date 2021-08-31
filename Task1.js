var employee = [
    { id: 101, name: "Shika", post: "HR", salary: 44000, age: 35, address: "Mumbai" },
    { id: 102, name: "Peter", post: "Manager", salary: 88000, age: 48, address: "Banglore" },
    { id: 103, name: "Shankar", post: "Tech Lead", salary: 84000, age: 55, address: "Mumbai" },
    { id: 104, name: "Julian", post: "HR", salary: 55000, age: 40, address: "Kochi" },
    { id: 105, name: "Sunil", post: "SME", salary: 70000, age: 60, address: "Mumbai" },
    { id: 106, name: "Caroline", post: "Associate Developer", salary: 33000, age: 27, address: "Banglore" },
    { id: 107, name: "John", post: "SME", salary: 70000, age: 36, address: "Kochi" },
    { id: 108, name: "Dikshya", post: "Developer", salary: 68000, age: 28, address: "Banglore" },
    { id: 109, name: "Alka", post: "Developer", salary: 68000, age: 26, address: "Kochi" },
    { id: 110, name: "Meghna", post: "HR", salary: 35000, age: 63, address: "Orissa" }
];
//HR
console.log("\nEmployees whose post is HR");
var HR = employee.filter(function (val) {
    if (val.post == "HR") {
        console.log("Id: " + val.id + ",Name: " + val.name + ", Post: " + val.post + ", Salary: " + val.salary + ", Age: " + val.age + ", Address: " + val.address);
    }
});
//salary is between 50000 to 85000
console.log("\nEmployees with salary in between 50000 and 85000");
var sal = employee.filter(function (val) {
    if (val.salary >= 50000 && val.salary < 85000) {
        console.log("Id: " + val.id + ", Name: " + val.name + ", Post: " + val.post + ", Salary: " + val.salary + ", Age: " + val.age + ", Address: " + val.address);
    }
});
// age greater than 55
console.log("\nEmployees with age greater than 55");
var age55 = employee.filter(function (val) {
    if (val.age > 55) {
        console.log("Id: " + val.id + ", Name: " + val.name + ", Post: " + val.post + ", Salary: " + val.salary + ", Age: " + val.age + ", Address: " + val.address);
    }
});
//id=108
console.log("\nEmployees whose id is 108");
var id108 = employee.filter(function (val) {
    if (val.id == 108) {
        console.log("Id: " + val.id + ", Name: " + val.name + ", Post: " + val.post + ", Salary: " + val.salary + ", Age: " + val.age + ", Address: " + val.address);
    }
});
