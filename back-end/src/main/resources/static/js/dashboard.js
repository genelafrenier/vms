function loadDashboard() {
    let html = `
    <div class="navbar">
        <img src="images/Logo.png" alt = "Logo" class="logo">
        <h1>Swarm Management System</h1>
        <div class="menu">
            <img src="images/Menu.png" alt="Menu" class="menu">
            <div class="menu-content">
                <ul>
                    <li><b><a href="index.html">Events</a></b></li>
                    <li><b><a href="help.html">Help</a></b></li>
                    <li><b><a href="about-us.html">About</a></b></li>
                    <li><b><a href="contact.html">Contact</a></b></li>
    `

    if (localStorage.getItem("user") === null) {
        html += `
                    <li><b><a href="login.html">Login</a></b></li>
        `
    } else if (admin() === true) {
        html += `
                    <li><b><a href="admin.html">Dashboard</a></b></li>
                    <li><b><a href="logout.html">Logout</a></b></li>
        `
    } else {
        html += `
                    <li><b><a href="user.html">Dashboard</a></b></li>
                    <li><b><a href="logout.html">Logout</a></b></li>
        `
    }

    html += `
                </ul>
            </div>
        </div>
        `
    document.getElementById("navbar").innerHTML = html;
}


async function admin() {

    let isAdmin = false;
    fetch('/admin', {
      method: 'GET',
      credentials: 'include',
      })
  .then(response => {
    if (response.ok) {
        return response.text();
        isAdmin = true;
    } else {
        isAdmin = false;
        throw new Error('Not an administrator');
    }
  })
  .then(data =>{
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  return isAdmin;
}