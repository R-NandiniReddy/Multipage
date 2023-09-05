// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpla5m96sbAimVU9m0pETSQdC9-rcaqEU",
  authDomain: "nourish-709e6.firebaseapp.com",
  databaseURL: "https://nourish-709e6-default-rtdb.firebaseio.com",
  projectId: "nourish-709e6",
  storageBucket: "nourish-709e6.appspot.com",
  messagingSenderId: "334376663410",
  appId: "1:334376663410:web:62e68ad05eb590013105eb",
  measurementId: "G-B7SZNJQ9QE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("ur name");
document.getElementById("user_name").innerHTML = "welcome" + "user_name" +"!";

function addroom(){
    room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update(
  {
      purpose:"inserting room name"
  });
    localStorage.setItem("room_name",room_name);
    window.location="second.html";
     
}
