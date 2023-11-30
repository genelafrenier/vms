async function getUser() {
    fetch('/current', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
              },
      })
      .then(response => response.json())
      .then(data => {
        checklogin(data);
      })
      .catch(error => {
        console.error('not logged in', error);
        // Redirect to login page 
        window.location.href = "login.html";
      });
  }
  async function checklogin(data) {
    console.log(JSON.stringify(data));
    const userRole = await getRole();
    let html = `<form id="form">
                    <div class="row">
                        <div class="column">
                                <div class="profile_content">
                                    <div class = "profile_top">
                                        
                                        <div class="name_dep_container">
                                            <div class="name_container">
                                                <div class="input_control">

                                                    <input type="text" class="input" id="fname" name="fname" value="${data.firstName}" placeholder="Organizer" disabled>
                                                    <div class="error"></div>

                                                </div>
                                                <div class="input_control">

                                                    <input type="text" class="input" id="lname" name="lname" value="${data.lastName}" placeholder="Name" disabled>
                                                    <div class="error"></div>

                                                </div>
                                            </div>

                                            <div class="dep_container">

                                                <input type="text" class="input" id="dep" name="dep" value="${data.dept}" placeholder="Your Department/Group" disabled>

                                            </div>
                                            

                                        </div>
                                        
                                        
                                    </div>
                                    
                                    <div class="profile_body">
                                        <div class="contact_head">Contact Info</div>
                                        <div class="email_head">Email:</div>
                                        <div class="input_control">

                                            <input type="text" class="input" id="email" name="email" value="${data.email}" placeholder="organizer@csus.edu" disabled>
                                            <hr>
                                            <div class="error"></div>

                                        </div>
                                        
                                    
                                        <div class="phone_head">Phone #:</div>
                                        
                                        <div>
                                            <div class="input_control">

                                                <input type="tel" class="input" id="phone" name="phone" value="${data.phone}" placeholder="123-456-7890" disabled>
                                                <hr>
                                                <div class="error"></div>

                                            </div>
                                        
                                        </div>
                                        <div>
                                        <div class="other_head">About:</div>
                                    
                                    <input type="text" class="input" id="other" name="other" value="${data.about}" placeholder="(optional)" disabled>
                                    <hr>
                                    </div>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                    <div class="btns_container">
                        <button type="button" class="edit_btn" onclick="enable_edit()">Edit</button>
                        <button type="submit" onclick="save_changes()" class="save_changes_btn" disabled>Save Changes</button>
                    </div>
                    
                </form>
                `;
                    
    document.getElementById("profileData").innerHTML = html;
}
function pushChanges(){
    
    var first = document.getElementById('fname').value;
    var last = document.getElementById('lname').value;
    var newemail = document.getElementById('email').value;
    var newphone = document.getElementById('phone').value;
    var newabout = document.getElementById('other').value;
    var newdept = document.getElementById('dep').value;
    fetch('/current-user', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
        .then(response => response.json())
        .then(data => {
    console.log(JSON.stringify(data));
    organizer_id = data;
        
    var data = {
        username: organizer_id,
        firstName: first,
        dept: newdept,
        lastName: last,
        email: newemail,
        phone: newphone,
        about: newabout
    };
    console.log(JSON.stringify(data));
    fetch('http://localhost:8080/update?username='+ organizer_id, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
                    },
        body: JSON.stringify(data)
    })

    })//.then
    .catch((error) => {
      console.error('Error:', error);
    });
    //window.location.href = "admin.html";
}
// *** editing profile info *** //
function enable_edit(){
    //enable text boxes
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("dep").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("other").disabled = false;

    //enable the save changes button

    document.querySelector(".save_changes_btn").disabled = false;

}

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function submit_validation(){

    var is_true;

    //makes it so the user does not make changes by hitting the enter key
    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    })

    is_true = validate_inputs();
    console.log("Is true value 222" + is_true);

    //returns boolean value for weather the user info meets requirements
    return is_true;
}

