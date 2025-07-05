let myObj = {
  name: "David",
  surname: "Tezelashvili",
  academy: "GOA",
  isMentor: true,
  num: 100,
  hobbies: ["programming", "bike", "basketball"],
  favColor: "Blue",
};

let list = document.getElementById("myList");

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    let listItemKey = document.createElement("li");
    listItemKey.textContent = key;
    list.appendChild(listItemKey);

    let listItemValue = document.createElement("li");
    listItemValue.textContent = myObj[key];
    list.appendChild(listItemValue);
  }
}
