#!/usr/bin/env node

// Create the user object
const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer"
};

// Create the logWelcomeUser function
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind logWelcomeUser to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the bound function with "Welcome"
bindLogWelcomeUser("Welcome");