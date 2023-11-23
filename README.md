# vms

To Setup Spring Server:

1. Clone Repository vms (install git if you haven't already)
2. Install MySQL Server, install should have MySQL Workbench and CLI
    https://dev.mysql.com/downloads/mysql/
    Version 8.0.35 should work
    a. Setup a new user
    b. From CLI, login and type: CREATE DATABASE vms;
        Alternatively, create new schema titled VMS from MySQL Workbench
    c. Use SHOW DATABASES to verify it's created, or check in MySQL Workbench
3. If using VSCode, download extensions: 
    Spring Boot Dashboard, Spring Boot Tools, and Maven for Java
4. Configure Application.Properties
    a. Ensure that credentials in these fields match the login info for MySQL Server
        spring.datasource.username=root
        spring.datasource.password=password
5. Run project from Spring Boot Dashboard extension, or SmsApplication.java
6. Server will run on http://localhost:8080
7. Test everything is working by downloading Postman
    a. Send POST request to http://localhost:8080/event in JSON
        Example:
        {
            "organizerId": 0,
            "eventName": "Blazing Bonfire",
            "eventDescription": "A bonfire to remember",
            "eventDate": "2023-12-14",
            "eventTime": "1:32 AM",
            "eventLocation": "Riverside Hall, 1013"
        }
    b. "Event saved" message should display in server log (make sure terminal is open in VSCode)
    c. Query the MySQL database using something like SELECT * FROM EVENT;
        This should display the row you sent with the POST request

Testing:

1. Run Server from Springboot Dashboard
2. Navigate to http://localhost:8080 in your browser
    a. Event created using Postman should display on events page
3. Use the navbar to navigate to login page
4. Click the Create Account button
5. Create an account 
6. Login with Account
7. Navbar should now display "Dashboard" and "Logout" instead of "Login"
8. If testing admin side, update user to admin role using the following SQL statement in MySQL workbench:
    UPDATE USER
    SET role = "ADMIN"
    WHERE username = "234234234";


