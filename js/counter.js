// let sum = 0;
// function clickMe() {
//   const h2 = document.getElementById("count");
//   sum += 1;
//   //   sum= sum +1
//   h2.innerText = sum;
// }

// const minusBtn = document.getElementById("minus-btn");

// minusBtn.addEventListener("click", function () {
//   const h2 = document.getElementById("count");
//   sum -= 1;
//   //   sum = sum -1
//   h2.innerText = sum;
// });


// another process:- 
const count = document.getElementById('count')
function clickMe() {
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
}

const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function () {
 const h2 = document.getElementById('count');
  sum -= 1;
  h2.innerText = sum;
})