

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

    count.addEventListener("input", function(){
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

    count2.addEventListener("input", function(){
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
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // isTrue = validateInputs();
    })

    isTrue = validateInputs();

    console.log("Is true value 222 " + isTrue)

    // Returns a boolean value if the user info is valid or not, depending if user meets validation they will be able to save their changes
    return isTrue;
}




// If a input validation fails it gives the input a red border and an error message
const setError = (element, message) => {
    console.log(message);

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// If a input validation passes it gives the input box a green border to let a user know that what they put in is good
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// After user passes all input validation, this sets the green borders back to no border color
const setDefault = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('default');
    inputControl.classList.remove('success');
}

// User's email has to match this given format
const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Phone number has to match this given format 123-456-7890 or 1234567890
const validPhoneNum = phoneNum => {
    const checkPhoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return checkPhoneNum.test(String(phoneNum).toLowerCase());
}

const validateInputs = () => {
    
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