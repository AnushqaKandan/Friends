document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();


const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;

const Friends = {
    firstName: firstName,
    lastName: lastName
}

console.log(Friends);

});