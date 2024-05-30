type instructor = {
  readonly _id: string
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

const instructor1: instructor = {
  _id: '123',
  name: 'Saikumar',
  experience: 5,
  email: 'saikumar@gmail.com',
  isActive: true,
}

const createCourse = ({ courseName }: { courseName: string }): Course => {
  return {
    courseName: courseName,
    duration: '30days',
    price: 1000,
    isActive: true,
    instructor: instructor1,
  }
}

console.log(createCourse({ courseName: 'Node js' }))

export {}
