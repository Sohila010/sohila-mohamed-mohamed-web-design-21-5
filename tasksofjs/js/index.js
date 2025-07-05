var userName = document.querySelector("#userName");
var userId = document.querySelector("#userId");
var userBalance = document.querySelector("#userBalance");
var submitBtn = document.querySelector("#submit");
var tBody = document.querySelector("tbody");
var users = [];


function add() {
    var user = {
        uName: userName.value,
        uId: userId.value,
        uBalance:userBalance.value
    }
    users.unshift(user);
    display(users)

}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    add()
});

function display(displayedarr) {
    var cartona = ``
    for (let i = 0; i < displayedarr.length; i++){
        cartona += ` <tr>
     <td>${displayedarr[i].uId}</td>
     <td>${displayedarr[i].uName}</td>
     <td>${displayedarr[i].uBalance}</td>
     <td><button class="btn btn-danger btn-sm" onclick="deleteuser(${i})">Delete</button></td>
     <td><button class="btn btn-warning btn-sm text-white" onclick="update(${i})">Edit</button></td>
 </tr>  `;
    }

tBody.innerHTML=cartona
}

// 
function deleteuser(deletedIndex) {
    users.splice(deletedIndex, 1);
    display(users);
}
function update(updateIndex) {
    var newBalance = +prompt('enter new balance');
    users[updateIndex].uBalance = newBalance;
    display(users);
}
