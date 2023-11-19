var count = document.getElementById("userSkills");
var result = document.getElementById("result");
var limit = 250;
result.textContent = 0 + "/" + limit;

count.addEventListener("input", function(){
    var textLength = count.value.length;

    // Uncomment to see console on chrome to verify it works
    // console.log(textLength);

    result.textContent = textLength + "/" + limit;
});
