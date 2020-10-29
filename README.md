# Burger-Logger
Goal: To make an webapp for users to input the names of the burgers they want to eat<br>
This project has the following abilities:
- Able to display all entries of the database with appropriate states
    - Display the names of the burgers as individual rows
    - Display differently accoording to their states,  i.e. eaten or not
- Able to send a POST request to the database when the user pressed enter in input box or pressed the "Add" button
- Able to send a PUT request to the database when the user has "eaten" a burger of their choice
- Able to send a DELETE request to the database when the "Clean the evidence" button is pressed
- Able to retieve all entries from the database by sending a GET request to the database when the page is loaded/reloaded

<br>

This project was made using **HTML5**, **CSS**, **Bootstrap**, **JavaScript**, **jQuery**, **Node.js**, **Express.js**, **Handlebars** and **MySQL**<br>
This project is currently hosted on heroku with the use of JAWSDB: https://salty-everglades-75204.herokuapp.com/ <br>

<br>

## The WebApp
<img src="./img/readme/index.jpg" alt="Webapp showcase" style="margin-left: auto; margin-right: auto" />

### New Entry
- Either press "Enter" or the "Add" button to add more burgers to the database
<img src="./img/readme/addedBurger.jpg" alt="Added burger showcase" style="margin-left: auto; margin-right: auto" />

### Ate a Burger
<img src="./img/readme/ateBurger.jpg" alt="Ate burger showcase" style="margin-left: auto; margin-right: auto" />

### To clear the list...
- There is a "Clean the evidence" button at the top right, which will *DELETE* all entries in the database