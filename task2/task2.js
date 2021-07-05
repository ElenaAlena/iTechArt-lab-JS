//a
window.x = 1;
/*const bind =
  (fn, context) =>
  (...args) =>
    fn.apply(context, [...args]);
    */
const bind =
  (fn, context) =>
  (...args) => {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](args);
    delete context[uniqId];
    return result;
  };
const context = { x: 2 };
const testThis = function (y) {
  console.log(`x=${this.x}, y=${y}`);
};
testThis(100); // x=1, y=100

const boundFunction = bind(testThis, context);
console.log(boundFunction(100)); // x=2, y=100

//b
const Robot = function (name) {
  this.name = name;
};
function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}
const voltron = new Robot("Voltron");

("Human can count to 1"); //0 + 1
console.log(add(0, 1));
console.log(add.bind(this)(0, 1));
console.log(add.apply(this, [0, 1]));
console.log(add.call(this, 0, 1));

("Voltron can count to 3"); //1 + 2
const addBindedByVoltron = add.bind(voltron);
console.log(addBindedByVoltron(1, 2));
console.log(add.apply(voltron, [1, 2]));
console.log(add.call(voltron, 1, 2));

("Voltron can count to 50"); //20 + 30
console.log(add.bind(voltron)(20, 30));
console.log(add.apply(voltron, [20, 30]));
console.log(add.call(voltron, 20, 30));
