// 59: Know Thy Enemy Exercise
{/* <body>
    <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
    <button id="btn" onclick=console.log("clicked")>Click Me</button>
</body> */}

// 코딩 연습 60: Click Events Exercise
const btn1 = document.querySelector('#hello'); //goodbye
const btn2 = document.querySelector('#goodbye');

btn1.addEventListener('click',() => {
    console.log("hello");
})
btn2.addEventListener('click',() => {
    console.log("goodbye");
})

// coding 61
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const pdtsContainer = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const pdts = form.elements.product;
    const qtys = form.elements.qty; 
    console.log(pdts.value);
    console.log(qtys.value);
    createli(pdts.value, qtys.value);
    pdts.value = '';
    qtys.value = '';
    
});

const createli = (pdts, qtys) => {
    const newpdt = document.createElement('li');
    const uTag = document.createElement('ul');
    
    // uTag.append(pdts);
    // newpdt.append(uTag);
    // newpdt.append(`${qtys}`);
    // pdtsContainer.append(newpdt);
    
    newpdt.innerText = `${pdts} ${qtys}`;
    
    // uTag.append(`${qtys} `);
    // uTag.append(pdts);
    newpdt.appendChild(uTag);
    pdtsContainer.appendChild(newpdt);
    
}

// 답안 2

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const pdtsContainer = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const pdts = form.elements.product;
    const qtys = form.elements.qty; 
    console.log(pdts.value);
    console.log(qtys.value);
    createli(pdts.value, qtys.value);
    pdts.value = '';
    qtys.value = '';
    
});

const createli = (pdts, qtys) => {
    const newpdt = document.createElement('li');
    const uTag = document.createElement('ul');
    
    // uTag.append(pdts);
    // newpdt.append(uTag);
    // newpdt.append(`${qtys}`);
    // pdtsContainer.append(newpdt);
    uTag.append(`${qtys} `);
    uTag.append(pdts);
    newpdt.append(uTag);
    pdtsContainer.append(newpdt);
    
}

// 코딩 연습 62: Input Event Practice
const idname = document.querySelector("#username");
const h1 = document.querySelector("h1");

idname.addEventListener("input", function(e){
    h1.innerText = `Welcome, ${idname.value}`;
    if (e.target.value === ""){
        h1.innerText = "Enter Your Username"
    }
})