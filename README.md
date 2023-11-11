# vms

To Setup Spring Server:

1. Clone Repository vms (install git if you haven't already)
2. Install MySQL Server, install should have MySQL Workbench and CLI
    https://dev.mysql.com/downloads/mysql/
    Version 8.0.35 should work
    a. Setup a new user
    b. From CLI, login and type: CREATE DATABASE vms;
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
            "eventDate": "12/14/2023",
            "eventTime": "1:32 AM",
            "eventLocation": "Riverside Hall, 1013"
        }
    b. Query the MySQL database using something like SELECT * FROM EVENT;
        This should display the row you sent with the POST request

Testing with front-end application:

Example index.html has been uploading showing the Events page, and link to an Events Detail page

1. Download Live Server extension in VSCode
2. Right click on HTML page and click "Open with Live Server"
3. Page will launch in your default browser
4. If the events you loaded in with Postman are not showing, press CTRL+SHIFT+J to examine console log in browser