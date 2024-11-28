#!/usr/bin/env node

// Function to create and append a paragraph to the document body
function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

// Function to fetch data from Wikipedia and call the callback
function queryWikipedia(callback) {
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const page = Object.values(pages)[0];
            callback(page.extract); // Call the callback with the extract
        } else {
            console.error("Error fetching data:", xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error("Network error occurred");
    };
    xhr.send();
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
