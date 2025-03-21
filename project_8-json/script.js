async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        
        const usersContainer = document.getElementById('users-container');
        usersContainer.innerHTML = users.map(user => `<p><strong>${user.name}</strong>: ${user.email}</p>`).join('');
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

//Step 5
// Call the function to fetch users
fetchUsers();

// JSON string containing two users
const jsonString = '[{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]';

// Parse the JSON string into a JavaScript object
const users = JSON.parse(jsonString);

// Log Alice’s name and Bob’s age to the console
console.log(`Alice's name: ${users[0].name}`);
console.log(`Bob's age: ${users[1].age}`);


//Step 6 JSON
//Create a JSON object representing a user with the following properties:

let person = {
    "name": "Charlie",
    "age": 28,
    "isActive": true
}

let jsonObject = JSON.parse('{"name": "Charlie", "age": 28,"isActive": true}');
console.log(jsonObject.name); // Outputs: Charlie

//Convert the object to a JSON string using JSON.stringify().
let jsonStringTwo = JSON.stringify(person)

//Log the JSON string to the console.
console.log(jsonStringTwo)


//Step 7
// Create a settings object
const settings = {
    theme: "dark",
    language: "en"
};

// Store the object in localStorage as a JSON string
localStorage.setItem("settings", JSON.stringify(settings));

// Retrieve and parse the stored data
const storedSettings = JSON.parse(localStorage.getItem("settings"));

// Log the theme and language to the console
console.log(`Theme: ${storedSettings.theme}`);
console.log(`Language: ${storedSettings.language}`);
