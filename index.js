let myarr = [];

let inputEl = document.getElementById("inputel");

let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");
let clearEl = document.getElementById("clear-btn");
let ls = JSON.parse(localStorage.getItem("myarr"));
//submit btn

if (ls) {
  myarr = ls;
  display();
}
inputBtn.addEventListener("click", function () {
  myarr.push(inputEl.value);
  inputEl.value = "";
  //  console.log(myarr);

  localStorage.setItem("myarr", JSON.stringify(myarr));

  display();

  // console.log(localStorage.getItem("myarr"));
});

//clear all
clearEl.addEventListener("click", function () {
  console.log("delete clickeds");
  localStorage.clear();
  myarr = [];

  display();
});

//display function
function display() {
  a = " ";
  for (let i = 0; i < myarr.length; i++) {
    a += `
          <li> 
    
                  ${myarr[i]}  <button onclick="deletevalue('${i}')">Delete</button>
          
          </li>`;
  }
  ulEl.innerHTML = a;
}

//for delete a particular element
function deletevalue(val) {
  for (let i = 0; i < myarr.length; i++) {
    if (i == val) {
      //      alert(myToDo[i] + " " + i);
      myarr.splice(i, 1);
    }
  }
  //localStorage.setItem("myarr", JSON.stringify(myarr));
  display();
}
