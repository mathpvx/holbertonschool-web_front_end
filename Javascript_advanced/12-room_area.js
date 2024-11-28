#!/usr/bin/env node

// Create the object roomDimensions
const roomDimensions = {
    width: 50,
    length: 100,
    // Define the getArea method
    getArea: function () {
        return this.width * this.length;
    }
};

// Bind the getArea function to the roomDimensions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Test the bound function
console.log(boundGetArea());