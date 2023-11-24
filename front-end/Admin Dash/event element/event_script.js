//needs scripting to put title of event into .event_container .event_name


// *** Pending volunteers popup *** //
function open_pending(){
    document.getElementById("pending_popup").style.display = "block";
}

function close_pending(){
    document.getElementById("pending_popup").style.display = "none";
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
function open_popup(){
    document.getElementById("edit_popup").style.display = "block";
}

function close_popup(){
    document.getElementById("edit_popup").style.display = "none";
}

function validation_testing(){

    //title input error checking
    if(document.create_event.event_title.value==""){
        document.getElementById("title_error").innerHTML="Please Enter a Title for your Event";
        return false;
    }


    //date input error checking
    else if(document.create_event.event_date.value==""){
        document.getElementById("date_error").innerHTML="Please Select a Date for your Event";
        return false;
    }


    //location input error checking
    else if(document.create_event.event_location.value==""){
        document.getElementById("location_error").innerHTML="Please Enter a Location for your Event";
        return false;
    }


    //time input error checking
    else if(document.create_event.event_time.value==""){
        document.getElementById("time_error").innerHTML="Please Select a Time for your Event";
        return false;
    }


    //description input error checking
    else if(document.create_event.event_description.value==""){
        document.getElementById("description_error").innerHTML=="Please Enter a Description for your Event";
        return false;
    }


    //call submit_form()
    else {
        //pull validated data into database
        // *** printing to console to check data is going through *** //
        document.getElementById("event_title");
        console.log(event_title.value);

        document.getElementById("event_date");
        console.log(event_date.value);

        document.getElementById("event_location");
        console.log(event_location.value);

        document.getElementById("event_time");
        console.log(event_time.value);

        document.getElementById("event_description");
        console.log(event_description.value);

        edit_event();
    }

}

//creates event and sends you back to dashboard
function edit_event(){
    var title = document.getElementById("event_title").value;
    var date = document.getElementById("event_date").value;
    var location = document.getElementById("event_location").value;
    var time = document.getElementById("event_time").value;
    var description = document.getElementById("event_description").value;

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