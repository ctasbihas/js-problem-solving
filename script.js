// Task 1: Create a function that takes a string as input and returns the reversed version of the string without using the the built-in reverse() method.
const reverseString = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}
console.log(reverseString("Reverse the string."));


// Task 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const sumOfPositiveNumbers = arr => {
    let sum = 0;
    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const findMostFrequentElement = arr => {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}
console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));


// Task 4: Create a function that takes a sorted array of numbers and a target value as input.The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers.
const findTwoNumbersWithTarget = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}
console.log(findTwoNumbersWithTarget([1, 3, 6, 8, 11, 15], 9));


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
console.log(calculator(5, "+", 3));


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = length => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}
console.log(generateRandomPassword(12));


// Task 7: Implement a function that converts a Roman numeral to an integer.The function should take a Roman numeral string(e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInteger = romanNumeral => {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentDigit = romanMap[romanNumeral[i]];
        const nextDigit = romanMap[romanNumeral[i + 1]];

        if (currentDigit < nextDigit) {
            result += nextDigit - currentDigit;
            i++; // Skip the next digit as it has already been considered
        } else {
            result += currentDigit;
        }
    }

    return result;
}
console.log(romanToInteger("XXI"));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.
const findSecondSmallestElement = arr => {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}
console.log(findSecondSmallestElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));