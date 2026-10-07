// // // // javascript - 1956
// // // // single thread
// // // // java script

// // // // script writing

// // // // 1. hello every one
// // // // 2. this navi

// // // // sync - line by line code excution

// // // // variable

// // // // var , let , const

// // // // var   - global scope , function scope

// // // // rules :-

// // // // 1. declration :-  // 2. intialization

// // // var a = 20

// // // // 3. reuse         // 4. reintialization

// // //     a = 40

// // // // 5. reDeclration

// // // var a = 50

// // // console.log(a)

// // // // let   - block scope , local scope

// // // // declration  // intialization

// // // let b = 20

// // // // reuse       // reintialization

// // //     b = 40

// // // // reDeclration

// // // // let b

// // // console.log(b);

// // // // const - block scope

// // // // Declration  // intialization

// // // const c = 30

// // // // reuse // reintialization

// // //     //   c = 50

// // // // reDeclration

// // // // const c

// // // console.log(c);

// // // // printing statement

// // // // console.log()

// // // let d = 100
// // // console.log(d);
// // // console.log(111);

// // // // alert()

// // // // const e = 123
// // // // alert(e)

// // // // confirm()

// // // // let f = "do you know programming ?"
// // // // confirm(f)

// // // // prompt()

// // // // let h = "what is your name ?"

// // // // prompt(h)

// // // // document.writeln()

// // // // let i = "hello guys"

// // // // document.writeln(i)

// // // // i want to print username in console

// // // // let userName = prompt("what is your name")

// // // // console.log(userName);

// // // // i want to print user age in popup

// // // // let userAge = prompt("how old are you ? ")

// // // // alert(userAge)

// // // // i want to know user qualification in ui side

// // // let userQualification = prompt("what is your qualification ?")

// // // document.writeln(userQualification)

// // // console methods

// // // 1. console.log()

// // console.log(100);

// // console.log();

// // // 2. console.warn()

// // console.warn("error");

// // // 3. console.error()

// // console.error("error");

// // // 4. console.clear()

// // console.clear()

// // // DataType

// // // 1. primitive DataType

// // // type :-

// // // 1. string - ""

// // let a2 = "naveen"

// // console.log(typeof(a2));

// // // 2. number - 123

// // let a3 = 123

// // console.log(typeof(a3));

// // // 3. boolean - true , false

// // let a4 = true

// // console.log(typeof(a4));

// // // 4. undefined

// // let a5 ;

// // console.log(a5);

// // // 5. null

// // let a6 = prompt()

// // console.log(a6);

// // // 2. non primitive DataType

// // Array - []

// let fruit = ["apple" , "orange" , "banana","giwi","mango","teddy","brinjal","rc car","dhoni"]

// console.log(fruit);

// console.log(fruit[0]);
// console.log(fruit[2]);

// // dynamic call

// console.log(fruit[fruit.length-1]);
// console.log(fruit[fruit.length-2]);

// // object - {}

// let AllThings = {
//     fruitName : ["apple","orange","mango","banana","giwi"],
//     ToyName   : ["Teddy","rc car"],
//     cricketer : "dhoni"
// }

// console.log(AllThings);

// console.log(AllThings.cricketer);
// console.log(AllThings.ToyName[1]);
// console.log(AllThings.fruitName[2]);

// // operators

// // Arithmetic operator  - mathematical operator

// // meaning        symbol

// //  addition        +

// console.log(1 + 2);

// // subraction       -

// console.log(1 - 2);

// // multiplication   *

// console.log(5 * 5);

// // division          /

// console.log(10 / 5);

// // modulus          %

// console.log(8 % 10);

// // exponencial      **

// console.log(2 ** 3); // 2^3 = 2*2*2

// console.clear();

// // increament   ++    = +1

// // pre increament     = ++ var

// // post increament    = var ++

// // decreament   --    = -1

// // pre decreament     = -- var

// // post decreament    = var --

// let b1 = 3

// ++b1

// console.log(b1);

// let b2 = 5

// b2--

// console.log(b2);

// // searching element call the time js flow coming left to right hand side and line by line code excution . if first find in variable side means. you want to calculate that value side till the variable.

// let b3 = 3    // null

//     b3 = b3++ // b3 = 3

//     console.log(b3);

