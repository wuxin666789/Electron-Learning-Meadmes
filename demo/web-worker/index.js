const first = document.querySelector("#number1");

const second = document.querySelector("#number2");

const result = document.querySelector(".result");
const arr = [first, second];

const myWorker = new Worker("worker.js");
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("message posted to worker");
  };
});

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("message received from worker");
};
// if (window.Worker) {//创建worker前需要判断一下
//   const myWorker = new Worker("worker.js");
//   [first, second].forEach((input) => {
//     input.onchange = () => {
//       myWorker.postMessage([first.value, second.value]);
//       console.log("message posted to worker");
//     };
//   });

//   myWorker.onmessage = (e) => {
//     result.textContent = e.data;
//     console.log("message received from worker");
//   };
// } else {
//   console.log("Your browser doesn't support web workers");
// }
