// alert("Hello from Javascript!!")

// document.getElementById("message").innerHTML= "This is from JavaScript!!";

// function greet(){
//     document.getElementById("message").innerHTML = "Happy Ganesh Chaturti";
// }

//  a = 10 ;
//  b = 20;
//  c = a + b;
// document.getElementById("message").innerHTML = "Adddition of " + a +" and "+ b +" is "+ c;

// x = 10;  //by default var (global scope)
// let y = 10; //(local scope)
// console.log("Value of x = " + x);
// console.log("Value of y = " + y);

// {
//     var x = 20;
//     let y = 20;
//     console.log();
//     console.log("Value of x = " + x);
//     console.log("Value of y = " + y);
// }

// console.log("Value of x = " + x);
// console.log("Value of y = " + y);

// function greetuser(){
//     let username = document.getElementById("username").value;
//     document.getElementById("message").innerHTML = " Hello " + username;
// }

// function add(){
//     let value1 =  parseInt(document.getElementById("value1").value);
//     let value2 = parseInt(document.getElementById("value2").value);
//     console.log(value1);
//     document.getElementById("message").innerHTML = "Addition is " + (value1 + value2);
// }

// function sub(){
//     let value1 =  parseInt(document.getElementById("value1").value);
//     let value2 = parseInt(document.getElementById("value2").value);
//     console.log(value1);
//     document.getElementById("message").innerHTML = "Substraction is " + (value1 - value2);
// }

// function mul(){
//     let value1 = parseInt(document.getElementById("value1").value);
//     let value2 = parseInt(document.getElementById("value2").value);
//     console.log(value1);
//     document.getElementById("message").innerHTML = "Multiplication is " + (value1 * value2);
// }

// function div(){
//     let value1 = parseInt(document.getElementById("value1").value);
//     let value2 = parseInt(document.getElementById("value2").value);
//     console.log(value1);
//     document.getElementById("message").innerHTML = "Division is " + (value1 / value2);
// }


//Array
//const = final in Java
// const cars = [' Getz Prime ', ' Honda Amaze ' , ' i20 ' , ' Brezza '];
// document.getElementById("message").innerHTML = cars;


//Date Function
// var date = new Date();
// document.getElementById("fulldate").innerHTML = date;
// switch (date.getDay()) {
//     case 1:
//         document.getElementById("day").innerHTML = 'Monday';
//         break;
//     case 2:
//         document.getElementById("day").innerHTML = 'Tuesday';
//         break;
//     case 3:
//         document.getElementById("day").innerHTML = 'Wednesday';
//         break;
//     case 4:
//         document.getElementById("day").innerHTML = 'Thursday';
//         break;
//     case 5:
//         document.getElementById("day").innerHTML = 'Friday';
//         break;
//     case 6:
//         document.getElementById("day").innerHTML = 'Saturday';
//         break;
//     case 7:
//         document.getElementById("day").innerHTML = 'Sunday';
//         break;

//     default:

//         break;
// }
// // document.getElementById("day").innerHTML = date.getDate();

// switch (date.getMonth() + 1) {
//     case 1:
//         document.getElementById("month").innerHTML = 'Jan';
//         break;
//     case 2:
//         document.getElementById("month").innerHTML = 'Feb';
//         break;
//     case 3:
//         document.getElementById("month").innerHTML = 'Mar';
//         break;
//     case 4:
//         document.getElementById("month").innerHTML = 'Apr';
//         break;
//     case 5:
//         document.getElementById("month").innerHTML = 'May';
//         break;
//     case 6:
//         document.getElementById("month").innerHTML = 'Jun';
//         break;
//     case 7:
//         document.getElementById("month").innerHTML = 'Jul';
//         break;
//     case 8:
//         document.getElementById("month").innerHTML = 'Aug';
//         break;
//     case 9:
//         document.getElementById("month").innerHTML = 'Sep';
//         break;
//     case 10:
//         document.getElementById("month").innerHTML = 'Oct';
//         break;
//     case 11:
//         document.getElementById("month").innerHTML = 'Nov';
//         break;
//     case 12:
//         document.getElementById("month").innerHTML = 'Dec';
//         break;

//     default:

//         break;
// }
// // document.getElementById("month").innerHTML = date.getMonth() + 1; //bcoz index starts from 0
// document.getElementById("year").innerHTML = date.getFullYear();
// document.getElementById("hours").innerHTML = date.getHours();
// document.getElementById("minutes").innerHTML = date.getMinutes();
// document.getElementById("seconds").innerHTML = date.getSeconds();


//LOOPS
//1. For Loop

// const cars = [' Getz Prime ', ' Honda Amaze ', ' i20 ', ' Brezza '];

// let text = "";
// let length = cars.length;
// for (let i = 0; i < length; i++) {
//     text = text + "Car is " + cars[i] + "<br>";
// }

// document.getElementById("message").innerHTML = text;

//2. For in
// const cars = [' Getz Prime ', ' Honda Amaze ', ' i20 ', ' Brezza '];
// let text = "";
// for(let i in cars){
//     text = text + "Car is " + cars[i] + " <br>";
// }
// document.getElementById("message").innerHTML = text;



//2. For of
// const cars = [' Getz Prime ', ' Honda Amaze ', ' i20 ', ' Brezza '];
// let text = "";
// for(let car of cars){
//     text = text + "Car is " + car + " <br>";
// }
// document.getElementById("message").innerHTML = text;

function validate(){
    alert("Validate Method is called");
    if(document.userdetails.username.value == ""){
        alert("Please provide user name!");
        document.userdetails.username.focus();
        return false;
    }
    if(document.userdetails.email.value == ""){
        alert("Please provide user email!");
        document.userdetails.email.focus();
        return false;
    }
    if(document.userdetails.zipcode.value == ""){
        alert("Please provide user zipcode!");
        document.userdetails.zipcode.focus();
        return false;
    }
    if(document.userdetails.country.value == -1){
        alert("Please select country!");
        document.userdetails.country.focus();
        return false;
    }

    return false;
}




