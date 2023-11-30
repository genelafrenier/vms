//needs scripting to put title of event into .event_container .event_name


// *** Pending volunteers popup *** //
function open_pending(id){
    popup_id = "pending_popup" + id;
    document.getElementById(popup_id).style.display = "block";
}

function close_pending(id){
    popup_id = "pending_popup" + id;
    document.getElementById(popup_id).style.display = "none";
}

// *** Comments/questions popup *** //
function open_comments(){
    document.getElementById("comments_popup").style.display = "block";
}

function close_comments(){
    document.getElementById("comments_popup").style.display = "none";
}

// *** Rate volunteers popup *** //
function open_rate(){
    document.getElementById("rate_popup").style.display = "block";
}

function close_rate(){
    document.getElementById("rate_popup").style.display = "none";
}


// *** Edit event popup *** // needs script to populate current event info into form values and textarea innerHTML
function open_edit(id){
    popup_id = "edit_popup" + id;
    document.getElementById(popup_id).style.display = "block";
}

function close_edit(id){
    popup_id = "edit_popup" + id;
    document.getElementById(popup_id).style.display = "none";
}

function edit_validation_testing(id){

    //title input error checking
    if(document.getElementById(`"edit_event_title${id}"`)==""){
        document.getElementById(`"edit_title_error${id}"`).innerHTML="Please Enter a Title for your Event";
        return false;
    }


    //date input error checking
    else if(document.getElementById(`"edit_event_date${id}"`)==""){
        document.getElementById(`"edit_date_error${id}"`).innerHTML="Please Select a Date for your Event";
        return false;
    }


    //location input error checking
    else if(document.getElementById(`"edit_event_location${id}"`)==""){
        document.getElementById(`"edit_location_error${id}"`).innerHTML="Please Enter a Location for your Event";
        return false;
    }


    //time input error checking
    else if(document.getElementById(`"edit_event_time${id}"`)==""){
        document.getElementById(`"edit_time_error${id}"`).innerHTML="Please Select a Time for your Event";
        return false;
    }


    //description input error checking
    else if(document.getElementById(`"edit_event_description${id}"`)==""){
        document.getElementById(`"edit_description_error${id}"`).innerHTML=="Please Enter a Description for your Event";
        return false;
    }


    //call submit_form()
    else {
        //pull validated data into database
        // *** printing to console to check data is going through *** //
        console.log("Calling edit_event()");
        edit_event(id);

    }

}

//creates event and sends you back to dashboard
function edit_event(id){
    var event_title_id = "edit_event_title" + id;
    var event_date_id = "edit_event_date" + id;
    var event_location_id = "edit_event_location" + id;
    var event_time_id = "edit_event_time" + id;
    var event_description_id = "edit_event_description" + id;

    var title = document.getElementById(event_title_id).value;
    var date = document.getElementById(event_date_id).value;
    var location = document.getElementById(event_location_id).value;
    var time = document.getElementById(event_time_id).value;
    var description = document.getElementById(event_description_id).value;

    var data = {
        eventName: title,
        eventDate: date,
        eventLocation: location,
        eventTime: time,
        eventDescription: description
    };
    console.log(JSON.stringify(data));
    //make an AJAX request to the event endpoint
    fetch('/event?id='+ id, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
                    },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status === 200) {
            console.log("Event Updated");
            close_edit(id);
            window.location.href = "/admin.html";
        } else {
            console.log("Event Not Updated");
        }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
}