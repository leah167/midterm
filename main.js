// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(a, b){
    let sum = 0
    for (let count = a; count <= b; count++) {
        if (count % 2 !== 0) {
            sum = sum + count
        }
        
    }
    return sum

}

/* console.logs to test */
console.log("sumOfOdds");
console.log(sumOfOdds(-10, -5));
console.log(sumOfOdds(5, 10));
console.log(sumOfOdds(-9, -5));
console.log(sumOfOdds(5, 9));

//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arrNum1, arrNum2){
   let newNumArr = []
   let difference = 0

    for (let count = 0; count < arrNum1.length; count++) {
        difference = arrNum1[count] - arrNum2[count]
        newNumArr.push(difference)
        
    }
   return newNumArr
}

/* console.logs to test */
console.log("arraySubtract");
console.log(arraySubtract([7,9], [2,6]));
console.log(arraySubtract([2,6], [7,9]));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(arr, str1, str2){
    arr.unshift(str1);
    arr.push(str2);
    return arr

}

/* console.logs to test */
console.log("surroundArray");
console.log(surroundArray(["garden", "apple"], 'olive', 'bees'));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arr){
    let longest = arr[0]

    if (arr[0] === undefined) {
        longest = ''
    }

    for (let count = 1; count < arr.length; count++) {


        if (arr[count].length > longest.length) {
            longest = arr[count]
        }
        
        
    }
    return longest
}

/* console.logs to test */
console.log("longestString");
console.log(longestString(["a", "bb", "ccc", "dddd"]));
console.log(longestString([]));
console.log(longestString(["123", "bb", "cccc", "DD214"]));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){

    let newStr = ''

    for (let count = 0; count < str.length; count++) {
        if (str[count] !== 's' && str[count] !== 'S' && str[count] !== 'r' && str[count] !== 'R') {
            newStr += str[count]
        } else if (str[count] === 's' ) {

            newStr += 'r'
            
        } else if (str[count] === 'S') {
            
            newStr += 'R'
        } else if (str[count] === 'r') {

            newStr += 's'
        } else if (str[count] === 'R') {

            newStr += 'S'
        }
       
            
        
        
    }
    return newStr

}

/* console.logs to test */
console.log("sToR");
console.log(sToR("RaspberrieS"));
console.log(sToR("Rasps"));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    let isDivisible = false
    if (num % 4 === 0 && num % 7 === 0) {
        isDivisible = true
    } 
    return isDivisible


}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log(divisibleBy4And7(28));
console.log(divisibleBy4And7(21));
console.log(divisibleBy4And7(12));
console.log(divisibleBy4And7(56));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    let hasBoth = false
    let exclamation = '!'
    let question = '?'
    if (str.includes(exclamation) && str.includes(question)) {
        hasBoth = true
        
    }
    return hasBoth
    
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log(exclamationAndQuestion('this!has?both'));
console.log(exclamationAndQuestion('this!doesnot'));
console.log(exclamationAndQuestion('this?doesnot'));
console.log(exclamationAndQuestion('thishasnone'));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
    let sumOfA = 0
    let sumOfB = 0
    let arr = []

    for (let count = 0; count < str.length; count++) {
        
        if (str[count] === 'a' || str [count] === 'A') {
            sumOfA = sumOfA + 1
            
        }
        if (str[count] === 'b' || str[count] === 'B') {
            sumOfB = sumOfB + 1
            
            
        }
        
    }
    arr.unshift(sumOfA);
    arr.push(sumOfB);
    return arr


}

/* console.logs to test */
console.log("countAB");
console.log(countAB('aAbB'));
console.log(countAB('aaaaAAAAbbbbBBBB'));
console.log(countAB('aaaabbbb'));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr, str){
    let newArr = []

    for (let count = 0; count < arr.length; count++) {
        let arrAtCount = arr[count]
        

        if (arrAtCount[arrAtCount.length-1] === 's' || arrAtCount[arrAtCount.length-1] === 'S') {
            arrAtCount = arrAtCount + str;
            newArr.push(arrAtCount);
        }else {
            newArr.push(arrAtCount);
        }
        
        
    }
   return newArr
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log(addStringIfLastS(['tests', 'testing', 'testings'], 'TEST'));
console.log(addStringIfLastS(['test', 'testings', 'testings'], 'TEST'));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr){
    let smallArr = [];
    let smallestNumber = arr[0]
    let secondSmallestNumber = arr[1]

    if (arr.length < 2) {
        
        return undefined
    }

   

    if (secondSmallestNumber < smallestNumber) {
        smallestNumber = secondSmallestNumber
        secondSmallestNumber = smallestNumber
    }


    for (let count = 0; count < arr.length; count++) {
        
        if (arr[count] < smallestNumber) {
            smallestNumber = arr[count]
        }

        
    }

    for (let count = 0; count < arr.length; count++) {
       
        
        if (arr[count] < secondSmallestNumber && arr[count] > smallestNumber) {
            secondSmallestNumber = arr[count]
        }
    }

    

   
    
    smallArr.unshift(smallestNumber)
    smallArr.push(secondSmallestNumber)

    

    return smallArr

}

// /* console.logs to test */
console.log("twoSmallest");
console.log(twoSmallest([1,2,3,4,5,6]));
console.log(twoSmallest([6,5,3,4,2,1]));
console.log(twoSmallest([-6,5,3,4,2,-1]));
console.log(twoSmallest([1,2,3,4,5,6,7,8,9,0]));
console.log(twoSmallest([1,2,3,-4,5,6,7,8,-9,0]));
console.log(twoSmallest([1,2]));
console.log(twoSmallest([1]));


//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

