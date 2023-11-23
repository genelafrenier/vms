fetch("Navbar.html")
    .then(a => a.text())
    .then(data => document.getElementById("Navbar").innerHTML = data);