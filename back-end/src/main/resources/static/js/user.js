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
            <textarea class="textarea" id="userSkills"  value="${data.skills}"placeholder="Examples: Problem solving, teamwork, communication, leadership..." id="skills" disabled></textarea>
            <p class="adjustResult" id="result"></p>

        </div>

        <br>

        <div id="textbox">

            <label for="userAboutMe">About Me:</label>
            <textarea class="textarea" id="userAboutMe"  value="${data.about}"placeholder="What would you like the organizers to know about you?" id="personal_info" disabled></textarea>
            <p id="result2"></p>

        </div>

        <button type="submit" onclick="savechanges()" class="saveChangesBtn" disabled>Save Changes</button>

    </form>`;
    document.getElementById("aboutme").innerHTML = html;
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
