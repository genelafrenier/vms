async function loadDashboard() {
    const userRole = await getRole();
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

    if (userRole === "USER") {
        html += `
                <li><b><a href="user.html">Dashboard</a></b></li>
                <li><b><a href="logout.html">Logout</a></b></li>
        `
    } else if (userRole === "ADMIN") {
        html += `
                <li><b><a href="admin.html">Dashboard</a></b></li>
                <li><b><a href="logout.html">Logout</a></b></li>
        `
    } else {
        html += `
                <li><b><a href="login.html">Login</a></b></li>
        `
    }

    html += `
                </ul>
            </div>
        </div>
        `
    document.getElementById("navbar").innerHTML = html;
}


async function getRole() {

    let role = "";
    try {
        const response = await fetch('/role', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
                    },
        })
        if (response.ok) {
            role = await response.text();
            console.log(role);
        } else {
            throw new Error('Not an administrator');
        }
    } catch (error) {
        console.error('Error:', error);
    }

  return role;
}   