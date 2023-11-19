


// Delete later, will be used to see if data is coming in correctly
function collectFname() {

    let firstName = document.getElementById("firstName").value;
    document.getElementById("fname").value = firstName;
    console.log(firstName);

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
    const checkPhone = /^(([0-9]{3}-[0-9]{3}-[0-9]{4}))$/;
    return checkPhone.test(phoneNum);
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
    } else if(!validPhoneNum) {
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
    // let newFname = document.getElementById("fname").value;
    // document.getElementById("fname").value = newFname;
    // console.log(newFname);

    // let newLname = document.getElementById("lname").value;
    // document.getElementById("lname").value = newLname;
    // console.log(newLname);

    // let newPhoneNum = document.getElementById("phoneNum").value;
    // document.getElementById("phoneNum").value = newPhoneNum;
    // console.log(newPhoneNum);

    // let newEmail = document.getElementById("email").value;
    // document.getElementById("email").value = newEmail;
    // console.log(newEmail);

    let newUserSkills = document.getElementById("userSkills").value;
    document.getElementById("userSkills").value = newUserSkills;
    console.log(newUserSkills);

    let newUserAboutMe = document.getElementById("userAboutMe").value;
    document.getElementById("userAboutMe").value = newUserAboutMe;
    console.log(newUserAboutMe);
}