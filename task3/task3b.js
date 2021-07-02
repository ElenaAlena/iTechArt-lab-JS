let input1 = document.querySelector("#one");
let input2 = document.querySelector("#two");

let input1Press = 0;
let input2Press = 0;
input1.oninput = function () {
  input1Press++;
  setTimeout(() => {
    --input1Press;
    if (input1Press == 0) {
      input2.value = input1.value;
      console.log(input1.value);
    }
  }, 1000);
};
input2.oninput = function () {
  input2Press++;
  setTimeout(() => {
    --input2Press;
    if (input2Press == 0) {
      input1.value = input2.value;
      console.log(input1.value);
    }
  }, 1000);
};
