var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");

var allUsersInfo = [];

function storeMyData() {
  var allUsers = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };

  clearTheData()
  
}

function clearTheData() {
  userName = "";
  userEmail = "";
  userPassword = "";
}

function checkDatastored() {
  for (let i = 0; i < allUsersInfo.length; i++) {
    if (userEmail == allUsers.userEmail) {
    } else {
    }
  }
}
