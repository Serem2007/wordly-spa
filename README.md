Wordly - Single Page Dictionary Application (SPA)
 Project Overview

Wordly is a Single Page Application (SPA) designed to provide users with a fast and interactive dictionary experience. Users can search for any word and instantly view its meaning, pronunciation, part of speech, examples, and synonyms — all without refreshing the page.

This project demonstrates the use of HTML, CSS, JavaScript, and API integration to build a modern, dynamic web application.

 Features
 Word Search – Search for any English word instantly
 Definitions Display – View detailed meanings of words
 Pronunciation Support – Audio playback for correct pronunciation
 Synonyms Display – Discover related words
 Single Page Experience (SPA) – No page reloads
 Error Handling – Friendly messages for invalid or missing words
 Dynamic UI Updates – Real-time content rendering with JavaScript
 Technologies Used
HTML5
CSS3
JavaScript (Vanilla JS)
Fetch API
Free Dictionary API (https://dictionaryapi.dev/
)
🔌 API Used

This project uses the Free Dictionary API to retrieve word data.

Example endpoint:

https://api.dictionaryapi.dev/api/v2/entries/en/<word>
 Project Structure
Wordly-SPA/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic
└── README.md         # Project documentation
 How to Run the Project
Clone the repository:
git clone https://github.com/your-username/wordly-spa.git
Navigate into the project folder:
cd wordly-spa
Open index.html in your browser.

That’s it — the app is ready to use!

 How It Works
User enters a word in the search bar
JavaScript sends a request to the Free Dictionary API
API returns word data in JSON format
The app extracts and displays:
Meaning
Pronunciation
Examples
Synonyms
Audio pronunciation
UI updates instantly without reloading the page
 Error Handling

The application handles:

Empty input fields
Word not found errors
Network/API failures

User-friendly messages are displayed in each case.

 Learning Objectives

This project demonstrates:

Building a Single Page Application (SPA)
Working with REST APIs using Fetch
DOM manipulation using JavaScript
Dynamic UI updates
Error handling in frontend applications
 Author

Serem
Computer Science Student – Moringa School 
