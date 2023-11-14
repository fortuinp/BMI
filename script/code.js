document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('btn');
    button.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('Weight').value); // Corrected 'Weight' ID
        const result = document.getElementById('output');
        let height_status = true, weight_status = true; // initialize to true
        // Validate height
        if (isNaN(height) || height <= 0) {
            document.getElementById('height_error').innerHTML = 'Please enter a valid height';
            height_status = false;
        } else {
            document.getElementById('height_error').innerHTML = '';
        }
        // Validate weight
        if (isNaN(weight) || weight <= 0) {
            document.getElementById('Weight_error').innerHTML = 'Please enter a valid weight'; // Corrected 'Weight_error' ID
            weight_status = false;
        } else {
            document.getElementById('Weight_error').innerHTML = ''; // Corrected 'Weight_error' ID
        }
        // Calculate BMI only if both height and weight are valid
        if (height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            if (bmi < 18.6) {
                result.innerHTML = 'Underweight: ' + bmi;
            } else if (bmi >= 18.6 && bmi < 24.9) {
                result.innerHTML = 'healthy: ' + bmi;
            } else {
                result.innerHTML = 'Overweight: ' + bmi;
            }
        }
    });
});