// let b4 = 5    // null

//     b4 = ++b4 // ++ b4 = +1+5 = 6

//     console.log(b4);

// //   if first find in "variable" side means. you want to calculate that value side till the variable.

//     // your searching element first find in "value" side means, you want to calculate that total all values

// let b5 = 2  //

// let b6 = ++b5 // ++ b5 = +1 +2 = 3

// console.log("b5 : ", b5); // b5 : 3
// console.log("b6 : ", b6); // b6 : 3

// let b7 = 3    // null

// let b8 = b7-- // b7 : 3

// console.log("b7 : ", b7); // 2   // b7 : 2
// console.log("b8 : ", b8); // 3   // b8 : 3

// // Assignment operator

// console.log("Assignment operator");

// let c1 = 10
// let additionVal = 50

// // c1 = c1 + additionVal

// c1 += additionVal
// c1 -= additionVal
// c1 *= additionVal
// c1 /= additionVal
// c1 %= additionVal
// c1 **= additionVal

// console.log(c1);

// // comparision operator

// // meaning          syntex             example            result

// // lessThen           <                 5<5               false

// // greaterThen        >                 10>5              true

// // lessThenEq        <=                 5<=5              true

// // greaterThenEq     >=                 10 >= 12          false

// // loosyTypeEq       ==                 5 == "5"          true

// // loosyNotEq        !=                 5 !="6"           true

// // strictlyTypeEq    ===               5 === "5"          false

// // strictlyNotEq     !==               6 !== "6"          true

// // 1. Less Than (<)
// console.log(3 < 8);    // true

// // 2. Greater Than (>)
// console.log(15 > 10);  // true

// // 3. Less Than or Equal To (<=)
// console.log(7 <= 7);   // true

// // 4. Greater Than or Equal To (>=)
// console.log(12 >= 20);  // false

// // 5. Loose Type Equality (==)
// console.log(10 == "10"); // true

// // 6. Loose Not Equal (!=)
// console.log(8 != "5");   // true

// // 7. Strict Type Equality (===)
// console.log(25 === "25"); // false

// // 8. Strict Not Equal (!==)
// console.log(30 !== "30"); // true

// // 9. Less Than + Greater Than
// console.log(5 < 10);  // true
// console.log(20 > 25); // flase

// // 10. Mixed Comparison
// console.log(10 <= 10);   // true
// console.log(15 === "15"); // false

// console.clear();

// // logical operator

// // AND - &&

// // true && true && true = true

// // false && true && true = false

// // OR  - ||

// // true || true || true = true

// // true || false || false = true

// // false || false || false = false

// // NOT - !

// // !(true) = false , !(false) = true

// // 1. AND
// console.log(10 > 5 && 20 > 10);  // true && true = true

// // 2. AND
// console.log(10 > 15 && 20 > 10); // false && true = false

// // 3. AND
// console.log(5 < 10 && 15 < 20);  // true && true  = true

// // 4. OR
// console.log(10 > 20 || 15 > 10); // false || true = true

// // 5. OR
// console.log(5 > 10 || 20 < 15); // false || false  = false

// // 6. OR
// console.log(10 < 5 || 20 > 15); // false || true = true

// // 7. NOT
// console.log(!(10 > 5));  // !(true) =  

// currying format

function a(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}

a(10)(20)(30)


// uncurrying format


function a1(a,b,c){
    console.log(a+b+c);
    
}

a1(10,20,30)



// DataStracture

// Ecma Script - ES 6 edition - 2015

// spread operator 

// array spread operator - [...]

let array1 = [1,2,3,4]
let array2 = [5,6,7,8]

let TotalArray = [...array1,...array2]

console.log(TotalArray);

// object spread operator - {...}

let object1 = {
    name1:"hari",
    department:"ECE",
    Cgpa: 9
}
let object2 = {
    name11:"esak",
    department1:"cse",
    Cgpa1: 9.5
}


let TotalObject = {...object1,...object2}

console.log(TotalObject);




// rest operator - function - (...)


function rest(a,b,...c){

    console.log(a + b + c[7]);
    console.log(c);
    
    

}

rest(1,2,3,4,5,6,7,8,9,10)




// Destracture


let array3 = [1,2,3,4]

