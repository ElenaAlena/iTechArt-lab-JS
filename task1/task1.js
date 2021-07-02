//a
Array.prototype.map2 = function (callback, thisArg) {

    if (this === null) {
      throw new Error("Cant iterate over undefined or null");
    }
    let context = this;  
    let currO = Object(this);
  
    if (arguments.length > 1) {
      context = thisArg;
    }
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    let len = currO.length;  
    let newArray = [];
  
    let i = 0;
  
    while (i < len) {
      if (i in currO) {
        newArray[i] = callback.call(context, this[i], i, currO);
      }  
      i++;
    }
  
    return newArray;
};
Array.prototype.filter2 = function (callback, thisArg) {
    if (this === null || this === void 0) {
      throw new Error("Can't iterate over undefined or null");
    }
  
    let context = this;  
    let currO = Object(this);
  
    if (arguments.length > 1) {
      context = thisArg;
    }
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    let currOLen = currO.length;  
    let result = [];
  
    for (let i = 0; i < currOLen; i++) {
      if (i in currO) {
        let current = this[i];
        if (callback.call(context, current, i, currO)) {
            result.push(current);
        }
      }
    }  
    return result;
};
Array.prototype.reduce2 = function (callback, initValue) {
    if (this === null) {
      throw new Error("Cant iterate over undefined or null");
    }
  
    let result;
    let i = 0;
  
    let currO = Object(this);
    let len = currO.length;
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    if (arguments.length >= 2) {
      result = initValue;
    } else {
      if (len === 0) {
        throw new Error("Reduce of empty array with no initial value");
      }
      result = currO[i];
      i++;
    }
  
    for (; i < this.length; i++) {
      if (i in currO) {
        result = callback(result, currO[i], i, currO);
      }
    }
  
    return result;
};

const notes = [
  {
      id: 1,
      title: "Recipe",
      description: "Ingredients include 2 eggs...",
      pagesCount: 2,
      isMarked: false,
      access: []
  },
  {
      id: 2,
      title: "Workouts",
      description: "3 sets of squats...",
      pagesCount: 1,
      isMarked: true,
      access: []
  },
  {
      id: 3,
      title: "Passwords",
      description: "VISA ...",
      pagesCount: 6,
      isMarked: true,
      access: []
  },
  {
      id: 4,
      title: "To Do 2021",
      description: "1. Learn JS...",
      pagesCount: 3,
      isMarked: false,
      access: []
  }
];

//b1
notes.map2(currVal => {
  return {id: currVal.id, title: currVal.title}
});

//b
notes.filter2(note=>note.isMarked);

//b3
notes.reduce2((accum,currVal)=>accum+=currVal.pagesCount,0);


//c
const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];
function getUnique1(testArray){
  const newArr = new Set(testArray);
  const outArr=[];
  newArr.forEach((item)=>{
    testArray.indexOf(item)===testArray.lastIndexOf(item) ? outArr.push(item) : '';
  });
return outArr.length===1 ? outArr[0] : null;
}
function getUnique2(testArray){
  const outArr=[];
  for(let i=0;i<testArray.length;i++){
    testArray.indexOf(testArray[i])===testArray.lastIndexOf(testArray[i]) ? outArr.push(testArray[i]) : '';
  }
  return outArr.length===1 ? outArr[0] : null;
}
console.log(getUnique1(testArray));
console.log(getUnique2(testArray));
