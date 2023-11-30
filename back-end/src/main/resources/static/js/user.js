function callFunctions(){
    getCurrent();
    getUser();
}
async function getUser() {
    fetch('/current', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
              },
      })
      .then(response => response.json())
      .then(data => {
        loadProfile(data);
      })
      .catch(error => {
        console.error('NOT SIGNED IN', error);
        window.location.href = "login.html";
      });
  }
async function loadProfile(data) {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data));
    let html = `
    <button type="button" class="editBtn" onclick="enableEdit()">Edit</button>


    <form id="form">
        <div class="container_for_info" id="info">

            <div class="inputControl">

                <label for="fname">First Name:</label>
                <input type="text" class="input" id="fname" value="${data.firstName}" name="fname" disabled>
                <div class="error"></div>

            </div>

        </div>
        <div class="container_for_info" id="info">
            <div class="inputControl">

                <label for="lname">Last Name:</label>
                <input type="text" id="lname" value="${data.lastName}" name="lname"disabled >
                <div class="error"></div>
            </div>
        </div>
        <div class="container_for_info" id="info">
            <div class="inputControl">
                <label for="phoneNum">Phone Number:</label>
                <input type="tel" id="phoneNum" name="phoneNum" value="${data.phone}"disabled>
                <div class="error"></div>

            </div>
            <div class="error"></div>
        </div>
        <div class="container_for_info" id="info">
            <div class="inputControl">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" value="${data.email}" disabled>
                <div class="error"></div>
            </div>
        </div>
        <div id="textbox">
            <label for="userSkills">Skills:</label>
            <textarea class="textarea" id="userSkills"  placeholder="Examples: Problem solving, teamwork, communication, leadership..." id="skills" value="${data.skills}"disabled></textarea>
            <p class="adjustResult" id="result"></p>

        </div>

        <br>

        <div id="textbox">

            <label for="userAboutMe">About Me:</label>
            <textarea class="textarea" id="userAboutMe"   placeholder="What would you like the organizers to know about you?" id="personal_info" value="${data.about}"disabled></textarea>
            <p id="result2"></p>

        </div>
                
        <button type="submit" onclick="saveChanges()" class="saveChangesBtn" disabled>Save Changes</button>

    </form>`;
    document.getElementById("aboutme").innerHTML = html;
}
async function saveChanges() {
    
    
    // var first = document.getElementById('fname').value;
    // var last = document.getElementById('lname').value;
    // var newemail = document.getElementById('email').value;
    // var newphone = document.getElementById('phoneNum').value;
    // var newskills = document.getElementById('userSkills').value;
    // var newabout = document.getElementById('userAboutMe').value;

    var first = document.getElementById('fname');
    var last = document.getElementById('lname');
    var newemail = document.getElementById('email');
    var newphone = document.getElementById('phoneNum');
    var newskills = document.getElementById('userSkills');
    var newabout = document.getElementById('userAboutMe');

    fetch('/current-user', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
                },
        })
        .then(response => response.json())
        .then(data => {
        
          
    // fetch('http://localhost:8080/current-user', {
    //     method: 'GET',
    //     headers: {
    //     'Content-Type': 'application/json',
    //             },
    //     })
    // .then(response => response.json())
    // .then(data =>{
      console.log(data);
      console.log(data);
      student_id = data;
        
    var data = {
        username: student_id,
        firstName: first,
        lastName: last,
        email: newemail,
        phone: newphone,
        about: newskills,
        skills: newskills,
        about: newabout
    };
    console.log(JSON.stringify(data));

    fetch('http://localhost:8080/update?username='+ student_id, {
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



    console.log("2hello");
    console.log('22can');
    console.log('222you see this');

    if(submitValidation()) {


        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const phoneNum = document.getElementById('phoneNum');


        // console.log("hello");
        // console.log('can');
        // console.log('you see this');
        

        // Disable the text boxes after saving changes
        document.getElementById('fname').disabled = true;
        document.getElementById('lname').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('phoneNum').disabled = true;
        document.getElementById('userSkills').disabled = true;
        document.getElementById('userAboutMe').disabled = true;

        // Disable the Save changes button
        document.querySelector('.saveChangesBtn').disabled = true;
        
        setDefault(fname);
        setDefault(lname);
        setDefault(email);
        setDefault(phoneNum);

    } else {

        // Continues to enable the text boxes until the user passes all input validation
        document.getElementById('fname').disabled = false;
        document.getElementById('lname').disabled = false;
        document.getElementById('email').disabled = false;
        document.getElementById('phoneNum').disabled = false;
        document.getElementById('userSkills').disabled = false;
        document.getElementById('userAboutMe').disabled = false;

        // Enable the Save changes button
        document.querySelector('.saveChangesBtn').disabled = false;
    }
}

function getCurrent() {
    fetch('http://localhost:8080/current-user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const url = `http://localhost:8080/approved-events?student_id=${data}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(eventData => {
            console.log(eventData);
            popCurrent(eventData);
        })
        .catch((error) => {
            console.error('No current events:', error);
        });
    })
    .catch((error) => {
        console.error('no user:', error);
    });
}

