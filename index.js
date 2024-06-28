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

//4.주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
//소수 2,3,5,7....(1은 소수가 아님)
//변수 n을 11로 초기화,이 변수는 소수인지 판단하기위한 숫자

let n = 11
let isPrime = true

if(n === 1) {
    isPrime = false
} else {
    for(let i=2; i<n; i++) {
        if(n%i == 0){
            isPrime = false
        }
    }
    
}

console.log(isPrime)
