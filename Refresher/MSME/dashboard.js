getUserName = () => {
    var emailId = sessionStorage.getItem("email");
    console.log(emailId);
    var userDetails = localStorage.getItem(emailId)
    const UserObject = JSON.parse(userDetails);
    document.getElementById("user-id").innerHTML = "Welcome "+ UserObject.username;
}

var loc = document.getElementById("user-location");

getUserLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      loc.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
function showPosition (position) {
    loc.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

userSubmitted = () => {
  alert("You have successfully registered your Business!")
}