console.log(array3[0] + array3[0] + array3[3] + array3[1]);


let l1 = array3[0]
let l2 = array3[1]
let l3 = array3[2]
let l4 = array3[3]

console.log(l1 + l1 + l4 + l2);


// array destracture 

let [j1,j2,j3,j4] = array3

console.log(j1 + j1 + j4 + j2);




// nested array

let nested = [1,2,[3,4,[5,6,[7]]]]


console.log(nested[2][2][2][0] + nested[2][0] + nested[2][2][1] );



let z1 = nested[0]
let z2 = nested[1]
let z3 = nested[2][0]
let z4 = nested[2][1]
let z5 = nested[2][2][0]
let z6 = nested[2][2][1]
let z7 = nested[2][2][2][0]

console.log(z1,z2,z3,z4,z5,z6,z7);


// nested array Destracture

nested = [1,2,[3,4,[5,6,[7]]]]

let [y1,y2,[y3,y4,[y5,y6,[y7]]]] = nested

console.log(y1,y2,y3,y4,y5,y6,y7);



// object destracture

let object3 = {
    name1 : "john",
    designation : "fullstack",
    salary : 400000
}

console.log(object3.name1,object3.name1,object3.salary);


let objName = object3.name1
let objDes  = object3.designation
let objSalary = object3.salary

console.log(objName,objName,objName,objSalary);


// object destracture

let {name1,designation,salary} = object3

console.log(name1,name1,salary,designation);



// nested object 


let nestedObject = {
    empName : "karthick",
    empDesignation : "python developer",
    Team : {
        team1 : "john",
        team2 : "anjela"
    }
}

console.log(nestedObject.Team.team1);

let {empName,empDesignation,Team : {team1}, Team : {team2}} = nestedObject

console.log(team1,team2,empName,empDesignation);



console.clear();

let array4 = [1,2,3,4,5,"hello",true,undefined,null,[1,2],{j:1}]

console.log(array4[0]);
console.log(array4[array4.length-1]);
console.log(array4);



// homogenous
// hetrogenous
// flexible

// adding method - u can add multiple value
// remove method - u can remove single value

// array manipulation method :

let ab = [1,2,3]
// push() - array last we can add the value

ab.push(4,5,6,7,"hi")

// pop()  - array last we can remove the value

ab.pop()

// shift() - array first we can remove the value

ab.shift()

// unshift() - array first we can add the value

ab.unshift(0,1)

console.log(ab);


// splice() - si , removeCount , addingValue

let array5 = [1,2,3,4,5,6]

array5.splice(1,3,20,30,40)
array5.splice(3,1,40,50,60)


console.log(array5);


// Array merge method :- 


// concat(),

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let totalArr = arr1.concat(arr2,7,8)

console.log(totalArr);


// slice, 

let arr5 = [1,2,3,40,50,60,7,8]

let improperValue = arr5.slice(3,6) // si , ei + 1

console.log(improperValue);


// flat, 

let nested1 = [1,2,[3,4,[5,6,[7]]]]

let AvoidNested = nested1.flat(3)

console.log(AvoidNested);




// fill,  

let arr6 = [1,2,3,4] // 1,2,3,"four"

arr6.fill("four" , 3 , 4) // value , si , ei + 1

console.log(arr6);


// includes,

let arr7 = [1,9,45,67,23,0]

let check = arr7.includes(11)

console.log(check);


// indexOf,

let arr8 = [1,2,3,5,3,2,1]

let indexOf = arr8.indexOf(1,1) // value , from index

console.log(indexOf);


// lastIndexOf, 

let arr9 = [10,20,30,40,100,30,20,10,100,30]

let lastIndex = arr9.lastIndexOf(30,4)

console.log(lastIndex);

// sort,

let arr10 = [1,7,5000,9,33567,2,0,4] // 5000 = 5.000 , 33567 = 3.3567

// 3.3567 < 4 = true

let sortVal1 = arr10.sort()

console.log(sortVal1);


// reverse

let arr11 = [1,2,3,5,6,7,8]

console.log(arr11.reverse());

console.clear()


// Array higherorder method 








let games = [1,2,3,4]


// forEach()

let newForEach = games.forEach((currentElement,indexNumber,totalArray)=>{
    return(currentElement);
      
})

