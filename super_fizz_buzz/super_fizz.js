for(let i = 0; i <= 1000; i++) {
  let string = ""
  if(i % 7 == 0) { string += "Super" }
  if(i % 3 == 0) { string += "Fizz" }
  if(i % 5 == 0) { string += "Buzz" }
  if(string == "") { string = i }
  console.log(string)
}
