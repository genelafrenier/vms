// function openForm() {
//     document.getElementById("applyForm").style.display = "block";
// }

function closeForm() {
    document.getElementById("applyForm").style.display = "none";

}
// function checklogin(){
//     const userRole = getRole();
//     if (userRole === "USER") {
//        openForm();
//     }
// }
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
    const userRole = await getRole();
    let html = `<!--Apply Form-->
                    <form action="/action_page.php">
                      <div class= "row">
                        <div class="col-100">
                          <h1 style="text-align: center">Event name</h1>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-50">
                          <label for="fname">Full Name</label>
                          <input type="text" id="fname" name="firstname" value="${data.firstName}">
                          <label for="email"> Email</label>
                          <input type="text" id="email" name="email" value="${data.email}">
                          <label for="phone">Phone</label>
                          <input type="text" id="phone" name="phone" value="${data.phone}">
                        </div>

                        <div class="col-50">
                          <label for="Last">Last Name</label>
                          <input type="text" id="Last"value="${data.lastName}">
                          <label for="ID">ID</label>
                          <input type="text" id="ID"value="${data.username}">
                        </div>
                      </div>
                      <div class= "row">
                        <div class="col-100">
                          <label for="Question">Question</label>
                          <input type="text" id="Question" placeholder="question goes here">
                        </div>

                      </div>
                      <button type="button"  onclick="apply()" class="button">Submit</button>
                      <button type="button"  onclick="closeForm()" class="button" style="float: right;">Close</button>
                    </form>`;
    if (userRole === "USER") {
        document.getElementById("applyForm").style.display = "block";
        
    } else {
        window.location.href = "login.html"
    }
    document.getElementById("applyForm").innerHTML = html;
}

async function getRole() {

    let role = "";
    try {
        const response = await fetch('/role', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
                    },
        })
        if (response.ok) {
            role = await response.text();
            console.log(role);
        } else {
            throw new Error('Not an administrator');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  return role;
}   