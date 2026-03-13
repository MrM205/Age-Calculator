let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {

    let birthDate = new Date(userInput.value);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    alert("Your age is " + age + " years.");
}