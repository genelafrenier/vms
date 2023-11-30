

// *** View Profile Popup *** //
function view_profile(id){
    var profile_popup = "profile_popup" + id;
    document.getElementById(profile_popup).style.display = "block";
}

function close_profile(id){
    var profile_popup = "profile_popup" + id;
    document.getElementById(profile_popup).style.display = "none";
}

function approve(requestId, studentId, eventId){
    var id = requestId;
    var approvalStatus = "Approved";

    console.log("approved");
    // *** disabling buttons and displaying approved *** //
    document.getElementById("btn_approve"+id).innerHTML = "Approved";
    document.getElementById("btn_approve"+id).disabled = true;
    document.getElementById("btn_deny"+id).innerHTML = "";
    document.getElementById("btn_deny"+id).disabled = true;

    var data = {
        id: id,
        approvalStatus: approvalStatus,
    };

    createVolunteer(studentId, eventId);
    console.log(JSON.stringify(data));
    fetch(`/request?id=${data.id}&approvalStatus=${data.approvalStatus}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
                    },
        body: JSON.stringify(data),
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function deny(requestId){
    var id = requestId;
    var approvalStatus = "Denied";

    // *** disabling buttons and displaying denied *** //
    document.getElementById("btn_approve"+id).innerHTML = "";
    document.getElementById("btn_approve"+id).disabled = true;
    document.getElementById("btn_deny"+id).innerHTML = "Denied";
    document.getElementById("btn_deny"+id).disabled = true;

    var data = {
        id: id,
        approvalStatus: approvalStatus,
    };
    console.log(JSON.stringify(data));
    fetch(`/request?id=${data.id}&approvalStatus=${data.approvalStatus}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
                    },
        body: JSON.stringify(data),
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
    function createVolunteer(studentId, eventId){
        var data = {
            studentId: studentId,
            eventId: eventId,
        };
        console.log(JSON.stringify(data));
        console.log("Creating Volunteer Record");
        fetch('http://localhost:8080/volunteer', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                        },
            body: JSON.stringify(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
    }

