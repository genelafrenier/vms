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
function open_edit(){
    document.getElementById("edit_popup").style.display = "block";
}

function close_edit(){
    document.getElementById("edit_popup").style.display = "none";
}

function edit_validation_testing(){

    //title input error checking
    if(document.edit_event.edit_event_title.value==""){
        document.getElementById("edit_title_error").innerHTML="Please Enter a Title for your Event";
        return false;
    }


    //date input error checking
    else if(document.edit_event.edit_event_date.value==""){
        document.getElementById("edit_date_error").innerHTML="Please Select a Date for your Event";
        return false;
    }


    //location input error checking
    else if(document.edit_event.edit_event_location.value==""){
        document.getElementById("edit_location_error").innerHTML="Please Enter a Location for your Event";
        return false;
    }


    //time input error checking
    else if(document.edit_event.edit_event_time.value==""){
        document.getElementById("edit_time_error").innerHTML="Please Select a Time for your Event";
        return false;
    }


    //description input error checking
    else if(document.edit_event.edit_event_description.value==""){
        document.getElementById("edit_description_error").innerHTML=="Please Enter a Description for your Event";
        return false;
    }


    //call submit_form()
    else {
        //pull validated data into database
        // *** printing to console to check data is going through *** //
        document.getElementById("edit_event_title");
        console.log(edit_event_title.value);

        document.getElementById("edit_event_date");
        console.log(edit_event_date.value);

        document.getElementById("edit_event_location");
        console.log(edit_event_location.value);

        document.getElementById("edit_event_time");
        console.log(edit_event_time.value);

        document.getElementById("edit_event_description");
        console.log(edit_event_description.value);

        edit_event();
    }

}

//creates event and sends you back to dashboard
function edit_event(){
    var title = document.getElementById("edit_event_title").value;
    var date = document.getElementById("edit_event_date").value;
    var location = document.getElementById("edit_event_location").value;
    var time = document.getElementById("edit_event_time").value;
    var description = document.getElementById("edit_event_description").value;

    var data = {
        event_title: title,
        event_date: date,
        event_location: location,
        event_time: time,
        event_description: description
    };
    console.log(JSON.stringify(data));
    //make an AJAX request to the event endpoint

    
}