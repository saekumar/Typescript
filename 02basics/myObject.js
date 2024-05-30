'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var createCourse = function (_a) {
  var courseName = _a.courseName,
    instructorName = _a.instructorName
  return {
    courseName: courseName,
    duration: '30days',
    price: 1000,
    isActive: true,
    instructor: {
      name: instructorName,
      experience: 5,
      email: ''.concat(instructorName, '@gmail.com'),
      isActive: true,
    },
  }
}
console.log(createCourse({ courseName: 'Node js', instructorName: 'Saikumar' }))
