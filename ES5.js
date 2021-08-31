var students = ["Resmi", "Sajeesh"];
/*for(var i=0;i<=students.length-1;i++){
    console.log(students[i]);
}*/
//foreach
students.forEach(function (val) {
    console.log(val);
});
//array of object
var emp2 = [
    { id: 101, name: "Anu", place: "Tsr", gender: "female" },
    { id: 102, name: "Manu", place: "Tsr", gender: "male" },
    { id: 103, name: "Sanu", place: "Tsr", gender: "male" },
    { id: 104, name: "Janu", place: "Pkd", gender: "female" }
];
var female = emp2.filter(function (val) {
    if (val.gender == "female") {
        console.log("id:" + val.id + ",name:" + val.name + ",place:" + val.place + ",gender}");
    }
});
