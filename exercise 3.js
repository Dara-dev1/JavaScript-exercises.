//Exercise 3

//Question 11
let marks=85;
//Solution:

//Question 12
let length=5;
let width=10;
//Solution:
let area=length*width;
let perimeter=2*(length+width);

console.log(area)
console.log(perimeter)
//Ans: 50 and 30

//Question 13
let year=2024;
//Soluttion:
 if ((year%4===0&&year%100!==0)||(year%400===0)){
   console.log(year+" "+"is a leap year.")
 }
 else{
   console.log(year+" "+"is not a leap year.")
 }
//Ans:2024 is a leap year.

//Question 14
let number=47;
//Solution:
console.log(number+" "+"divisible by both 3 AND 5 is"+" "+47/3 && 5)
console.log(number+" "+"divided by 3 is"+" "+number/3)
console.log(number+" "+"divided by 5 is"+" "+number/5)
console.log(number+" "+"divided by neither is"+" "+number/!3&&!5)
//Ans:5,
//47 divided by 3 is 15.666666666666666.
//47 divided by 5 is 9.4.
//false.

//Question 15
let subject1=78;
let subject2=85;
let subject3=92;
//Solution:
let average=subject1+subject2+subject3;
if(average/3>=90){
   console.log("Excellent.")
}
if(average/3>=75){
   console.log("Good.")
}
if(average/3>=60){
   console.log("Average.")
}
else{
  console.log("Needs Improvement.")
}
//Ans:Good or Average.

//Exercise 3 done.
