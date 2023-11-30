function submit_rating() {
    // input validation
    if(document.getElementById("rate_volunteer").value==""){
        return false;
    }
    else if(document.getElementById("rate_volunteer").value>5){
        return false;
    }
    else if(document.getElementById("rate_volunteer").value<0){
        return false;
    }
    console.log(document.getElementById("rate_volunteer").value);
    document.getElementById("btn_submit_rating").innerHTML = "Submitted";
    document.getElementById("btn_submit_rating").disabled = true;
    document.getElementById("rate_volunteer").disabled = true;
}