async function popCurrent(data){
    let html= "";

    for (let r of data) {
    html += `<div class="currentEvent">
                    <h2>Name: ${r.eventName}</h2>
                    <p1>Time: 1:00</p1> //${r.eventTime}
                    <br>
                    <p1>Date: ${r.eventDate}</p1>
                    <br>
                    <p1>Location: ${r.eventLocation}</p1>
                </div>`;
    }
    document.getElementById("currentEvent").innerHTML += html;
}


// Delete later, will be used to see if data is coming in correctly
function collectFname() {

    let firstName = document.getElementById("firstName").value;
    document.getElementById("fname").value = firstName;
    console.log(firstName);

}




function enableEdit() {
    // Enable the text boxes to be written in
    document.getElementById('fname').disabled = false;
    document.getElementById('lname').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('phoneNum').disabled = false;
    document.getElementById('userSkills').disabled = false;
    document.getElementById('userAboutMe').disabled = false;

    // Enable the Save changes button
    document.querySelector('.saveChangesBtn').disabled = false;

    // Need these function calls here to update the character count, otherwise they won't update until the user clicks save changes
    countText();
    countText2();

}

// function saveChanges() {

//     // Disable the text boxes after saving changes
//     document.getElementById('fname').disabled = false;
//     document.getElementById('lname').disabled = false;
//     document.getElementById('email').disabled = false;
//     document.getElementById('phoneNum').disabled = false;

//     // Disable the Save changes button
//     document.querySelector('.saveChangesBtn').disabled = true;
// }





var count = document.getElementById("userSkills");
var result = document.getElementById("result");
var finalTextLength;
var limit = 250;
result.textContent = 0 + "/" + limit;

function countText() {
    var flip5;

    // count.addEventListener("input", function(){
    document.addEventListener("input", function(){
        var textLength = count.value.length;
        

        // Uncomment to see console on chrome to verify it works
        // console.log(textLength);

        result.textContent = textLength + "/" + limit;

        if(textLength > limit) {

            count.style.borderColor = "#ff3860";
            result.style.color = "#ff3860";

        } else {
            count.style.borderColor = "";
            result.style.color = "";

            let newUserSkills = document.getElementById("userSkills").value;
            document.getElementById("userSkills").value = newUserSkills;
            console.log("user new skills is saved: " + newUserSkills);

        }

        finalTextLength = textLength;

    });


    if(finalTextLength > limit) {
        flip5 = false;
    }
    else {
        flip5 = true;
    }

    return flip5;
}


var count2 = document.getElementById("userAboutMe");
var result2 = document.getElementById("result2");
var finalTextLength2;
result2.textContent = 0 + "/" + limit;

