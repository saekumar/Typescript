"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students = [];
var studentsMarks = [];
var allStudents = [];
allStudents.push({ _id: '1', name: 'Saikumar', marks: 100, isActive: true });
allStudents.push({ _id: '2', name: 'Sai', marks: 90, isActive: true });
var studentNames = allStudents.map(function (student) {
    students.push(student.name);
    studentsMarks.push(student.marks);
    return student.name;
});
console.log(studentNames);
console.log(studentsMarks);