//save changes runs when save changes btn is pressed
function save_changes(){

    const form = document.getElementById("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    
    if(submit_validation()) {

        //disable the text boxes after saving changes
        document.getElementById("fname").disabled = true;
        document.getElementById("lname").disabled = true;
        document.getElementById("dep").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("phone").disabled = true;
        document.getElementById("other").disabled = true;

        //disable the save changes button
        document.querySelector(".save_changes_btn").disabled = true;

        set_default(fname);
        set_default(lname);
        set_default(email);
        set_default(phone);
        pushChanges();//push edits into database

    } else {

        //ccontinues to enable the text boxes until the user passes input validation
        document.getElementById("fname").disabled = false;
        document.getElementById("lname").disabled = false;
        document.getElementById("dep").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("phone").disabled = false;
        document.getElementById("other").disabled = false;

        //enable the save changes button

        document.querySelector(".save_changes_btn").disabled = false;

    }

}

//if input validation fails it gives the input a red border and an error message
function set_error(element, message) {

    const input_control = element.parentElement;
    const error_display = input_control.querySelector(".error");

    error_display.innerText = message;
    input_control.classList.add("error");
    input_control.classList.remove("success");
}

//if input validation passes it gives the input box a green border
function set_success(element) {
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');

    error_display.innerText = '';
    input_control.classList.add('success');
    input_control.classList.remove('error');
}

//after user passes all input validation, this sets the green borders back to no border
function set_default(element) {
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');

    error_display.innerText = '';
    input_control.classList.add('default');
    input_control.classList.remove('success');
}

//user's email has to matcch this given format
function valid_email(email) {
    const check_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check_email.test(String(email).toLowerCase());
}

//phone number has to match this given format 123-456-7890 or 1234567890
function valid_phone(phone) {
    const check_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return check_phone.test(String(phone).toLowerCase());
}

function validate_inputs() {

    const form = document.getElementById("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    //gets user data and gets rid of the white space if any
    const fname_value = fname.value.trim();
    const lname_value = lname.value.trim();
    const email_value = email.value.trim();
    const phone_value = phone.value.trim();

    //boolean variables that check to see if the user passes input validation
    var flip1 = false;
    var flip2 = false;
    var flip3 = false;
    var flip4 = false;

    if (fname_value == "") {
        set_error(fname, "Required");
    } else {
        set_success(fname);
        flip1 = true;

        //saves the user's first name when it passes validation
        let new_fname = document.getElementById("fname").value;
        document.getElementById("fname").value = new_fname;
        console.log(new_fname);
    }

    if (lname_value == "") {
        set_error(lname, "Required");
    } else {
        set_success(lname);
        flip2 = true;

        //saves input
        let new_lname = document.getElementById("lname").value;
        document.getElementById("lname").value = new_lname;
        console.log(new_lname);
    }

    if (phone_value == "") {
        set_error(phone, "Required");
    } else if (!valid_phone(phone_value)) {
        set_error(phone, "Valid phone number required");
    } else {
        set_success(phone);
        flip3 = true;

        //save input
        let new_phone = document.getElementById("phone").value;
        document.getElementById("phone").value = new_phone;
        console.log(new_phone);
    }

    if (email_value == "") {
        set_error(email, "Required");
    } else if (!valid_email(email_value)) {
        set_error(email, "Valid email required");
    } else {
        set_success(email);
        flip4 = true;

        //saves input
        let new_email = document.getElementById("email").value;
        document.getElementById("email").value = new_email;
        console.log(new_email);
    }

    //saves optional fields
    let new_dep = document.getElementById("dep").value;
    document.getElementById("dep").value = new_dep;
    console.log(new_dep);

    let new_other = document.getElementById("other").value;
    document.getElementById("other").value = new_other;
    console.log(new_other);

    //check to see if user passes all validation, if not it will not let save changes
    if (flip1 == false || flip2 == false || flip3 == false || flip4 == false) {
        return false;
    }
    else {
        return true;
    }

}

// *** create event popup *** //
function open_popup(){
    document.getElementById("popup").style.display = "block";
}

function close_popup(){
    document.getElementById("popup").style.display = "none";
}

function validation_testing(){

    //title input error checking
    if(document.create_event.event_title.value==""){
        document.getElementById("title_error").innerHTML="Please Enter a Title for your Event";
        return false;
    }


    //date input error checking
    else if(document.create_event.event_date.value==""){
        document.getElementById("date_error").innerHTML="Please Select a Date for your Event";
        return false;
    }


    //location input error checking
    else if(document.create_event.event_location.value==""){
        document.getElementById("location_error").innerHTML="Please Enter a Location for your Event";
        return false;
    }


    //time input error checking
    else if(document.create_event.event_time.value==""){
        document.getElementById("time_error").innerHTML="Please Select a Time for your Event";
        return false;
    }


    //description input error checking
    else if(document.create_event.event_description.value==""){
        document.getElementById("description_error").innerHTML=="Please Enter a Description for your Event";
        return false;
    }


    //call submit_form()
    else {
        //pull validated data into database
        // *** printing to console to check data is going through *** //
        document.getElementById("event_title");
        console.log(event_title.value);

        document.getElementById("event_date");
        console.log(event_date.value);

        document.getElementById("event_location");
        console.log(event_location.value);

        document.getElementById("event_time");
        console.log(event_time.value);

        document.getElementById("event_description");
        console.log(event_description.value);

        create_event();
    }

}

//creates event and sends you back to dashboard
function create_event(){
    var title = document.getElementById("event_title").value;
    var date = document.getElementById("event_date").value;
    var location = document.getElementById("event_location").value;
    var time = document.getElementById("event_time").value;
    var description = document.getElementById("event_description").value;
    
    fetch('http://localhost:8080/current-user', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      organizer_id = data;
        
    var data = {
        organizerId: organizer_id,
        eventName: title,
        eventDescription: description,
        eventDate: date,
        eventTime: time,
        eventLocation: location,
    };
    console.log(JSON.stringify(data));
    //make an AJAX request to the event endpoint

    //send fetch request to post data
    fetch('http://localhost:8080/event', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
                    },
        body: JSON.stringify(data)
    })
    window.location.href = 'admin.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
}

async function get_events(){
    fetch('http://localhost:8080/current-user', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      organizer_id = data;
      url = 'http://localhost:8080/events-by-organizer?organizer_id=' + organizer_id;
      fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        populate_events(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
        
    })
}


function populate_events(data){

    let eventData = "";
    let pendingFrame = "";
    
    for (let r of data) {
        let pending=r.id;
        console.log(pending);
            get_pending(pending);
    
            eventData +=
        `    <div class="event_container">
        <div class="event_name">${r.id}  ${r.eventName}</div> 
        <div class="btn_volunteers">
            <button id="btn_volunteers" onclick="open_pending(${pending})">
                <img src="images/Event_Volunteers.png">
            </button>
        </div>
        <div class="btn_comments">
            <button id="btn_comments" onclick="open_comments()">
                <img src="images/Event_Comments.png">
            </button>
        </div>
        <div class="btn_ratings">
            <button id="btn_ratings" onclick="open_rate()">
                <img src="images/Event_Rate.png">
            </button>
        </div>
        <div class="btn_edit">
            <button id="btn_edit" onclick="open_edit()">
                <img src="images/Event_Edit.png">
            </button>
        </div>
        </div>`;

        pendingFrame += `<div class="pending_popup" id="pending_popup${r.id}">
        <div class="header_container">
            <div class="spacer"></div>
            <!--                         placeholder    vvv    -->
            <div class="header">Pending volunteers for Event</div>
            <button type="button" class="close_btn" onclick="close_pending(${pending})">&times;</button>
            <div class="header_bottom"></div>
        </div>
        <div class="volunteers_container">
            <div class="volunteers_head_container">
                <div class="spacer"></div>
                <div class="row">
                    <div class="column">
                        <div class="name_head">Name</div>
                    </div>
                    <div class="column">
                        <div class="avg_rate_head">Average Rating</div>
                    </div>
                    <div class="column">
                        <div class="profile_head">Profile</div>
                    </div>
                    <div class="column">
                        <div class="operation_head">Operation</div>
                    </div>
                </div>
            </div>
            <div class="volunteers_element_container" id="pending_element_container${r.id}">
            </div>
        </div>
    </div>`;
    }
  // populate html for events_populate
  document.getElementById("events_populate").innerHTML = eventData;
  document.getElementById("events_container").innerHTML += pendingFrame;
}

async function get_pending(id) {
    url = '/requests-by-event?eventId=' + id;
    fetch(url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
        
    .then(response => response.json())
    .then(data =>{
        console.log(data);
      populate_pending(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    getUser();
}

//populate a pending row for EACH volunteer for each event
function populate_pending(data){
    let pendingData = "";


    for (let r of data) {
          pendingData += 
        `
        <div class="pending_container" id="${r.eventId}" >
        <!--            placeholder  vvv -->
        <div class="volunteer_name">${r.eventId} ${r.firstName} ${r.lastName}</div>
        <div class="avg_rating"> /5</div>
        <div class="view_profile">
            <button id="btn_profile" onclick="view_profile()">View Profile</button>
        </div>
        <div class="approve_deny">
            <button id="btn_approve${r.id}" onclick="approve(${r.id},${r.studentId}, ${r.eventId})">Approve</button>
            <button id="btn_deny${r.id}" onclick="deny(${r.id})">Deny</button>
        </div>
    </div>
    <!-- view profile popup -->
    <div class="profile_popup" id="profile_popup">
        <div class="row">
            <div class="column">
                <div class="profile_container">
                    <div class="header">Profile</div>
                    <div class="volunteer_name">Volunteer Name</div>
                    <div class="volunteer_avg_rating"></div>
                </div>
                <div class="column">
                    <div class="skills_container">
                        <div class="header">Skills</div>
                        <!-- placeholder           vvvvvvvvvvv -->
                        <div class="profile_skills">+ chasier
                            + supply management
                            + tech savvy</div>
                        
                    </div>  
                </div>
            </div>
            <div class="row">
                <div class="event_history_container">
                    <div class="header">Event History</div>
                    <button type="button" class="close_btn" onclick="close_profile()">&times;</button>
                    <div class="previous_events_container">
                        <!-- where list of previous events go -->
                    </div>
                </div>
            </div>
        </div>
    </div></div></div></div>`;
    let container_id = "pending_element_container" + r.eventId;
    document.getElementById(container_id).innerHTML += pendingData;
    }
  // populate html in pending_element_container

}