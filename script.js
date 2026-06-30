// Find the sum of first n numbers where n is a variable.
let number = 5;
let sum = 0;
for (let i = 0 ; i <= number ; i++){
    sum += i;
}
console.log("The sum of first ",number," numbers :",sum);

// 2. Print the table of n
let TableNumber = 2;
let tabel = 0;

for (let i = 0 ; i <=10 ; i++){
    tabel = TableNumber * i;
    console.log("The Tabel of",TableNumber,"×",i,"=",tabel);   
}

// 3. Check if it is a Prime Number
let primenumber = 4;
let isPrime = true ;
if (primenumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primenumber; i++) {
        if (primenumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primenumber + " is a Prime Number.");
} else {
    console.log(primenumber + " is not a Prime Number.");
}

// 4. Print all Factors
let FactorNumber = 24;

console.log("The of",FactorNumber,"is:");
for (let i = 1 ; i <= FactorNumber;i++){
    if (FactorNumber% i == 0){
        console.log(i);
    }
}

// 5. Sum of Digits
let sumOFnumber = 139;
let sum1 = 0;

for (let temp = sumOFnumber; temp > 0; temp = (temp - (temp % 10)) / 10) {
    let digit = temp % 10;
    sum1 += digit;
}

console.log("The sum of digits of", sumOFnumber, "is", sum1);

// 6. Check Armstrong Number
let Amstrongnumber = 153;
let temp = number;
let sum2 = 0;

for (; temp > 0; temp = (temp - (temp % 10)) / 10) {
    let digit = temp % 10;
    sum2 += digit * digit * digit;
}

if (sum2 === Amstrongnumber) {
    console.log(Amstrongnumber + " is an Armstrong Number.");
} else {
    console.log(Amstrongnumber + " is not an Armstrong Number.");
}