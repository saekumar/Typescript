const students: string[] = []
const studentsMarks: number[] = []

type StudentDetails = {
  readonly _id: string
  name: string
  marks: number
  isActive: boolean
}

const allStudents: StudentDetails[] = []

allStudents.push({ _id: '1', name: 'Saikumar', marks: 100, isActive: true })

allStudents.push({ _id: '2', name: 'Sai', marks: 90, isActive: true })
const studentNames: string[] = allStudents.map(
  (student: StudentDetails): string => {
    students.push(student.name)
    studentsMarks.push(student.marks)
    return student.name
  }
)

console.log(studentNames)
console.log(studentsMarks)

export {}
