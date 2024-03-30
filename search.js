const aboutMeContents = [
    { title: "Biography", content: "Here's a bit about my background..." },
    { title: "Hobbies", content: "I enjoy hiking, coding, and painting..." },
    { title: "Projects", content: "I've worked on various projects including..." },
    { title: "Goals", content: "My goals include learning more about..." },
    { title: "Work Experience", content: "I have a year experience in web developing" }
];

function searchAboutMe() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

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

// Function to display search topics in a read-only text box
function displaySearchTopicsInTextbox() {
    const searchTopics = aboutMeContents.map(item => item.title).join(", ");
    
    // Create a read-only text input and set its value to the search topics
    const readOnlyTextbox = document.createElement("input");
    readOnlyTextbox.type = "text";
    readOnlyTextbox.className = "search-topics-textbox";
    readOnlyTextbox.readOnly = true;
    readOnlyTextbox.value = "Search topics: " + searchTopics;
    
    // Append the read-only text box to the document, adjust the selector as needed
    document.querySelector(".Header").appendChild(readOnlyTextbox);
}

// Call the function to display the read-only text box
displaySearchTopicsInTextbox();

