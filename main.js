function accept(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("ur name", user_name);
    var email = document.getElementById("email").value;
    localStorage.setItem("ur email", email);
   
}