
  
  (function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyBlNR7pqAWAi9Kzrzimo-wDqYqZrLsrRJM",
      authDomain: "project1-54f66.firebaseapp.com",
      projectId: "project1-54f66",
      storageBucket: "project1-54f66.appspot.com",
      messagingSenderId: "329152339563",
      appId: "1:329152339563:web:c8bbda7865c91651285b2e",
      measurementId: "G-S3XJTDCZKQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    // get elements
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    const logout = document.getElementById("logout");
    const loggedInStatus = document.getElementById("loggedInStatus");
    const googlelogin = document.getElementById("googlelogin");
  
    // login
    login.addEventListener("click", (e) => {
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(
        email.value,
        password.value
      );
      promise.catch((e) => console.log(e.message));
    });
  
    // signup
    signup.addEventListener("click", (e) => {
      // TODO: check for real email
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      promise.catch((e) => console.log(e.message));
    });
  
    //Google Login
    googlelogin.addEventListener("click", (e) => {
      console.log("google clicked");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          loggedInStatus.innerText = `You are logged in using the following email:${result.user.email`;
          login.style.display = "none";
          signup.style.display = "none";
          email.style.display = "none";
          password.style.display = "none";
          googlelogin.style.display = "none";
          logout.style.display = "none";
        })
        .catch(function (error) {
          console.log(error.code);
          console.log(error.message);
        });
    });
  
    // logout
    logout.addEventListener("click", (e) => {
      firebase.auth().signOut();
    });
  
    // login state
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        loggedInStatus.innerText = `You are logged in using the following email: ${email}`;
        logout.style.display = "inline";
        login.style.display = "none";
        signup.style.display = "none";
        email.style.display = "none";
        password.style.display = "none";
        googlelogin.style.display = "none";
      } else {
        console.log("User is not logged in");
        loggedInStatus.innerText = "You are not yet logged in";
        login.style.display = "inline";
        signup.style.display = "inline";
        email.style.display = "inline";
        googlelogin.style.display = "inline";
        password.style.display = "inline";
        logout.style.display = "none";
      }
    });
  })();
  