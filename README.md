# mta-javascript-bmi-calculator
This repository is created during MTA JavaScript Bootcamp by Madblocks Academy.

# Process
Launch the web server and open index.html, and enter height and weight it will calculate the BMI

# Implementation
I've created a simple bootstrap form to enter height and weight and used a JavaScript Function to read the data from form and calculated the BMI and posted it back to HTML.

# Usage
var height=parseFloat(document.getElementById('height').value);
var weight=parseFloat(document.getElementById('weight').value);

Here, document.getElementById().value will read the data from the form and that data will be stored in JavaScript variables. <br/>
I've created a simple mathematical formula for calculating BMI

const bmi = (weight / ((height*height)/10000)).toFixed(2);


document.getElementById('bmi').innerHTML="Your BMI:" + bmi;
Here, the data gets posted back to HTML using the above syntax.

# Helpdesk
You can comment to this repository.