function countText2() {
    var flip6;

    // count2.addEventListener("input", function(){
    document.addEventListener("input", function(){
        var textLength2 = count2.value.length;

        // Uncomment to see console on chrome to verify it works
        // console.log(textLength);

        result2.textContent = textLength2 + "/" + limit;


        if(textLength2 > limit) {

            count2.style.borderColor = "#ff3860";
            result2.style.color = "#ff3860";

        } else {
            count2.style.borderColor = "";
            result2.style.color = "";

            let newUserAboutMe = document.getElementById("userAboutMe").value;
            document.getElementById("userAboutMe").value = newUserAboutMe;
            console.log(newUserAboutMe);
        }

        finalTextLength2 = textLength2;

    });


    if(finalTextLength2 > limit) {
        flip6 = false;
    }
    else {
        flip6 = true;
    }

    return flip6;
}



const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phoneNum');


function submitValidation() {
    
    var isTrue;

    // Makes it so that the user does not make changes by hitting enter key, so they have to click save changes button
    // form.addEventListener('', e => {
    //     e.preventDefault();
        
    //     // isTrue = validateInputs();
    // })

    //makes it so the user does not make changes by hitting the enter key
    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    })

    isTrue = validateInputs();

    console.log("Is true value 222 " + isTrue)

    // Returns a boolean value if the user info is valid or not, depending if user meets validation they will be able to save their changes
    return isTrue;
}




// If a input validation fails it gives the input a red border and an error message
// const setError = (element, message) => {
function setError(element, message) {
    console.log(message);

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// If a input validation passes it gives the input box a green border to let a user know that what they put in is good
// const setSuccess = element => {
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// After user passes all input validation, this sets the green borders back to no border color
// const setDefault = element => {
function setDefault(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('default');
    inputControl.classList.remove('success');
}

// User's email has to match this given format
// const validEmail = email => {
function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Phone number has to match this given format 123-456-7890 or 1234567890
// const validPhoneNum = phoneNum => {
function validPhoneNum(phoneNum) {
    const checkPhoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return checkPhoneNum.test(String(phoneNum).toLowerCase());
}

// const validateInputs = () => {
function validateInputs() {


    const form = document.getElementById('form');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phoneNum = document.getElementById('phoneNum');

    
    // Gets user data and gets rid of the white spaces if any
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneNumValue = phoneNum.value.trim();

    // Boolean variables that check to see if the user passes input validation
    var flip1 = false;
    var flip2 = false;
    var flip3 = false;
    var flip4 = false;
    var flip5 = true;
    var flip6 = true;


    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
        flip1 = true;
        
        // Saves the user's first name when it passes input validation
        let newFname = document.getElementById("fname").value;
        document.getElementById("fname").value = newFname;
        console.log(newFname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
        flip2 = true;
        
        // Saves the user's last name when it passes input validation
        let newLname = document.getElementById("lname").value;
        document.getElementById("lname").value = newLname;
        console.log(newLname);
    }

    if(phoneNumValue === '') {
        setError(phoneNum, 'Phone number is required');
    } else if(!validPhoneNum(phoneNumValue)) {
        setError(phoneNum, 'Provide a valid phone number');
    } else {
        setSuccess(phoneNum);
        flip3 = true;

        // Saves the user's phone number when it passes input validation
        let newPhoneNum = document.getElementById("phoneNum").value;
        document.getElementById("phoneNum").value = newPhoneNum;
        console.log(newPhoneNum);
    }  

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if(!validEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        flip4 = true;
        
        // Saves the user's email when it passes input validation
        let newEmail = document.getElementById("email").value;
        document.getElementById("email").value = newEmail;
        console.log(newEmail);
    }



    flip5 = countText();

    flip6 = countText2();



    // Checks to see if user passes all of the user validation if not it will not let them save their changes
    if(flip1 == false || flip2 == false || flip3 == false || flip4 == false || flip5 == false || flip6 == false) {
        return false;
    }
    else {
        return true;
    }

} 