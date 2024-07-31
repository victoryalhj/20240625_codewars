//Highest and Lowest
function highAndLow(numbers){
  const nums = numbers.split(' ').map(Number);
 
   const hightestNum = Math.max(...nums);
   const lowestNum = Math.min(...nums);
 
   return `${hightestNum} ${lowestNum}`;
 }
 
 console.log(highAndLow("1 2 3 4 5"))
 


//Disemvowel
function disemvowel(str) {
  const vowels = ['a','i','e','o','u','A','I','E','O','U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }

  }
  return result;
}

console.log(disemvowel("This website is for losers LOL!"))



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


//1."안녕 내 이름은 제시카야" 라는 문장을 프린트하는 함수 'greet'를 만드시오
function great () {
  console.log("안녕 내 이름은 제시카야")
}

 great()

//2.이름을 매개변수로 전달받아 다양한 이름을 프린트 할수 있게 함수를 수정하시오 예) "안녕 내 이름은 에밀리야", 
function greet (name) {
  console.log("안녕 내 이름은 "+name+"야")
}

//3.매개변수로 전달받은 이름을 반환하게 함수를 수정하시오 ★
function greet (name) {
  console.log("안녕 내 이름은 "+name+"야")
    return name
}

const name = greet("제니")
console.log("안녕 내 이름은 "+name+"야")

//ES6
//1.다음의 코드를 es6 문법을 이용하여 재작성하시오