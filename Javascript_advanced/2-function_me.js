#!/usr/bin/env node

function welcomeMessage(fullName) {
	return function() {
	alert("Welcome " + fullName);
	};
}

guillaume = welcomeMessage("Guillaume");
alex = welcomeMessage("Alex");
fred = welcomeMessage("Fred");

guillaume();
alex();
fred();
