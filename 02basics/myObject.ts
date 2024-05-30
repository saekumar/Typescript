type instructor = {
  name: string
  experience: number
  email: string
  isActive: boolean
}
type Course = {
  courseName: string
  duration: string
  price: number
  isActive: boolean
  instructor: instructor
}

const createCourse = ({
  courseName,
  instructorName,
}: {
  courseName: string
  instructorName: string
}): Course => {
  return {
    courseName: courseName,
    duration: '30days',
    price: 1000,
    isActive: true,
    instructor: {
      name: instructorName,
      experience: 5,
      email: `${instructorName}@gmail.com`,
      isActive: true,
    },
  }
}

console.log(createCourse({ courseName: 'Node js', instructorName: 'Saikumar' }))

export {}
