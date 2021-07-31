// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAscGIgvh8t4TBEsaxyjeLWpyYaha90HGI",
    authDomain: "maestrotest-e1684.firebaseapp.com",
    projectId: "maestrotest-e1684",
    storageBucket: "maestrotest-e1684.appspot.com",
    messagingSenderId: "1075019959077",
    appId: "1:1075019959077:web:955ed58fa689105763e8cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//access database
const db = firestore.collection("teamRegister")
const db2 = firestore.collection("messages")

//get registration forms
db.get().then((results) =>{
    results.forEach((doc) =>{
        createCard(doc.data().team_name,doc.data().institute,doc.data().members,doc.data().mem_1_name,
            doc.data().mem_1_age,doc.data().mem_1_email,doc.data().mem_1_phone,doc.data().mem_2_name,
            doc.data().mem_2_age,doc.data().mem_2_email,doc.data().mem_2_phone,doc.data().mem_3_name,
            doc.data().mem_3_age,doc.data().mem_3_email,doc.data().mem_3_phone,doc.data().mem_4_name,
            doc.data().mem_4_age,doc.data().mem_4_email,doc.data().mem_4_phone,)
    })
})

//get messages
db2.get().then((results) =>{
    results.forEach((doc) =>{
        createCard2(doc.data().subject, doc.data().email, doc.data().message, doc.data().name)
    })
})


function createCard(teamName, institute, members, mem1name, mem1age, mem1email, mem1mob,
                    mem2name, mem2age, mem2email, mem2mob,
                    mem3name, mem3age, mem3email, mem3mob,
                    mem4name, mem4age, mem4email, mem4mob,) {
 var card = document.createElement('div')
    card.innerHTML = `
<div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link title-card" type="button" onclick="showCollapse(this)" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="color: rgb(7,24,85); text-transform: uppercase; text-decoration: none; ">${teamName}</button>
                    </h5>
                </div>

                <div id="${teamName}" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample" >
                    <div class="card-body">
                        <h3>Basic info</h3>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Team name :</strong> ${teamName}</div>
                            <div class="col-sm"><strong>Institute :</strong> ${institute}</div>
                            <div class="col-sm"><strong>No. of team members :</strong> ${members}</div>
                        </div>

                        <h5>Team Captain</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem1name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem1age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem1email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem1mob}</div>
                        </div>

                        <h5>Team member 2</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem2name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem2age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem2email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem2mob}</div>
                        </div>

                        <h5>Team member 3</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem3name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem3age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem3email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem3mob}</div>
                        </div>

                        <h5>Team member 4</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem4name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem4age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem4email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem4mob}</div>
                        </div>
                    </div>
                </div>
            </div>`
    document.getElementById('accordion').append(card)

}

function createCard2(subject,email,message,name) {
 var card = document.createElement('div')
    card.innerHTML = `
<div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link title-card" type="button" onclick="showCollapse(this)" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="color: rgb(7,24,85); text-transform: uppercase; text-decoration: none; ">${subject}</button>
                    </h5>
                </div>

                <div id="${subject}" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample" >
                    <div class="card-body">
                        <h3>Basic info</h3>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${name}</div>
                            <div class="col-sm"><strong>Subject :</strong> ${subject}</div>
                            <div class="col-sm"><strong>Email :</strong> ${email}</div>
                        </div>

                        <h5>Team Captain</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Message :</strong> ${message}</div>
                         
                        </div>
                    </div>
                </div>
            </div>`
    document.getElementById('accordion-2').append(card)

}

function showCollapse(ele) {
    if (document.getElementById(ele.innerHTML).classList.contains("show")){
        document.getElementById(ele.innerHTML).classList.remove("show")
    }else {
        document.getElementById(ele.innerHTML).classList.add("show")
    }
}