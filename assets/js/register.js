// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4B4GhXuRnVk8hr5ajxCM5WWsDDPsrNAI",
    authDomain: "maestro-test-a20ac.firebaseapp.com",
    projectId: "maestro-test-a20ac",
    storageBucket: "maestro-test-a20ac.appspot.com",
    messagingSenderId: "975056344681",
    appId: "1:975056344681:web:782b57faed401d107134f8"
};

var data = {}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//access database
const db = firestore.collection("teamRegister")

//setup submit button
let subButton = document.getElementById('submit')

subButton.addEventListener("click", ev => {
    ev.preventDefault()

    document.getElementById("loading").style.display = 'block';
    document.getElementById("error-message").style.display = 'none';



    //get form data
    // let institute = document.getElementById('institute-name').value
    let team_name = document.getElementById('team-name').value
    let members = document.getElementById('members').value
    let country = document.getElementById('country').value

    let mem_1_name = document.getElementById('mem-1-name').value
    let mem_1_age = document.getElementById('mem-1-age').value
    let mem_1_email = document.getElementById('mem-1-email').value
    let mem_1_phone = document.getElementById('mem-1-mob').value
    let mem_1_inst = document.getElementById('mem-1-institute-name').value

    let mem_2_name = document.getElementById('mem-2-name').value
    let mem_2_age = document.getElementById('mem-2-age').value
    let mem_2_email = document.getElementById('mem-2-email').value
    let mem_2_phone = document.getElementById('mem-2-mob').value
    let mem_2_inst = document.getElementById('mem-2-institute-name').value

    let mem_3_name = document.getElementById('mem-3-name').value
    let mem_3_age = document.getElementById('mem-3-age').value
    let mem_3_email = document.getElementById('mem-3-email').value
    let mem_3_phone = document.getElementById('mem-3-mob').value
    let mem_3_inst = document.getElementById('mem-3-institute-name').value


    let mem_4_name = document.getElementById('mem-4-name').value;
    let mem_4_age = document.getElementById('mem-4-age').value;
    let mem_4_email = document.getElementById('mem-4-email').value;
    let mem_4_phone = document.getElementById('mem-4-mob').value;
    let mem_4_inst = document.getElementById('mem-4-institute-name').value;



    data = {
        team_name,
        members,
        country,
        mem_1_name,
        mem_1_age,
        mem_1_email,
        mem_1_phone,
        mem_1_inst,
        mem_2_name,
        mem_2_age,
        mem_2_email,
        mem_2_phone,
        mem_2_inst,
        mem_3_name,
        mem_3_age,
        mem_3_email,
        mem_3_phone,
        mem_3_inst,
        mem_4_name,
        mem_4_age,
        mem_4_email,
        mem_4_phone,
        mem_4_inst

    }

    //save data to firestore
    if (document.getElementById('registration-form').checkValidity()) {
        db.doc().set({
            team_name: team_name,
            members: members,
            country: country,
            mem_1_name: mem_1_name,
            mem_1_age: mem_1_age,
            mem_1_email: mem_1_email,
            mem_1_phone: mem_1_phone,
            mem_1_inst: mem_1_inst,
            mem_2_name: mem_2_name,
            mem_2_age: mem_2_age,
            mem_2_email: mem_2_email,
            mem_2_phone: mem_2_phone,
            mem_2_inst: mem_2_inst,
            mem_3_name: mem_3_name,
            mem_3_age: mem_3_age,
            mem_3_email: mem_3_email,
            mem_3_phone: mem_3_phone,
            mem_3_inst: mem_3_inst,
            mem_4_name: mem_4_name,
            mem_4_age: mem_4_age,
            mem_4_email: mem_4_email,
            mem_4_phone: mem_4_phone,
            mem_4_inst: mem_4_inst

        }).then(() => {
            document.getElementById("error-message").style.display = 'none';
            document.getElementById("loading").style.display = 'none';
            console.log("data saved")
            document.querySelector('.sent-message').style.display = 'block';
            document.getElementById('registration-form').reset();
            sendMailToChairs();
            sendMailtoParticipant();
            setTimeout(function () {
                window.location.href = './index.html';
            }, 5000);

        }).catch((error) => {
            console.log(error)
            document.getElementById("error-message").style.display = 'block';
            document.getElementById("error-message").innerHTML = "Sorry your form was not submitted";


        })
    } else {
        document.getElementById('registration-form').reportValidity()
        console.log("invalid data")
        document.getElementById("loading").style.display = 'none';
        // document.getElementById("error-message").style.display = 'block';
    }
})


