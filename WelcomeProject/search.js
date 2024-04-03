const aboutMeContents = 
[
    {
        "title": "Education",
        "content": "I graduated with a Bachelor’s degree in Information Technology."
    },   
    {
        title: "Hobbies",
        content: "My hobbies include playing video games, coding, and reading various genres of literature."
    },
    {
        title: "Goals",
        content: "I aim to continually expand my knowledge and skills, particularly in technology and personal development."
    },
    {
        title: "My Ideal Girl",
        content: "I value someone who cares deeply and shares a mutual sense of support and understanding."
    },
    {
        title: "Interest About Me",
        content: "I'm adaptable and enjoy engaging in a wide range of activities, always up for new experiences."
    },
    // {
    //     title: "Facebook Link",
    //     content: "Looks like I'm keeping my Facebook profile private for now. Maybe another time!"
    // },
    // {
    //     title: "Instagram Link",
    //     content: "Same goes for Instagram – keeping it a mystery for the moment. Stay tuned!"
    // },
    { 
        title: "Tech Stack", 
        content: "I'm a web developer with experience in both frontend and backend technologies. For the frontend, I specialize in HTML, CSS, and JavaScript, including frameworks like ExtJS. On the backend, I work with .NET, SQL, and use tools like Liquibase for database version control. Additionally, I'm skilled in other programming languages and technologies including Python and Java."
    },
    // {
    //     "title": "Games Played",
    //     "content": [
    //       "CSGO (Counter-Strike: Global Offensive)",
    //       "VALORANT",
    //       "ML (Mobile Legends)",
    //       "LOL (League of Legends)",
    //       "DOTA2 (Defense of the Ancients 2)",
    //       "And more, always exploring new and challenging games!"
    //     ]
    //   }      
]
function searchAboutMe() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Check if query is not empty after trimming whitespace
    if (query === '') {
        resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
        new bootstrap.Modal(document.getElementById('searchResultsModal')).show();
        return; 
    }

    const filteredContents = aboutMeContents.filter(item =>
        item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
    );

    if (filteredContents.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const resultsHTML = filteredContents.map(item =>
            `<div>
                <h3>${item.title}</h3>
                <p>${item.content}</p>
             </div>`
        ).join('');

        resultsContainer.innerHTML = resultsHTML;
    }
    
    // Trigger the modal to show up
    new bootstrap.Modal(document.getElementById('searchResultsModal')).show();
}
// Assuming aboutMeContents is defined as shown in your example

// Function to display search topics in a read-only text area
function displaySearchTopicsInTextbox() {
    const searchTopics = aboutMeContents.map(item => item.title).join(", ");
    
    // Create a read-only textarea and set its value to the search topics
    const readOnlyTextarea = document.createElement("textarea");
    readOnlyTextarea.className = "search-topics-textbox";
    readOnlyTextarea.readOnly = true;
    readOnlyTextarea.value = "Search topics: " + searchTopics;
    
    // Adjust rows based on content size or preference
    readOnlyTextarea.rows = "4"; // Adjust this number based on your needs
    
    // Append the read-only text area to the document, adjust the selector as needed
    document.querySelector(".Header").appendChild(readOnlyTextarea);
}

// Ensure you call this function when your page loads or after you've defined `aboutMeContents`
displaySearchTopicsInTextbox();

