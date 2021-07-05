//a
Array.prototype.map2 = function (callback, thisArg) {

    if (this === null) {
      throw new Error("Cant iterate over undefined or null");
    }
    let context = this;  
    const appliedObject = Object(this);
  
    if (arguments.length > 1) {
      context = thisArg;
    }
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    const appliedObjectLength = appliedObject.length;  
    let newArray = [];
  
    let i = 0;  
    while (i < appliedObjectLength) {
      if (i in appliedObject) {
        newArray[i] = callback.call(context, this[i], i, appliedObject);
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
    const appliedObject = Object(this);
  
    if (arguments.length > 1) {
      context = thisArg;
    }
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    const appliedObjectLength = appliedObject.length;  
    let result = [];
  
    for (let i = 0; i < appliedObjectLength; i++) {
      if (i in appliedObject) {
        const current = this[i];
        if (callback.call(context, current, i, appliedObject)) {
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
  
    let appliedObject = Object(this);
    const appliedObjectLength = appliedObject.length;
  
    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
  
    if (arguments.length >= 2) {
      result = initValue;
    } else {
      if (appliedObjectLength === 0) {
        throw new Error("Reduce of empty array with no initial value");
      }
      result = appliedObject[i];
      i++;
    }
  
    for (; i < this.length; i++) {
      if (i in appliedObject) {
        result = callback(result, appliedObject[i], i, appliedObject);
      }
    }  
    return result;
};

const NOTES = [
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
NOTES.map2(note => ({id: note.id, title: note.title}))

//b
NOTES.filter2(note=>note.isMarked);

//b3
NOTES.reduce2((accum,note)=>accum+=note.pagesCount,0);


//c
const TESTARRAY = [1,1,1,2,2,3,4,4,5,5,5,5];
function getUnique1(TESTARRAY){
  const newArr = new Set(TESTARRAY);
  const outArr=[];
  newArr.forEach((item)=>{
    TESTARRAY.indexOf(item)===TESTARRAY.lastIndexOf(item) ? outArr.push(item) : '';
  });
return outArr.length===1 ? outArr[0] : null;
}
function getUnique2(TESTARRAY){
  const outArr=[];
  for(let i=0;i<TESTARRAY.length;i++){
    TESTARRAY.indexOf(TESTARRAY[i])===TESTARRAY.lastIndexOf(TESTARRAY[i]) ? outArr.push(TESTARRAY[i]) : '';
  }
  return outArr.length===1 ? outArr[0] : null;
}
console.log(getUnique1(TESTARRAY));
console.log(getUnique2(TESTARRAY));