console.log(newForEach);




// map()

let newMap = games.map((a,b,c)=>{
    return(a);
     
})

console.log(newMap);


// filter()

let employee = [
    {eName : "a",salary : 100000},
    {eName : "f",salary : 102000},
    {eName : "b",salary : 300000},
    {eName : "c",salary : 200000},
    {eName : "d",salary : 600000},
    {eName : "e",salary : 100020},
]

let empSalary = employee.filter((c,i,t)=>{
    return c.salary >= 200000
})

console.log(empSalary);



// find()

let firstEmployee = employee.find((c,i,t)=>{
    return c.salary >= 200000
})

console.log(firstEmployee);

// reduce()


employee = [
    {eName : "a",salary : 100000},
    {eName : "f",salary : 102000},
    {eName : "b",salary : 300000},
    {eName : "c",salary : 200000},
    {eName : "d",salary : 600000},
    {eName : "e",salary : 100020},
]

let allSalary = employee.reduce((acc,c,i,t)=>{
    return acc + c.salary

},0) 

console.log(allSalary);


// some() - or

let someArr = [1,2,3,4]

let someVal = someArr.some((c,i,t)=>{
    return c%2==0

    // 1 %2 == 0 ; false
    // 2 % 2 == 0 ; true
    // 3 % 2 == 0 ; false
    // 4 % 2 == 0 ; true

    // false || true || false|| true = true
})

console.log(someVal);


// every() - and

let everyArr = [2,4,6,8]

let everyVal = everyArr.every((c,i,t)=>{
    return c % 2 ==0
})

console.log(everyVal);


// sort()


let sortArr = [2,55,643,1024,67,3,89]

console.log(sortArr.sort());


let sortval = sortArr.sort((a,b)=>{
    return b-a
})

console.log(sortval);




// convert method [arr to str]

// tostring()

let arr12 = [1,2,3]

console.log(arr12.toString());


// join()


console.log(arr12.join(" "));
console.clear();


// string advance concept

let string = "javascript"
// charAt(), index --> char 

console.log(string.charAt(1));




// charCodeAt(), index --> asscii value 

console.log(string.charCodeAt(1));


// length, 

console.log(string.length);



// slice, 

string = "javascript"

console.log(string.slice(2,5));




// toUpperCase(), 

string = "javaSCRIPT"

console.log(string.toUpperCase());


// toLowerCase(), 

string = "javaSCRIPT"

console.log(string.toLowerCase());


// trim(), 

string = " javaSCRIPT "

console.log(string.trim()[0]);


// includes(), 

console.log(string.includes("p"));



// indexOf(), 

string = "javaSCRIPT"

console.log(string.indexOf("a",2));



// replace(), 

string = " javaSCRIPTjava "

console.log(string.replaceAll("java","python"));



// startsWith(), 

string = "javaSCRIPT"

console.log(string.startsWith("j"));


// endsWith()

console.log(string.endsWith("T"));


// split()

string = "javaSCRIPT"

console.log(string.split());

string = "java-SCRIvPT"

console.log(string.split("va"));

console.clear();


// date

let data =new Date()

console.log(data);


// get 

// getFullyear()

console.log(data.getFullYear());

// getMonth()

console.log(data.getMonth());

// getDate()

console.log(data.getDate());

// getDay()

console.log(data.getDay());

// getHours()

console.log(data.getHours());

// getMinutes()

console.log(data.getMinutes());

// getSeconds()

console.log(data.getSeconds());


// local data

console.log(data.toLocaleTimeString());

console.log(data.toLocaleDateString());

console.log(data.toLocaleString());















// set


let data1 =new Date()

// year

data1.setFullYear(2003)

// month 

data1.setMonth(0)

// date

data1.setDate(30)

// hour

data1.setHours(5)

data1.setMinutes(5)

data1.setSeconds(5)

console.log(data1);



console.clear();


// birth day finder


let year2 = prompt("enter your DOB year")
let month2 = prompt("enter your DOB month use number")
let date2  = prompt("enter your DOB date")


let data3 = new Date()

data3.setFullYear(year2)
data3.setMonth(month2-1)
data3.setDate(date2)


console.log(data3.getDay());

let dayData = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

alert(dayData[data3.getDay()]);










// // // async -  time delay based
