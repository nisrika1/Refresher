loginUser = () => {
    const emailId = document.getElementById("user-email").value
    const passwordEntered = document.getElementById("user-password").value
    let userData = localStorage.getItem(emailId);
    const userObject = JSON.parse(userData);
    // debugger;
    if(userData === null){
        alert("User not found, Please register first")
        return;
    }
    else if(userObject.userPassword === passwordEntered){
        sessionStorage.setItem("email",emailId)
        document.getElementById("login-form").action = "./dashboard.html"
    }
    else{
        alert("User ID / Password incorrect, please check")
        return;
    }
}   

registerNewUser = () => {
    window.open("registration.html","_self")
}