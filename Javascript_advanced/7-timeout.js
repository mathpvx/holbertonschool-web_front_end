#!/usr/bin/env node

console.log("Start of the execution queue");
setTimeout(() => {
	console.log("Final code block to be executed")
}, 0);

for (let i = 1; i <= 100; i++) {
	console.log(i);
}

console.log("End of the loop printing")
