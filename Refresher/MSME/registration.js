newUserRegistrationForm = () => {
    const emailId = document.getElementById("user-email").value;
    const fullName = document.getElementById("user-name").value;
    const contactNumber = document.getElementById("user-contact").value;
    const dateOfBirth = document.getElementById("user-DOB").value;
    const userPassword = document.getElementById("user-password").value;
    let userStringObject = JSON.stringify({username : fullName, dob : dateOfBirth, contact: contactNumber, userPassword : userPassword })
    localStorage.setItem(emailId, userStringObject)

    alert("You are registered. Now please login")

}
