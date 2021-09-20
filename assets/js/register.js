// Your web app's Firebase configuration
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

//access database
const db = firestore.collection("teamRegister")

//setup submit button
let subButton = document.getElementById('submit')

subButton.addEventListener("click",ev =>{
    ev.preventDefault()

    document.getElementById("loading").style.display = 'block';
    document.getElementById("error-message").style.display = 'none';



    //get form data
    let institute = document.getElementById('institute-name').value
    let team_name = document.getElementById('team-name').value
    let members = document.getElementById('members').value

    let mem_1_name = document.getElementById('mem-1-name').value
    let mem_1_age = document.getElementById('mem-1-age').value
    let mem_1_email = document.getElementById('mem-1-email').value
    let mem_1_phone = document.getElementById('mem-1-mob').value

    let mem_2_name = document.getElementById('mem-2-name').value
    let mem_2_age = document.getElementById('mem-2-age').value
    let mem_2_email = document.getElementById('mem-2-email').value
    let mem_2_phone = document.getElementById('mem-2-mob').value

    let mem_3_name = document.getElementById('mem-3-name').value
    let mem_3_age = document.getElementById('mem-3-age').value
    let mem_3_email = document.getElementById('mem-3-email').value
    let mem_3_phone = document.getElementById('mem-3-mob').value

    let mem_4_name = document.getElementById('mem-4-name').value
    let mem_4_age = document.getElementById('mem-4-age').value
    let mem_4_email = document.getElementById('mem-4-email').value
    let mem_4_phone = document.getElementById('mem-4-mob').value

    //save data to firestore
    if (document.getElementById('registration-form').checkValidity()) {
        db.doc().set({
            institute: institute,
            team_name: team_name,
            members: members,
            mem_1_name: mem_1_name,
            mem_1_age: mem_1_age,
            mem_1_email: mem_1_email,
            mem_1_phone: mem_1_phone,
            mem_2_name: mem_2_name,
            mem_2_age: mem_2_age,
            mem_2_email: mem_2_email,
            mem_2_phone: mem_2_phone,
            mem_3_name: mem_3_name,
            mem_3_age: mem_3_age,
            mem_3_email: mem_3_email,
            mem_3_phone: mem_3_phone,
            mem_4_name: mem_4_name,
            mem_4_age: mem_4_age,
            mem_4_email: mem_4_email,
            mem_4_phone: mem_4_phone

        }).then(() => {
            document.getElementById("error-message").style.display = 'none';
            document.getElementById("loading").style.display = 'none';
            console.log("data saved")
            document.querySelector('.sent-message').style.display = 'block';
            document.getElementById('registration-form').reset();
            setTimeout(function(){
                window.location.href = '../../../index.html';
            }, 5000);

        }).catch((error) => {
            console.log(error)
            document.getElementById("error-message").style.display = 'block';
            document.getElementById("error-message").innerHTML = "Sorry your form was not submitted";


        })
    }else{
        document.getElementById('registration-form').reportValidity()
        console.log("invalid data")
        document.getElementById("loading").style.display = 'none';
        // document.getElementById("error-message").style.display = 'block';
    }
})


document.getElementById('members').addEventListener('change',(e)=>{
    if (document.getElementById('members').value == 4 ){
        console.log("running")
        addRequired("mem-4-name")
        addRequired("mem-4-age")
        addRequired("mem-4-email")
        addRequired("mem-4-mob")
        enableInputField("mem-4-name")
        enableInputField("mem-4-age")
        enableInputField("mem-4-email")
        enableInputField("mem-4-mob")
    }else {
        removeRequired("mem-4-name")
        removeRequired("mem-4-age")
        removeRequired("mem-4-email")
        removeRequired("mem-4-mob")
        disableInputField("mem-4-name")
        disableInputField("mem-4-age")
        disableInputField("mem-4-email")
        disableInputField("mem-4-mob")
    }
})


function addRequired(id){
    document.getElementById(id).setAttribute("required","");
}
function removeRequired(id){
    document.getElementById(id).removeAttribute("required");
}

function disableInputField(id) {
    document.getElementById(id).disabled = true
}
function enableInputField(id) {
    document.getElementById(id).disabled = false
}


function checkValidity(){
    document.getElementById('registration-form').checkValidity()
}