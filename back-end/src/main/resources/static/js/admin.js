
//pfp changer (currently not functioning)
let pfp = document.getElementById("pfp");
let inputFile = document.getElementById("pfp_change");

inputFile.onchange = function(){
    pfp.src = URL.createObjectURL(inputFile.files[0]);

}


//create event popup
function open_popup(){
    document.getElementById("popup").style.display = "block";
}

function close_popup(){
    document.getElementById("popup").style.display = "none";
}

function ValidationTesting(){

    //title input error checking
    if(document.create_event.event_title.value==""){
        document.getElementById("title_error").innerHTML="Please Enter a Title for your Event";
        return false;
    }


    //date input error checking
    if(document.create_event.event_date.value==""){
        document.getElementById("date_error").innerHTML="Please Select a Date for your Event";
        return false;
    }


    //
}