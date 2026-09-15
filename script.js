let words = [];

// Call / load words.json
fetch("words.json")
    .then(response => response.json())
    .then(data => {

        words = data;

        console.log("Words loaded:", words);

    })
    .catch(error => {
        console.error("Error loading words:", error);
    });