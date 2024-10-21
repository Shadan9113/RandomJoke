let joke = document.querySelector(".jokeContainer");
let bttn = document.querySelector(".btn");

const url = 'https://official-joke-api.appspot.com/random_joke';
let getJoke = () => {
    fetch(url)
        .then(response => {
            if (!response.ok) { // Check if response is okay
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse JSON data
        })
        .then(item => {
            // Access setup and punchline from the API response
            joke.textContent = `${item.setup} - ${item.punchline}`;
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            joke.textContent = 'Failed to fetch a joke. Please try again later.'; // Display an error message
        });
}

bttn.addEventListener("click", getJoke);
getJoke(); // Fetch a joke when the page loads
