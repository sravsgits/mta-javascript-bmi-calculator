function bmidata() {
	var height=parseFloat(document.getElementById('height').value);
	var weight=parseFloat(document.getElementById('weight').value);
	const bmi = (weight / ((height*height)/10000)).toFixed(2);
	document.getElementById('bmi').innerHTML="Your BMI:" + bmi;
}