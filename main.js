// 1
let list = [0, 1, false, 2, undefined, '', 3, null];
let result = [];

for(let value of list){
	if (typeof value === "number"){
		result.push(value);
	} 
}
console.log(result);

// 2

let list1 = [true, false, true, false, true, true];
let true_result = 0;
let false_result = 0;

for (let val of list1){
	if (val == true){
		true_result += 1;
	}
	else if(val == false){
		false_result += 1;
	}
	if (false_result > true_result) {
		console.log("Больше False");
	}
	else if (false_result < true_result) {
		console.log("Больше True");
	}
}

// 3

hah = [1, 5, 2,11,17,53];
fff = [];

for (ggg of hah){
	if (ggg % 2 <= 0) {
		fff.push(ggg);
	} 
}
console.log(fff);

// 4

chislo2 = [];

chislo = [1, 3, 6];
for (chislo1 of chislo){
	chislo2.push(chislo1 * 2);
}
console.log(chislo2);

// 5

const num1 = Number(prompt("Введіть перше число"));
const operator = prompt("Введіть оператор вичислення");
const num2 = Number(prompt("Введіть друге число"));
let result1;
switch (operator) {
   case "+":
     result1 = num1 + num2;
	 console.log(result1);
     break;
   case "-":
     result1 = num1 - num2;
	 console.log(result1);
     break;
   case "/":
     result1 = num1 / num2;
	 console.log(result1);
     break;
   case "*":
     result1 = num1 * num2;
	 console.log(result1);
     break;
   default:
     console.log("Не можливо вирішити");
}