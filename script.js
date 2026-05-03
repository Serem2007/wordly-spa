// Get elements
const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const result = document.getElementById("result");

// Event listener (form submission)
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const word = input.value.trim();

    if (word === "") {
        showError("Please enter a word.");
        return;
    }

    fetchWord(word);
});

// Fetch word from API
async function fetchWord(word) {
    result.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            throw new Error("Word not found.");
        }

        const data = await response.json();
        displayResult(data[0]);

    } catch (error) {
        showError(error.message);
    }
}

// Display result in DOM
function displayResult(data) {
    const word = data.word;
    const phonetic = data.phonetic || "N/A";

    const meaning = data.meanings[0];
    const partOfSpeech = meaning.partOfSpeech;
    const definition = meaning.definitions[0].definition;
    const example = meaning.definitions[0].example || "No example available.";

    // Synonyms (if available)
    const synonyms = meaning.synonyms.length > 0 
        ? meaning.synonyms.join(", ") 
        : "None";

    // Audio (if available)
    const audioObj = data.phonetics.find(p => p.audio);
    const audioHTML = audioObj 
        ? `<audio controls src="${audioObj.audio}"></audio>` 
        : "<p>No audio available.</p>";

    result.innerHTML = `
        <h2>${word}</h2>
        <p><strong>Pronunciation:</strong> ${phonetic}</p>
        ${audioHTML}
        <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
        <p><strong>Definition:</strong> ${definition}</p>
        <p><strong>Example:</strong> ${example}</p>
        <p><strong>Synonyms:</strong> ${synonyms}</p>
        <button onclick="saveWord('${word}')">⭐ Save</button>
    `;

    // Optional: change background dynamically
    document.body.style.backgroundColor = "#e3f2fd";
}

// Error display
function showError(message) {
    result.innerHTML = `<p style="color:red;">${message}</p>`;
}

// Save word to localStorage
function saveWord(word) {
    let savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];

    if (!savedWords.includes(word)) {
        savedWords.push(word);
        localStorage.setItem("savedWords", JSON.stringify(savedWords));
        alert("Word saved!");
    } else {
        alert("Word already saved.");
    }
}