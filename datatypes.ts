//number
var no:number=123;
console.log("Number: "+ no);
//string
var name1:string="String: "+ "Resmi";
console.log(name1);
//boolean
var cond:boolean=true;
console.log("Boolean: "+ cond);
//array
var fruits:string[]=["apple","mango","orange"];
console.log("Array: "+ fruits);
//tupple
var emp:[number,string]=[123,"new"];
console.log("Tupple: "+ emp);
//enum
enum color{red,green,blue}
var cl1=color.blue;
console.log("Enum: "+ cl1);
//union
var mix:number|string="Hello";
console.log("Union: "+ mix);
//any
var x:any=1230;
console.log("Any: "+ x);
//object
var emp1 = {
    id:101,
    name:"Resmi",
    place:"Tsr"
}
console.log("Object: "+ emp1.id +" "+ emp1.name +" " + emp1.place);

