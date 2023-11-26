function listview() {
    document.getElementById("grid").style.display = "none";
    document.getElementById("list").style.display = "grid";
    document.getElementById("buttonGrid").style.backgroundColor="white";
    document.getElementById("buttonGrid").style.color="black";
    document.getElementById("buttonList").style.backgroundColor="#043927";
    document.getElementById("buttonList").style.color="white";
}

function gridview() {
    document.getElementById("list").style.display = "none";
    document.getElementById("grid").style.display = "grid";
    document.getElementById("buttonList").style.backgroundColor="white";
    document.getElementById("buttonList").style.color="black";
    document.getElementById("buttonGrid").style.backgroundColor="#043927";
    document.getElementById("buttonGrid").style.color="white";

}