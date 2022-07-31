let example;

//number to string

example = 4545;

//way to string

example = String(4545);

example = String(5 + 5);
example = String(55555);

example = new Date();
example = String(new Date());

//output
console.log(example);
console.log(typeof example);
console.log(example.length);

//number to string
myAge = 29;
myAge = (29).toString();
console.log(typeof myAge);
console.log(myAge);

//number to string
myPhone = "555";
myName = Number("555");
console.log(myPhone);
console.log(typeof myPhone);

//boolean to string
result = true;
result = Number(true);
console.log(result);

result = false;
result = Number(false);
console.log(result);

//PartsInt

allMoney = 451842.1542845;
allMoney = parseInt(451842.1542845);
console.log(allMoney);

allcent = 1425.254856;
console.log(parseFloat(1425.254856));
console.log(typeof allcent);
console.log(allcent.toFixed());
console.log(allcent.toFixed(2));  //use for see after point value.

myMoney = (45185.1254.toFixed(2));
console.log(myMoney); 

val1 = "4";
val2 = 4;
result = val1 + val2;
console.log(result);

//example of parseFloat
example = ("452.15485");
console.log(parseFloat(example));

//example of parseInt
example = (451.12548);
console.log(parseInt(example));

//example of toFixed
example5 = (451.458595);
console.log(example5.toFixed(2));