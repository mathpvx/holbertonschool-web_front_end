#!/usr/bin/env node

function createClassRoom(numberOfStudents) {

	function studentSeat(seat) {
		return function() {
			return seat;
		};
	}

	const students = [];

	for (let i = 0; i < numberOfStudents; i++) {
		students.push(studentSeat(i+1));
	}

	return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[9]());
