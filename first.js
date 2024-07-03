// name = 'Akash';
// console.log('akash');
// age = 23;
// price = 99.99;
// console.log(age);
// console.log(price);
// x = null;
// console.log(x);

// let fullName = 'Tony';
// fullName = 'akash'
// console.log(fullName)

// console.log('Hii Hello');
// console.log('Hii Shet');


// const book = 'Account';

// book = 'BK';
// console.log(book);

// let book = 'Account';
// book = 'BK';
// console.log(book);

// {
//     let name = 'akash';
//     console.log(name);
// }

// {
//     let name = 'kapadi';
//     console.log(name);
// }


// let a = 10;
// console.log(typeof(a));

// let b = 'akash';
// console.log(typeof(b));

// let c = true;
// console.log(typeof(c));

// let d;
// console.log(typeof(d));

// let m = null;
// console.log(typeof(m));

// const student = {
//         name : 'akash',
//         age : 23,
//         cgpa : 7.74,
//         isPass : true
// };

// console.log(student.age);

// student['cgpa'] = '7.75';
// console.log(student.cgpa);

// student['age']=student['age'] + 1;
// console.log(student);

// student['cgpa'] = student['cgpa'] + 1;
// console.log(student);

// const profile = {
//         username : "akash Kapadi",
//         isfollow : true,
//         following : 324,
//         followers : 2300,

// };
// console.log(profile)

// console.log(typeof profile.isfollow)



// ==================================================== comments =====================================================

// This is a comment in JS
// ==================================================== Arthmetic operator ====================================================

// let a = 5;
// let b = 5;                                      +,-,*,%,/
// console.log("a + b = ", a+b);

// =================================================== Unary operator =============================================

// let a = 5;
// // console.log(a + 1) //6  // right but js new method

// a++ // 6;
// console.log(a);


// let b = 5;
// b--;
// console.log(b);

// let a = 5;
// console.log(++a);
// console.log(a++);

// let b = 6;
// console.log(--b);
// console.log(b--);

// ==================================================== Asignment Operators ============================================
// let a = 5;
// let b = 5;
// a += 4;      //9     -=,*=,%=,/*
// console.log(a);

//===================================================== Comparison Operators ========================================
// let m = 5;
// let n = 2;
// console.log('5 == 2 ',m == n)    // ==,!=,===,!==
//===================================================================================================================
// let a = 1 + '1'
// console.log(a)

//===================================================== conditional statement=========================================
// let age = 25
// if (age>10){
//     console.log('you can vote')
// }
// ===================================================================================
// let mode = "dark";
// let color;
// if (mode === 'dark') {
//     color = 'black'
// }
// else{
//     color="white";
// }


// console.log(color);

// let age = 19;
// if (age > 18){
//     console.log('you can vote')
// }else{
//     console.log('not vote')
// }

// ======================================================================== even / odd number ================================================================
// let n = 18;
// if (n % 2 === 0){
//     console.log('even');
// }else{
//     console.log('odd');
// }
// ======================================================================= if else if else ====================================================================

// let mode = 98;
// if (mode <= 18){
//     console.log('Tumhi lahan ahat');
// }else if (mode>18 && mode <= 60){
//     console.log('Ata tumche paise kamayache vay ahet');
// }else{
//     console.log('tumche ata vay zale')
// }
// ======================================================================== tanary operator ========================================================
// let age = 10
// let result=age>=18 ? 'adult' : 'not adult';   // condition ? true output : false output
// console.log(result)

// let a = (prompt("enter a number"))
// console.log(a);

// ============================================================ prompt ===============================================================
// let a = prompt('inter a number');
// if (a % 5 === 0){
//     console.log(a,'it is a multiple of five');

// }else{
//     console.log(a,'not multiple of 5');
// }

// ============================================================= Grate ==============================================================
// let Marks = prompt('Enter a Marks') // Input
// // let Marks = 44;
// let grade; //ye na use karata

// if (Marks >= 80 && Marks <=100) {
//     grade = 'A';
//     // console.log('A') asa sudhha kaaru shakato


// }else if (Marks >= 70  && Marks <= 79){
//     grade = 'B';
//     // console.log('B')
// }else if (Marks >= 60 && Marks <= 69){
//     grade = 'C';
//     // console.log('C')

// }else if (Marks >= 50 && Marks <= 59){
//     grade = 'D';
//     // console.log('D')


// }else if (Marks >= 40 && Marks <= 49){
//     grade = 'E';
//     // console.log('E')

// }else if (Marks >= 0 && Marks <= 39){
//     grade = 'F';
//     // console.log('F')


// }

//     (console.log(grade)); // ye n use karata


// ===============================================                                       =========================

//  =================================================   Loops in JS  ==========================================================

// ================================================= For loops ===========================================================================
// for (let count=1; count<=5; count++);{
//     console.log("akash kapadi");// right 5 akash kapadi not show only 5 akash kapadi
// }
// 
// =================================== calculate number

// let sum = 0;
// let n = 5;
// for (i = 1; i <= n; i++){
//     sum = sum + i;              // 1 + 2 + 3 + 4 + 5 = 15
// }
// console.log('sum' ,sum)