document.getElementById('members').addEventListener('change', (e) => {
    if (document.getElementById('members').value == 4) {
        console.log("running")
        addRequired("mem-4-name")
        addRequired("mem-4-age")
        addRequired("mem-4-email")
        addRequired("mem-4-mob")
        addRequired("mem-4-institute-name")
        enableInputField("mem-4-name")
        enableInputField("mem-4-age")
        enableInputField("mem-4-email")
        enableInputField("mem-4-mob")
        enableInputField("mem-4-institute-name")
    } else {
        removeRequired("mem-4-name")
        removeRequired("mem-4-age")
        removeRequired("mem-4-email")
        removeRequired("mem-4-mob")
        removeRequired("mem-4-institute-name")
        disableInputField("mem-4-name")
        disableInputField("mem-4-age")
        disableInputField("mem-4-email")
        disableInputField("mem-4-mob")
        disableInputField("mem-4-institute-name")
    }
})


function addRequired(id) {
    document.getElementById(id).setAttribute("required", "");
}
function removeRequired(id) {
    document.getElementById(id).removeAttribute("required");
}

function disableInputField(id) {
    document.getElementById(id).disabled = true
}
function enableInputField(id) {
    document.getElementById(id).disabled = false
}


function checkValidity() {
    document.getElementById('registration-form').checkValidity()
}

function sendMailToChairs() {
    // console.log(data);

    const body = '<p>There is a new registration for Maestro\'21. Details are as follows:</p><br />' +
        `<table>
                <!--<tr><td>Institute : </td><td>` + data.institute + `</td></tr>-->
                <tr><td>No. of Members : </td><td>` + data.members + `</td></tr>
                <tr><td>Leader's Name : </td><td>` + data.mem_1_name + `</td></tr>
                <tr><td>Leader's Email : </td><td>` + data.mem_1_email + `</td></tr>
                <tr><td>Leader's Contact : </td><td>` + data.mem_1_phone + `</td></tr>
                </table>`

    fetch('https://us-central1-manusathhanda.cloudfunctions.net/sendMail', {
        'method': 'POST',
        'body': JSON.stringify({
            from: `${data.mem_1_name} <${data.mem_1_email}>`,
            // to: 'Ranul Navojith <ranulnavoijith@gmail.com>',
            to: 'maestro@rotaractmora.org',
            subject: 'New Registration',
            html: body
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(e => {
    }).catch((err) => {
        console.log(err);
    })
}

function sendMailtoParticipant() {
    const bodyParticipant = `<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width">
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&amp;display=swap" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=PT+Sans" rel="stylesheet" type="text/css">
	<link href="ttps://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&amp;display=swap" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
	<style type="text/css" id="media-query">
		@media (max-width: 700px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}

			.img-container.big img {
				width: auto !important;
			}
		}
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
		<tbody>
			<tr style="vertical-align: top;" valign="top">
				<td style="word-break: break-word; vertical-align: top;" valign="top">
					<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
					<div style="background-color:transparent;">
						<div class="block-grid " style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:680px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="680" style="background-color:transparent;width:680px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
								<div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<div class="img-container center autowidth big" align="center" style="padding-right: 0px;padding-left: 0px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/715368_698210/Untitled-2%281%29.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 680px; max-width: 100%; display: block;" width="680">
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<div class="img-container center autowidth big" align="center" style="padding-right: 0px;padding-left: 0px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><a href="https://maestro.rotaractmora.org/" target="_blank" style="outline:none" tabindex="-1"><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/715368_698210/Untitled-5%281%29.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 680px; max-width: 100%; display: block;" width="680"></a>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<div class="img-container center autowidth big" align="center" style="padding-right: 0px;padding-left: 0px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><a href="https://www.facebook.com/maestro.rotaractmora" target="_blank" style="outline:none" tabindex="-1"><img class="center autowidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/715368_698210/Untitled-4%281%29.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 680px; max-width: 100%; display: block;" width="680"></a>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
</body>
`

    fetch('https://us-central1-manusathhanda.cloudfunctions.net/sendMail', {
        'method': 'POST',
        'body': JSON.stringify({
            from: `Maestro <maestro@rotaractmora.org>`,
            // to: 'Ranul Navojith <ranulnavoijith@gmail.com>',
            to: `${data.mem_1_name} <${data.mem_1_email}>`,
            // cc: 'ranulnavoijith@gmaill.com',
            subject: 'Registration Confirmation',
            html: bodyParticipant
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then().catch((err) => {
        console.log(err);
    })
}