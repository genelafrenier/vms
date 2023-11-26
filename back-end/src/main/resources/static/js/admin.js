


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
    })
    .catch((error) => {
      console.error('Error:', error);
    });

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

    
}