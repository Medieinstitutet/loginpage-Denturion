//Added user information to local storage.
localStorage.setItem("userName", "janne");
localStorage.setItem("pw", "test");



//Header content.
const header = document.getElementById("header");

const userName = document.createElement("input");
    userName.setAttribute("id", "userName");
    userName.setAttribute("type", "password");
    userName.setAttribute("placeholder", "Your username");

const pw = document.createElement("input");
    pw.setAttribute("id", "pw");
    pw.setAttribute("type", "password");
    pw.setAttribute("placeholder", "Your password");

const loginBtn = document.createElement("button");
    loginBtn.setAttribute("id", "loginBtn");
const logoutBtn = document.createElement("button");
    logoutBtn.setAttribute("id", "logoutBtn");

function showLoginForm() {
    header.append(userName);
    header.append(pw);
    header.append(loginBtn);
    loginBtn.innerText = "Log in"
}
showLoginForm();

function showLogoutBtn() {
    header.append(logoutBtn);
    logoutBtn.innerText = "Log out";
}


//Login function, with removal of form on successful login.
loginBtn.addEventListener("click", function() {
    var storedName = localStorage.getItem('userName');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName').value;
    var pw = document.getElementById('pw').value;

    if(userName === storedName && pw === storedPw){
        loggedIn();
        showLogoutBtn();
        const removeNameInput = document.getElementById("userName");
        removeNameInput.remove();
        const removePasswordInput = document.getElementById("pw");
        removePasswordInput.remove();
        const removeLoginBtn = document.getElementById("loginBtn");
        removeLoginBtn.remove();                  
    }else if (userName !== storedName && pw !== storedPw){
        wrongLogin();
    }else{
        notLoggedIn();
    }
});

//Logout function
logoutBtn.addEventListener("click", function() {
    notLoggedIn();
    showLoginForm();

    const removeLogoutBtn = document.getElementById("logoutBtn");
    removeLogoutBtn.remove();
})

//Adding text to main on submit, depending on result.
const mainText = document.getElementById("mainText");

function notLoggedIn() {
    mainText.innerHTML = "Please log in to continue";
}

function loggedIn() {
    mainText.innerHTML = "Log in successful, welcome!";
}

function wrongLogin() {
    mainText.innerHTML = "Incorrect login information, please try again";
}





