// Excersize 1
let restaurants = ['Fish & Chips', 'Fried Calamari', 'Tuna Sashimi', 'Greek Salad', 'Quinoa Salad'];
console.log('Menu:');
restaurants.forEach(dish => console.log(dish));

// Excersize 2
let numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
let sum = 0;
numbers.forEach(value => sum += value);
console.log('Avarage of array values: ' + sum / numbers.length);

// Excersize 3
let myColor = ["Red", "Green", "White", "Black"];
let myColors = myColor[0];
for (let i = 1; i < myColor.length; i++) {
    myColors += ' + ' + myColor[i];
}
console.log('My colors string: ' + myColors);

// Excersize 4
let numberIn = "025468";
let numberOut = numberIn.charAt(0);
for (let i = 1; i < numberIn.length; i++) {
    if ((numberIn.charAt(i - 1) % 2 == 0) && (numberIn.charAt(i) % 2 == 0)) {
        numberOut += '-';
    }
    numberOut += numberIn.charAt(i);
}
console.log('Even numbers hiphenated: ' + numberOut);

// Optional Extension 1
let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let mostFrequent; // Holds most frequently occuring value so far
let maxOccurences = 0; // Max number of occurences
let current; // Current value
let currentOccurences = 0; // Number of occurences of current value

array.sort();
array.forEach(elem => console.log(elem));
current = array[0];
mostFrequent = current;
currentOccurences = 1;
let index = 1;
while (index < array.length) {
    if (array[index] === current) {
        // Same element value & type
        currentOccurences++;
    } else {
        // New element value found
        if (currentOccurences > maxOccurences) {
            maxOccurences = currentOccurences;
            mostFrequent = current;
        }
        current = array[index];
        currentOccurences = 1;
    }
    index++;
}

// Deal with last value
if (currentOccurences > maxOccurences) {
    maxOccurences = currentOccurences;
    mostFrequent = current;
}

console.log('Most frequently occuring array element is: ' + mostFrequent);

// Optional Extension 2
let shuffledArray = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];

shuffledArray.sort();
for (let index = 0; index < shuffledArray.length; index++) {
    if (shuffledArray[index] !== index + 1) {
        console.log('Missing number = ' + (index + 1));
        break;
    }
}