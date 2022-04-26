//54. coding
// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'
document.querySelector('img').setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
// document.querySelector('h4') = 'chicken';
document.querySelector('img').setAttribute('alt', 'chicken');


//55. coding
const container = document.querySelector('#container');
container.style.textAlign = 'center';

// getElementById는 img 태그는 안되네? 왜지?()
const img = document.querySelector('img');
img.style.width = "150px";
img.style.borderRadius = "50%";


// 56. coding
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//PLEASE DON'T CHANGE THIS LINE!
const spans = document.querySelectorAll('span');

// spans[0].style.color = 'red';
//YOU CODE GOES HERE:
for (let c = 0; c < colors.length; c++) {
    spans[c].style.color = colors[c]; 
}

// 57. classList pratice coding
// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll("li");

// lis[0].classList.toggle('highlight');
for (let li of lis) {
    li.classList.toggle('highlight');
}

// 59. coding: 100 button make 
// WRITE YOUR CODE IN HERE:
// const btn = document.createElement('button');
// btn.innerText = 'hey!';
// const div = document.querySelector('#container');
// div.appendChild(btn);

for (let i = 0; i < 100; i++){
    const btn = document.createElement('button');
    btn.innerText = 'hey!';
    const div = document.querySelector('#container');
    div.appendChild(btn);
}
