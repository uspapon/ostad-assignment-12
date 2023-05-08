

// Define the BMI calculation function
// function calculateBMI() {
//     // Get the values from the input fields
//     const weight = parseFloat(weightInput.value);
//     const height = parseFloat(heightInput.value) / 100; // Convert cm to m

//     // Calculate the BMI
//     const bmi = weight / (height * height);

//     // Display the result
//     resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
// }

document.getElementById('calculateBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // read the inputs
    const weightInput = document.getElementById('weightInput').value;
    const heightInput = document.getElementById('heightInput').value;
    const resultDiv = document.getElementById('result');

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    //  calculate the BMI index 
    const bmi = weight / (height * height);

    // display the result 
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}.`;

    console.log(weightInput, heightInput, bmi)



})
