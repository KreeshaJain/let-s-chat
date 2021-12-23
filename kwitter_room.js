
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDuMv9DhuKQVCrjchupSLlKM3MMrtR_XIo",
      authDomain: "ykwitter.firebaseapp.com",
      projectId: "ykwitter",
      storageBucket: "ykwitter.appspot.com",
      messagingSenderId: "143052696216",
      appId: "1:143052696216:web:0ccd8586e5f59323233eed"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
