// Write a program that prints the numbers from 1 to 100. 

const numbers = new Array(100);
        for (var i = 0; i < 100; i++) { /* for loop automates getting an array and stops at 100 */
            numbers[i] = i + 1 /* i + 1 makes the numbers in the array start at one rather than 0.*/
        let currentNumber = numbers[i]


       // For numbers which are multiples of both five and seven print "ChickenMonkey".
if 
    (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        currentNumber = "ChickenMonkey"
        console.log(currentNumber)

        // But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number
} else if 
    (currentNumber % 5 === 0) {
        currentNumber = "Chicken"
        console.log(currentNumber) 

        // and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
} else if
    (currentNumber % 7 === 0) {
    currentNumber = "Monkey"
        console.log(currentNumber) 
}
console.log(currentNumber)
}