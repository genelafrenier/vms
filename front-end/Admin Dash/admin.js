
//pfp changer (currently not functioning)
let pfp = document.getElementById("pfp");
let inputFile = document.getElementById("pfp_change");

inputFile.onchange = function(){
    pfp.src = URL.createObjectURL(inputFile.files[0]);

}


//create event popup (currently not functioning)
document.querySelector("#btn_add").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close_btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});