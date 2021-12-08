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
const db2 = firestore.collection("messages")


db.get().then((querySnapshot) => {
    const docs = [];

    querySnapshot.forEach((doc) => {
        docs.push(doc.data());
    });
    // downloadCSV('registrations.csv', docs);
});

function downloadCSV(filename, array) {
    let data = '#,"Team Name","Country",Members,"Member 01 - name","Member 01 - age","Member 01 - university","Member 01 - email","Member 01 - contact no","Member 02 - name","Member 02 - age","Member 02 - university","Member 02 - email","Member 02 - contact no","Member 03 - name","Member 03 - age","Member 03 - university","Member 03 - email","Member 03 - contact no","Member 04 - name","Member 04 - age","Member 04 - university","Member 04 - email","Member 04 - contact no"\n';

    array.forEach((e, index) => {
      data += `${index + 1},"${e.team_name}","${e.country}","${e.members}","${e.mem_1_name}","${e.mem_1_age}","${e.mem_1_inst}","${e.mem_1_email}","${e.mem_1_phone}","${e.mem_2_name}","${e.mem_2_age}","${e.mem_2_inst}","${e.mem_2_email}","${e.mem_2_phone}","${e.mem_3_name}","${e.mem_3_age}","${e.mem_3_inst}","${e.mem_3_email}","${e.mem_3_phone}","${e.mem_4_name}","${e.mem_4_age}","${e.mem_4_inst}","${e.mem_4_email}","${e.mem_4_phone}"\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }


//   var firebaseConfig = {
//     apiKey: "AIzaSyCa9XY_JD5Be9CFTB9SMy044wq7vPxgK1o",
//     authDomain: "pearl-pacify.firebaseapp.com",
//     databaseURL: "https://pearl-pacify-default-rtdb.firebaseio.com",
//     projectId: "pearl-pacify",
//     storageBucket: "pearl-pacify.appspot.com",
//     messagingSenderId: "524734528599",
//     appId: "1:524734528599:web:b9e64d3a35e94025203712"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore()

// //access database
// const db = firestore.collection("Submissions")


// db.get().then((querySnapshot) => {
//     const docs = [];

//     querySnapshot.forEach((doc) => {
//         docs.push(doc.data());
//     });
//     downloadCSV('registrations.csv', docs);
// });

// function downloadCSV(filename, array) {
//     let data = '#,"Name","NIC","age","contact_no","Email","Country","address","University","Participate_type","Members","Submission_type","title","description","video_URL"\n';

//     array.forEach((e, index) => {
//         data += `${index + 1},"${e.name}","${e.nic}","${e.age}","${e.contact_number}","${e.email}","${e.country}","${e.address}","${e.university}","${e.participate}","${e.member}","${e.submission_type}","${e.title}","${e.details}","${e.submission_url}"\n`;
//     });

//     const element = document.createElement('a');
//     element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(data));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
// }




//get registration forms
db.get().then((results) =>{
    results.forEach((doc) =>{
        createCard(doc.data().team_name,
            doc.data().members,
            doc.data().country,
            doc.data().mem_1_name,
            doc.data().mem_1_age,
            doc.data().mem_1_email,
            doc.data().mem_1_phone,
            doc.data().mem_1_inst,
            doc.data().mem_2_name,
            doc.data().mem_2_age,
            doc.data().mem_2_email,
            doc.data().mem_2_phone,
            doc.data().mem_2_inst,
            doc.data().mem_3_name,
            doc.data().mem_3_age,
            doc.data().mem_3_email,
            doc.data().mem_3_phone,
            doc.data().mem_3_inst,
            doc.data().mem_4_name,
            doc.data().mem_4_age,
            doc.data().mem_4_email,
            doc.data().mem_4_phone,
            doc.data().mem_4_inst)
    })
})

//get messages
db2.get().then((results) =>{
    results.forEach((doc) =>{
        createCard2(doc.data().subject, doc.data().email, doc.data().message, doc.data().name)
    })
})


function createCard(teamName, members, country, mem1name, mem1age, mem1email, mem1mob,mem1inst,
                    mem2name, mem2age, mem2email, mem2mob,mem2inst,
                    mem3name, mem3age, mem3email, mem3mob,mem3inst,
                    mem4name, mem4age, mem4email, mem4mob,mem4inst) {
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
                           
                            <div class="col-sm"><strong>No. of team members :</strong> ${members}</div>
                            <div class="col-sm"><strong>Country : </strong> ${country}</div>
                        </div>

                        <h5>Team Captain</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem1name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem1age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem1email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem1mob}</div>
                                                        <div class="col-sm"><strong>Institute :</strong> ${mem1inst}</div>

                        </div>

                        <h5>Team member 2</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem2name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem2age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem2email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem2mob}</div>
                                                        <div class="col-sm"><strong>Institute :</strong> ${mem2inst}</div>

                        </div>

                        <h5>Team member 3</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem3name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem3age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem3email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem3mob}</div>
                                                        <div class="col-sm"><strong>Institute :</strong> ${mem3inst}</div>

                        </div>

                        <h5>Team member 4</h5>
                        <div class="row details-row">
                            <div class="col-sm"><strong>Name :</strong> ${mem4name}</div>
                            <div class="col-sm"><strong>Age :</strong> ${mem4age}</div>
                            <div class="col-sm"><strong>Email :</strong> ${mem4email}</div>
                            <div class="col-sm"><strong>Mobile number :</strong> ${mem4mob}</div>
                                                        <div class="col-sm"><strong>Institute :</strong> ${mem4inst}</div>

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