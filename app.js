// CHAPTER# 21-25 STRING METHODS

// CHAPTER : 21-25 TASK:1
// var firstname= prompt("Enter the first name");
// var lastName= prompt("Enter the last name");
// var fullName=firstName+" "+lastName;
// alert("Welcome to this webiste "+fullName);

// CHAPTER : 21-25 TASK:2
// var phone=prompt("What's your favorite mobile phone model");
// alert("Your Favorite Mobile is "+phone);
// alert("Length of string is "+phone.length);

// CHAPTER : 21-25 TASK:3
// var country="Pakistan"
// alert(country.indexOf("n"));

// CHAPTER : 21-25 TASK:4
// var word="Hello World";
// document.write("Last index of 'l' : "+word.lastIndexOf("l"));

// // CHAPTER : 21-25 TASK:5
// var x="Pakistani";
// var xchar=x.charAt(3)
// document.write("String : "+x+" <br> ");
// document.write("Character at index 3 : "+xchar);

// // CHAPTER : 21-25 TASK:6
//  var firstname= prompt("Enter the first name");
// var lastName= prompt("Enter the last name");
// var name=firstname.concat(" ",lastName);
// alert("Welcome to this webiste "+name);

// CHAPTER : 21-25 TASK:7

// var city="Hyderabad aa";
// a=city.replace("Hyder","Islam");
// document.write("City: "+city+"<br>");
// document.write("After replacement: "+a);

// CHAPTER : 21-25 TASK:8
// var sentence="Ali and Sami are best fiends. They play cricket and football together.";
// b=sentence.replace("and","&");
// document.write("Without replacement , sentence is"+sentence+"<br>");
// document.write("After replacement , sentence is "+b);

// CHAPTER : 21-25 TASK:9
// var str="472";
// var num=parseInt(str);
// document.write("Value: "+str+"<br>");
// document.write("Type : String"+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type : number"+"<br>");

// CHAPTER : 21-25 TASK:10
// var word=prompt("Enter a word");
// document.write("User input: "+word +"<br>");
// document.write("Upper Case: "+word.toUpperCase());

// CHAPTER : 21-25 TASK:11
// var word=prompt("Enter a word");
// document.write("User input: "+word +"<br>");
// document.write("A"+word.toLocaleUpperCase());

// CHAPTER : 21-25 TASK:12
// var num="35.36";
// var num2=num.replace(".","");
// document.write("Number : "+num+"<br>");
// document.write("Result : "+num2);

// CHAPTER : 21-25 TASK:13
// var name=prompt("Enter a name");

// CHAPTER : 21-25 TASK:14
// var A=["cake","apple pie","cookie","chips","patties"];
// var bakery=prompt("Welcome to AAAAF Bakers.... Which thing you wanna order?");

// if(A.indexOf(bakery) !== -1){
//     alert("Yes this item is available");
// } else{
//     alert("No this item is not available");
// }

// // CHAPTER : 21-25 TASK:15
// var university="University Of Karachi";
// a=university.Split(new [] { '\r', '\n' })
// alert(a);

// // CHAPTER : 21-25 TASK:16
// var a="Pakistan";
// b=a.replace("Pakista");
// alert(b);


// CHAPTER : 26-30 TASK:1
// var num=prompt("Enter a number please");
// var R_num=Math.round(num);
// var C_num=Math.ceil(num);
// var F_num=Math.floor(num);
// document.write("Number: "+num+"<br>");
// document.write("Round Off Value: "+R_num+"<br>");
// document.write("Floor Value: "+C_num+"<br>");
// document.write("Ceil Value: "+F_num+"<br>");

// CHAPTER : 26-30 TASK:2
// var num=prompt("Enter a negative floating number please");
// var R_num=Math.round(num);
// var C_num=Math.ceil(num);
// var F_num=Math.floor(num);
// document.write("Number: "+num+"<br>");
// document.write("Round Off Value: "+R_num+"<br>");
// document.write("Floor Value: "+C_num+"<br>");
// document.write("Ceil Value: "+F_num+"<br>");

// CHAPTER : 26-30 TASK:3
// var num=prompt("Enter a number");
// var newnum=Math.abs(num);
// alert(newnum);

// CHAPTER : 26-30 TASK:4
// var number=Math.random();
// var number2=(number*6);
// var num3=Math.floor(number2);
// var dice2=Math.random();
// var dice2_num1=(dice2*6)+1;
// var dice2_num2=Math.floor(dice2_num1);
// document.write("Random Dice Value: ",num3);
// document.write("Random Dice Value"+dice2_num2);


// CHAPTER : 26-30 TASK:5
// var dice1=Math.random();
// var dice1_num1=(dice1*6);
// var dice1_num2=Math.floor(dice1_num1);
// document.write(dice1_num2+"<br> Random Dice Value: ");
// if (dice1_num2==2||dice1_num2==4||dice1_num2==6)
// {
//     document.write("Heads..."+"<br>");
// }
// else{
//     document.write("Tails...."+"<br>")
// }
// var dice2=Math.random();
// var dice2_num1=(dice2*6);
// var dice2_num2=Math.floor(dice2_num1);

// document.write(dice2_num2+"<br>Random Dice Value");
// if (dice2_num2==2||dice2_num2==4||dice2_num2==6)
// {
//     document.write("Yes");
// }
// else{
//     document.write("Tails....")
// }


// CHAPTER : 26-30 TASK:6
// var num=Math.random();
// var num=(num*100);
// var num=Math.floor(num);
// document.write("The random number between 1 and 100 is : "+num);

// CHAPTER : 26-30 TASK:8
// var secret_num=4;
// var num=prompt("Guess a number between 1 and 10");
// if(num==secret_num){
//     alert("Congragulations..... Your number is correct");
// }
// else{
//     alert("Oops.... Please try again");
// }

// CHAPTER : 31-34 Task:1
// var date=new Date();
// alert(date);

// CHAPTER : 31-34 Task:2
// var date=new Date();
// var month=date.toString();
// var c=month.slice(4,7);
// alert("Current Month"+c);

// CHAPTER : 31-34 Task:3
// var date=new Date();
// var date=date.toString();
// var day=date.slice(0,3);
// alert("Today is "+day);

// OR
// var day_names=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date=new Date();
// var day=date.getDay();
// var nameoftoday=day_names[day];
// alert(nameoftoday);


// CHAPTER : 31-34 Task:4
// var date=new Date();
// var date=date.toString();
// var day=date.slice(0,3);
// if(day=="Sun"||day=="Sat")
// {
// alert("Its a fun day.....");
// }

// CHAPTER : 31-34 Task:5

// var date=new Date();
// var date=date.getDate();
// if(date<15)
// {
// alert("First fifteen days of month");
// }
// else{
//     alert("Last fifteen days of month");
// }

// CHAPTER : 31-34 Task:6
var date=new Date();
var time=date.getTime();
alert(time);