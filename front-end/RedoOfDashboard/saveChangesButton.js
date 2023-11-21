

// Delete later, will be used to see if data is coming in correctly
function collectFname() {

    let firstName = document.getElementById("firstName").value;
    document.getElementById("fname").value = firstName;
    console.log(firstName);

}


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



// Makes it so that the user does not make changes by hitting enter key, so they have to click save changes button
form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log("hello");

    validateInputs();
})

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


    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
        
        let newFname = document.getElementById("fname").value;
        document.getElementById("fname").value = newFname;
        console.log(newFname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
        
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
        
        let newEmail = document.getElementById("email").value;
        document.getElementById("email").value = newEmail;
        console.log(newEmail);
    }

}


function saveChanges() {

    countText();

    countText2();
}