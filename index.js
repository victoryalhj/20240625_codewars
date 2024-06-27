//MakeUpperCase
function MakeUpperCase(str) {
  return str.toUpperCase();
}

MakeUpperCase('Hello')

//For loop (Add all numbers 1~100)
let sum = 0

for (let i=1; i<=100; i++) {
  sum = sum+i
 }
console.log(sum)


//Odd number 1~100
for(let i=1; i<=100; i+=2) {
  console.log(i)
 }


 //3.1부터 50까지 369결과를 프린트하자 ★
for(let i=1; i<=50; i++) {
  let stringValue = i.toString()
  let result = ""
  for (let j=0; j<stringValue.length; j++){
    if (stringValue[j] == "3" || stringValue[j] == "6" || stringValue[j] == "9") {
      result = result + "짝"
    }
  }
  console.log(result.length>0? result:i)
}