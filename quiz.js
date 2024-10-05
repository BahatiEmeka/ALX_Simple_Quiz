// Define the function to check the answer
function checkAnswer() {
    // The correct answer is "4"
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback paragraph element
    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";  // Optional: color feedback
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";  // Optional: color feedback
        }
    } else {
        // If no answer is selected, prompt the user to choose one
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";  // Optional: color feedback
    }
}

// Add an event listener to the submit button to invoke checkAnswer on click
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
