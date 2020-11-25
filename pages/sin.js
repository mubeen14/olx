
function signin(){
    
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    
    let obj = {
        
        email,
        password,
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    window.location.href = "file:///C:/Users/karakorum/Desktop/mubeen/olx%20mubeen/main.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    console.log(obj)
    }
    

