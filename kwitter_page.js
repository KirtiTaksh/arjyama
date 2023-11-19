var firebaseConfig = {
    apiKey: "AIzaSyAcatUtxy76xNsa7rnWaZ00205z38_UILw",
    authDomain: "my-firebase-first-projec-a34cf.firebaseapp.com",
    databaseURL: "https://my-firebase-first-projec-a34cf-default-rtdb.firebaseio.com",
    projectId: "my-firebase-first-projec-a34cf",
    storageBucket: "my-firebase-first-projec-a34cf.appspot.com",
    messagingSenderId: "520665276714",
    appId: "1:520665276714:web:b7cd8348d5532ce2b9be53",
    measurementId: "G-WHH2866FNJ"
  };
  firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
console.log(room_name);
user_name=localStorage.getItem("user_name");
console.log(user_name);

// Initialize Firebase
   

function send() {
   
     msg = document.getElementById("msg").value;
     console.log(msg);
     firebase.database().ref(room_name).push({
           name: user_name,
           message:msg,
     });
     document.getElementById("msg").value = "";      
}
function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            childData = childSnapshot.val();
            firebase_message_id = childKey;
             message_data = childData;
             
            console.log("Room Name - " + room_name);
            console.log("message is - " + msg);
            Name = message_data['name'];
            message = message_data['message'];
          dis_name = "<p>"+Name+" </p>";
          
          dis_message = "<p class='message'>"+message+" </p>";
       
      
         row = dis_name+dis_message;       
         document.getElementById("output").innerHTML+= row;
      
        });
    });
}

getData();


function initializeApp() {
    //will code later
}
function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"

}