// string , number , boolean ,null ,undefined
//js==>camel case
//template string
//operations==> mathmatical operations

// var num1 = 10;
// var num2 = 10;
// console.log(num1+num2);
// console.log(num1===num2);

// var str="Text"
// console.log(num1 + str);
// console.log();

// truthy value ==>" " ,"string", 60 ,true
//falsy value==> "", false,0,-0,NaN,Null ,undefined
// function checkonfunction(start, end, breakn, contn) {
//   if (start && end && breakn && contn) {
// for (var i = start; i <= end; i++) {
//   if (i == breakn) {
// break;
//   } else if (i == contn) {
// continue;
//   }
//   console.log(i);
// }
//   } else {
// console.log("please enter valid number");
//   }
// }

// checkonfunction(1, 20, 18);

// function statement
// function getName() {
// return'noran'
// }
// var firstName = getName();

// function expression
// var fullName = function () {
// return'noran fayez'
// }
// console.log(fullName());
// arrow function
// var arrfun = () => 'js';
// console.log(arrfun());

// /////////////////////////////
//Number Ofs Users
var users = [];

function NumberOfUsers() {
  var num = Number(prompt("please enter number of user u want to add"));
  for (var i = 1; i < num; i++) {
    addUser();
  }
  console.log(num);
}
NumberOfUsers();

function addUser() {
  var user = {
    id: Number(prompt("eneter user id ")),
    uname: prompt("eneter user name"),
    balance: Number(prompt("enter user balance")),
  };
  users.push(user);
  console.log(users);
}
addUser();
function updateUser() {
  var uid = Number(prompt("enter id u want to edit it is balance"));
  var newBalance = Number(prompt("enter u new balance"));
  //   debugger;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == uid) {
      users[i].balance = newBalance;
    }
  }

  console.log(users);
}

updateUser();

function deleteUser() {
  var deletedid = Number(prompt("enter id of user u want to delete"));

  var i = users.findIndex((ele) => ele.id == deletedid);
  users.splice(i, 1);

  //   for (var i = 0; i < users.length; i++) {
  // if (users[i].id == deletedid) {
  //   users.splice(i, 1);
  // }
  // }
  console.table(users);
}
deleteUser();
