var count2 = document.getElementById("userAboutMe");
var result2 = document.getElementById("result2");
var limit2 = 250;
result2.textContent = 0 + "/" + limit2;

count2.addEventListener("input", function(){
    var textLength2 = count2.value.length;

    // Uncomment to see console on chrome to verify it works
    // console.log(textLength);

    result2.textContent = textLength2 + "/" + limit2;
});