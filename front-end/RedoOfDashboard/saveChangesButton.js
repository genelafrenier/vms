

// Delete later, will be used to see if data is coming in correctly
function collectFname() {

    let firstName = document.getElementById("firstName").value;
    document.getElementById("fname").value = firstName;
    console.log(firstName);

}



function enableEdit() {
    document.getElementById('fname').disabled = false;
    document.getElementById('lname').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('phoneNum').disabled = false;

    // Enable the Save changes button
    document.querySelector('.saveChangesBtn').disabled = false;

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
var limit = 250;
result.textContent = 0 + "/" + limit;

function countText() {
    count.addEventListener("input", function(){
        var textLength = count.value.length;

        // Uncomment to see console on chrome to verify it works
        // console.log(textLength);

        result.textContent = textLength + "/" + limit;

        if(textLength > limit) {

            count.style.borderColor = "#ff3860";
            result.style.color = "#ff3860";

        } else {
            count.style.borderColor = "#000000";
            result.style.color = "#000000";

            let newUserSkills = document.getElementById("userSkills").value;
            document.getElementById("userSkills").value = newUserSkills;
            console.log(newUserSkills);
        }

        // console.log("Hello can you see this " + result.textContent)
    });
}


var count2 = document.getElementById("userAboutMe");
var result2 = document.getElementById("result2");
result2.textContent = 0 + "/" + limit;

function countText2() {
    count2.addEventListener("input", function(){
        var textLength2 = count2.value.length;

        // Uncomment to see console on chrome to verify it works
        // console.log(textLength);

        result2.textContent = textLength2 + "/" + limit;


        if(textLength2 > limit) {

            count2.style.borderColor = "#ff3860";
            result2.style.color = "#ff3860";

        } else {
            count2.style.borderColor = "#000000";
            result2.style.color = "#000000";

            let newUserAboutMe = document.getElementById("userAboutMe").value;
            document.getElementById("userAboutMe").value = newUserAboutMe;
            console.log(newUserAboutMe);
        }

        // console.log("Hello can you see this 2 " + result2.textContent)
    });
}



const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phoneNum');


function submitValidation() {
    
    var isTrue;

    // Makes it so that the user does not make changes by hitting enter key, so they have to click save changes button
    form.addEventListener('submit', e => {
        e.preventDefault();

        
        // isTrue = validateInputs();

        // console.log("Is true value " + isTrue)
        
    })

    isTrue = validateInputs();

    console.log("Is true value 222 " + isTrue)

    // Returns a boolean value if the user info is valid or not, depending if user meets validation they will be able to save their changes
    // return !document.querySelector('.error');
    return isTrue;
}


function saveChanges() {

    countText();

    countText2();


    if(submitValidation()) {

        console.log("hello");

        // Disable the text boxes after saving changes
        document.getElementById('fname').disabled = true;
        document.getElementById('lname').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('phoneNum').disabled = true;

        // Disable the Save changes button
        document.querySelector('.saveChangesBtn').disabled = true;

    } else {

        console.log("world");

        document.getElementById('fname').disabled = false;
        document.getElementById('lname').disabled = false;
        document.getElementById('email').disabled = false;
        document.getElementById('phoneNum').disabled = false;

        // Enable the Save changes button
        document.querySelector('.saveChangesBtn').disabled = false;
    }

}



const setError = (element, message) => {

    console.log(message);

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validPhoneNum = phoneNum => {
    const checkPhoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return checkPhoneNum.test(String(phoneNum).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneNumValue = phoneNum.value.trim();

    var flip1 = false;
    var flip2 = false;
    var flip3 = false;
    var flip4 = false;


    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
        flip1 = true;
        
        let newFname = document.getElementById("fname").value;
        document.getElementById("fname").value = newFname;
        console.log(newFname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
        flip2 = true;
        
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
        
        let newEmail = document.getElementById("email").value;
        document.getElementById("email").value = newEmail;
        console.log(newEmail);
    }

    if(flip1 == false || flip2 == false || flip3 == false || flip4 == false) {
        return false;
    }
    else {
        return true;
    }

} 