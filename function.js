/*
# Simple function Related Practice Tasks

### Task-1  
Take four parameters. Multiply the four numbers and then return the result
*/
function getMultification(num1, num2, num3, num4) {
    let result = num1 * num2 * num3 * num4;
    return result;
}
let Multification = getMultification(2, 3, 4, 5);
console.log('Multiply four numbers  ',Multification);

/*
### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/
function checkOddEven(number){
    if (number % 2 ===1){
        let result = number*2 
        return result;
    }
    return  number/2;
}
let checkNumber = checkOddEven(25);
console.log(checkNumber);

/*### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        // console.log(number);
         sum = sum + number;
    }
    return  sum/numbers.length;
}
let myInput = [2,3,4,5,1];
let average = make_avg(myInput);
console.log('Average of numbers is',average);


/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
function count_zero(str){
    let zeroNum=0;
    for(let iteam of str){
        // console.log(iteam);
        if (iteam == 0){
            // console.log(iteam);
            zeroNum++
        }
       
    // console.log('not zero');
    }
    return zeroNum;
}
let binaryString ='1001001';
let zero = count_zero(binaryString);
console.log('Counting zero is',zero);

/*
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
*/
