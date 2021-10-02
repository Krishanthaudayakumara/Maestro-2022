var firebaseConfig = {
    apiKey: "AIzaSyA4B4GhXuRnVk8hr5ajxCM5WWsDDPsrNAI",
    authDomain: "maestro-test-a20ac.firebaseapp.com",
    projectId: "maestro-test-a20ac",
    storageBucket: "maestro-test-a20ac.appspot.com",
    messagingSenderId: "975056344681",
    appId: "1:975056344681:web:782b57faed401d107134f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

console.log("done")
//access database
const db = firestore.collection("messages");
let sendBtn = document.getElementById('sendMsg');

//sendBtn.addEventListener("click",e => {
function saveMail() {
    // e.preventDefault()
    document.getElementById("loading").style.display = "block";
    document.getElementById("msgSent").style.display = "none";
    let data = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    data.name = document.getElementById("name").value
    data.email = document.getElementById("email").value
    data.message = document.getElementById("message").value
    data.subject = document.getElementById("subject").value
    console.log(data)
    console.log(document.getElementById("name").value)

    if (document.getElementById("msgForm").checkValidity()){
        db.doc().set(data).then(()=>{
            document.getElementById("loading").style.display = "none";
            document.getElementById("msgSent").style.display = "block";

        }).catch((e)=>{
            console.log(e)
        })
    }else{
        document.getElementById("loading").style.display = "none";
    }
}
