const firebaseConfig = {
    apiKey: "AIzaSyAcatUtxy76xNsa7rnWaZ00205z38_UILw",
    authDomain: "my-firebase-first-projec-a34cf.firebaseapp.com",
    databaseURL: "https://my-firebase-first-projec-a34cf-default-rtdb.firebaseio.com",
    projectId: "my-firebase-first-projec-a34cf",
    storageBucket: "my-firebase-first-projec-a34cf.appspot.com",
    messagingSenderId: "520665276714",
    appId: "1:520665276714:web:b7cd8348d5532ce2b9be53",
    measurementId: "G-WHH2866FNJ"
  };

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

window.onload = function() {
    var name = localStorage.getItem('user_name');
    
    if (name != "undefined" || name != "null") {
        document.getElementById('welcomeMessage').innerHTML = "Welcome " + name + " !";
    } else {
        document.getElementById('welcomeMessage').innerHTML = "Welcome Pl provide Name !";
    }
}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
   

    
}    

function getData() { 
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+ "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout () {
    localStorage.removeItem("user_Name");
    localStorage.removeItem("room_Name");
    window.location = "index.html"

}
getData();

function initializeApp() {
    //will code later
}