// ==============================infinite loop=============================
// ha use nahi karayacha website crase hou shakate

//==================================  while loop ===========================================

// while loop not difine because creash the website

// ==================================== do while loop ==============================
// while loop not difine because creash the website




//=============================================== for in loop ==============================================
// let student = {
//         name : 'rahul kumar',
//         age : 20,
//         cgpa : 7.7,
//         isPass : true
//     };
//     for (let key in student){
//         console.log(key, "value=", student[key]);
//     }


// =========================== practice ====================================
// for(let number = 0; number<=100; number++ ){
//     console.log(number);
// }


// for (let number = 0; number <= 100; number ++){
//     console.log(number);
// }
//  ==================================== Even Number ==========

// for (let num = 0; num <= 100; num++){
//     if (num % 2 +== 0){
//         console.log('it is even number' , num);
    
// }
// }

// for(let even = 0; even<=100; even ++){
//     if (even%2===0){
//         console.log(even)
//     }
// }
// ================================ Game  ================================================
// let gameNum = 25;

// let userNum = prompt('Guess the game number : ');

// while(userNum != gameNum){
//     userNum = prompt('you entered wrong number, Guess again : ');
// }

// console.log('Congratualations, you entered the right number');

// ==============================String in JS =================================================

// let a = 'akash';
// console.log(a[3]);
//==================================template literale====================
// let specialString = `this is a template literal`;
// console.log(typeof specialString)

// let obj = {
//    item : "Pen",
//    price : 10,

// };
// console.log("the const of", obj.item, "is" , obj.price,'rupees');
// console.log(`the const of ${obj.item} is ${obj.price} rupees`);  // template literals

// ========================= expect chareacter =====================
// console.log("hay\nmy name is akash")  //  \n
// console.log("hey, my name is \t akash") // \t

//  ============================ string method =====================
// let a = 'Akash kapadi'
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim()); //       first & last space la remove karto
// console.log(a.slice(1,10))

// let str1 = 'akash';
// let str2 = 'kapadi';
// let res = str2.concat(str1);
// let ans = str1 + str2
// console.log(res)
// console.log(ans)
// console.log(a.replace("k","K"));

// ============================================================================
// let username = prompt('Enter your name') ;
// let surname = prompt('Enter your surname');
// let fullName = username + surname
// console.log(`@${fullName}`,fullName.length);

// ==================================== Arrary ==================================

// let marks = [98,76,87,87,66,78,87]
// console.log(marks)

// let music = ['sa','re','ga','ma','pa']
// console.log(music)

// ===================== looping over an arrary==================

// let music = ['sa','re','ga','ma','pa']
// for (let i = 0; i < music.length; i++){
//     console.log(music[i]);
// }

// let name = ['pradip','chetan','bhushan','omkar','pranav']
// for (let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

// for of

// for (let names of name){
//     console.log(names.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];
// for(let mark of marks){
//     console.log(mark)
// }

// let marks = [98,54,75,45,43,34,33];
// let sum = 0;

// for (let mark of marks){
//     sum += mark;
// }
// let avg = sum/marks.length;
// console.log(avg)

// ==================================Arrary method ===============================

// let raga = ['Bhup','bihag','yaman','kalavati','bhimpasas','charucheshi','yamankalyan'];
// console.log(raga.push('Bhairav'));

// console.log(raga.pop());

// console.log(raga.toString());

// console.log(raga.unshift('Bhim'),raga);    // 0 idex move the value
// console.log(raga.shift(),raga);  //first letter remove

// console.log(raga.slice(0,3));
// console.log(raga.slice(0,3));
// console.log(raga.splice(2,1,"Bihag"), raga);

// ============================ practice===================

// let com = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// console.log(com.shift());
// console.log(com.splice(2,1,"Ola"));
// console.log(com.push("Amazon"));
// console.log(com)

// ============================================ FUNCTION ====================


// function Akash(){
//     console.log('my name is akash');
// }
// Akash();

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1000,2000)

// function sum(x,y){
//     // local variables
//     s = x + y;
//     return s;
// }
// let a = sum(8,8)
// console.log(a)

// ======================== Arrow fuction ================
// function sum (a,b){
//     return a + b;
// }
// const arrowsum = (a,b) => {
//     console.log(a+b)
// }
// arrowsum(5,5)



// function mul(a,b){
//     return a * b
// }

// const arrowmul = (a,b) => {
//     console.log(a * b)
// }
// arrowmul(5,5)



// function countVowel(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char==="i" || char === "o" || char==="u" || char ==="e"){
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowel('apanacollege')

// ============================== for Each loop =======================

// let arr = ['pune', 'delhi','mumbai'];

// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });


// ========================================================
//  let nums = [2,3,4,5,6,7];
//  nums.forEach((num) => {
//     console.log(num * num);
//  })

// ================================= Map method ================================

// let num = [67,52,39];
// num.map((val) =>{
//     console.log(val);
// });

// ====================== filter =========================

let arr = [1,2,3,4,5,6,7,8];

let evenArr = arr.filter((val) =>{
    return val % 2 !== 0;
});
console.log(evenArr);










































































































