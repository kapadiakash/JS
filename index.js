// let h2 = document.querySelector("h2")
// console.log(h2.innerText);

// h2.innerText = h2.innerText + " form Apana College studunt";


// let divs = document.querySelectorAll(".box")
// divs[0].innerText = 'new unique value 1 ';
// divs[1].innerText = 'new unique value 2 ';
// divs[2].innerText = 'new unique value 3 ';

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`
//     idx ++;
// }


// let div = document.querySelector('div')
// // console.log(div)
// div.style.backgroundColor = 'green';

// div.style.visibility = 'hidden';


//  let newBtn = document.createElement("button");
// newBtn.innerText = 'Click me!'
//  console.log(newBtn)


// let div = document.querySelector("div");
// div.append(newBtn);

// let p = document.querySelector('p')
// div.before(newBtn)

// newBtn.style.width = '90px';
// newBtn.style.height = '20px';

// let newHeadding = document.createElement('h1');
// newHeadding.innerHTML = "<i>Hi, I am new !</i>";

// document.querySelector("body").prepend(newHeadding)

// let para = document.querySelector('p');
// para.remove();

// practice

// let newBtn = document.createElement('Button');
// newBtn.innerText = 'click me !';
// newBtn.style.backgroundColor = 'red';
// newBtn.style.color = 'white';
// console.log(newBtn)


// document.querySelector('body').prepend(newBtn)

// let para = document.querySelector('p')
// para.style.color='green'
// para.innerText='My Name is Akash'


// 

let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log('btn was clicked');
//     let a = 25
//     a++
//     console.log(a)
// }

// let div = document.querySelector('#btn2');
// div.onmouseover = () =>{
//     console.log('your are inside div');
// }

// let ita = document.querySelector('#ita')
// ita.onmouseover = () => {
//     console.log('This is my name')
// }

// btn1.addEventListener('click',() =>{
//     console.log('button1 was clicked - handle');
// });

// btn1.addEventListener('click',() =>{
//     console.log('button1 was clicked - handle');
// });

// const hander3 = () =>{
//     console.log("button3 was clicked - handler3");
// };

// btn1.addEventListener('click', hander3);


// btn1.addEventListener('click',() =>{
//     console.log('button1 was clicked - handle');
// });

// btn1.removeEventListener("click",hander3)


// =======================dark and light color change==================================

let dark = document.querySelector("#btn");
let currmode = "light"

dark.addEventListener("click",() =>{
    if (currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = 'black';

    }else{
        currmode = 'light';
        document.querySelector("body").style.backgroundColor = 'white ';

    }
    console.log(currmode);
})




















