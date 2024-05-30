function addTwo(num: number): number {
  return num + 2
}

const getUpper = (str: string): string => {
  return str.toUpperCase()
}
const sum = (a: string, b: number): number => {
  let num: number = parseInt(a)
  return num + b
}

const signUpUser = (name: string, email: string, password: string): string => {
  let str: string = `Welcome ${name}, your email is ${email} and password is ${password}`
  return `${str}`
}

const arr = ['thor', 'captain', 'ironman', 'hulk']
const checAvenger = arr.map((avenger: string): string => {
  return `I am ${avenger.toUpperCase()}`
})
console.log(checAvenger)
console.log(signUpUser('John', 'john@gmail.com', '12345'))
console.log(sum('2', 3)) // 5
console.log(addTwo(2)) // 4
console.log(getUpper('hello')) // HELLO

export {}
