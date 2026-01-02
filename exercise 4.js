//Exercise 4

//Question 16 
let character="A";
//Solution:
if (true){
   console.log("Uppercase")
}
else if(false){
   console.log("Lowercase")
}
else{
   console.log("Nither")
}
//Ans:Uppercase

//Question 17
let age=17;
let hasLicense=true;
//Solution:
let drivingAge=18;
if (age>=drivingAge&&hasLicense==true){
   console.log("You can Drive.")
}
else {
   console.log("You cannot Drive.")
}
//Ans:You can Drive.

//Question 18
let totalAmount=1000;
let isMember=true;
//Solution:
let discount1=totalAmount/20*100/1;
let discount2=totalAmount/5*100/1;
if(isMember){
   console.log(discount1)
}
else{
   console.log(discount2)
}
//Ans:5000

//Question 19
let number=15;
//Solution:
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numbers)

//Question 20
let hour=14;
//Solution:
if(hour>=5 && hour<=11){
   console.log("Good Morning.")
}
else if(hour>=12 && hour<=17){
   console.log("Good Afternoon.")
}

else if(hour>=18 && hour<=21){
   console.log("Good Evening.")
}
else if(hour>=22 && hour<=4){
   console.log("Good Night.")
}
else{
   console.log("Time is not correct.")
}
//Ans:Good Afternoon.

//Exercise 4 done.
