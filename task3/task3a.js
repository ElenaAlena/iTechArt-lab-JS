const downloads = [
  {
    id: 1,
    title: "Recipe",
    status: "Done",
  },
  {
    id: 2,
    title: "Workouts",
    status: "Pending",
  },
  {
    id: 3,
    title: "Passwords",
    status: "Pending",
  },
  {
    id: 4,
    title: "To Do 2021",
    status: "Pending",
  },
  {
    id: 5,
    title: "Books",
    status: "Failed",
  },
];
let my_root = document.getElementById("root");

class MyTable {    
  constructor(elem, data) {
    this.data = data;
    this._itemsMap = new Map();
    elem.appendChild(this.createElem());
  }
  createElem() {
    this.table = document.createElement("table");
    this.createTableHead();
    this.createTableBody()
    return this.table;
  }
  createTableHead() {
    let tablehead = document.createElement("tr");
    for (let prop in downloads[0]) {
      let th = document.createElement("th");
      th.innerText = prop;
      tablehead.appendChild(th);
    }
    this.table.appendChild(tablehead);
  }  
  createTableBody() {
    this.data.forEach((item) => {
      let tableRow = document.createElement("tr");
      for (let prop in item) {
        let td = document.createElement("td");
        td.innerText = item[prop];
        tableRow.appendChild(td);
      }
      this._itemsMap.set(item.id, tableRow);
      this.table.appendChild(tableRow);
    });
  }
  get itemsMap(){
      return this._itemsMap;
  }
}
class MyButton {
  constructor(value, elem) {
    this.value = value;
    elem.appendChild(this.createElem());
  }
  createElem() {
    this.button = document.createElement("input");
    this.button.setAttribute("type", "button");
    this.button.setAttribute("value", "Click me");
    this.button.onclick = this.btnClick;
    return this.button;
  }
}
let myTable =new MyTable(my_root,downloads);

///button
let button = new MyButton("button", my_root);
button.button.addEventListener("click", function (event) {
  setTimeout(checkStatus, 2000, 0);
});
checkStatus = (i) => {
  if (i < downloads.length) {
    console.log("Check started");
    setTimeout(setStatus, 5000, i);
  } else {
    console.log("All checked");
  }
};
setStatus = (i) => {
  let isDone = false;
  while (i < downloads.length && !isDone) {
    if (downloads[i].status === "Pending") {
      isDone = true;
      downloads[i].status = "Done";
      myTable.itemsMap.get(downloads[i].id).lastChild.innerText = "Done";
      console.log("Status Changed");
    }
    i++;
  }
  checkStatus(i);
};
