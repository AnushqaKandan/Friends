document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();


const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;

const Friends = {
    firstName: firstName,
    lastName: lastName
}

console.log(Friends);
console.table(Friends);

});

// Joel's Solution
// let friends = []
// let addFriends = document.querySelector('[addFriends]') 
// addFriends.addEventListener('click', () => {
//     friends.push({
//         firstName: document.querySelector('[firstName]').value,
//         lastName: document.querySelector('[lastName]').value
        
//     })
//     console.log(friends);
// })