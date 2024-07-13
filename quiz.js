/*
Your Task:
Create a JavaScript function named checkAnswer for a quiz application that checks if the user’s selected answer is correct and displays appropriate feedback. You will also add an event listener to the “Submit Answer” button to invoke this function when clicked.

Detailed Instructions:
1.Start with the Function Declaration:
Define a function named checkAnswer. This function will be called when the user submits their answer.

1. Identify the Correct Answer:
    - Inside the checkAnswer function, declare a variable named correctAnswer and assign it the string value "4". This represents the correct answer to your quiz question.

2. Retrieve the User’s Answer:
    - Use document.querySelector to select the checked radio button by its name attribute name="quiz". Since radio inputs are used for the answers, this will effectively capture the user’s selection.
    - Access the value property of the selected radio button to get the user’s answer. Store this value in a variable named userAnswer.

3. Compare the User’s Answer with the Correct Answer:
    - Implement an if statement to compare userAnswer with correctAnswer.
        -If the values match, indicating the user’s answer is correct, change the textContent of the element with the ID feedback to "Correct! Well done.".
        - If the values do not match, indicating the user’s answer is incorrect, update the textContent of the feedback element to "That's incorrect. Try again!".

4. Add an Event Listener to the Submit Button:

    - Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
    - Add a click event listener to this button, passing in the checkAnswer function as the callback to be executed when the button is clicked. Ensure you are not calling the checkAnswer function directly in the event listener (i.e., do not add () after the function name in the addEventListener call).
*/



function checkAnswer() {
    // Identify the Correct Answer
    let correctAnswer = "4";

    // Retrieve the User’s Answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }

}


// Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer)