// Get the input element with the ID "input"
const numberInput = document.querySelector("#input");

// Get the <span> element inside an element with the class "result"
const result = document.querySelector(".result span");

// Function to check the number and return the result
const checkNumber = (number) => {
    let resultValue = number;
    if (number > 50) {
        // Multiply the number by 2 if it is greater than 50
        resultValue = number * 2;
    }
    return resultValue;
};

// Event listener for the "input" event on the number input element
numberInput.addEventListener("input", () => {
    // Get the input value, parse it as an integer, and pass it to the checkNumber function
    const checkedNumber = checkNumber(parseInt(numberInput.value));

    // Update the text content of the result element with the checked number
    result.textContent = checkedNumber;
});
