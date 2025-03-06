// Nida Akkiswala
// ITMD 441-02 Undergraduate Student

// Exercise #1
console.log("\nExercise #1 - minMaxAverage")
function minMaxAverage(num) {
    let totalNum = num.length
    let minValue = Math.min(...num);
    let maxValue = Math.max(...num);
    let avg = num.reduce((sum, num) => sum + num, 0) / totalNum;
    console.log(`Total Numbers: ${totalNum}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${avg.toFixed(2)}`);

}

// Test Cases
minMaxAverage([2, 5, 23, 6, 9, 4, 3, 1]);
minMaxAverage([10, 15, 53, 60, 49, 14, 33, 10]);
minMaxAverage([20, 50, 45, 16, 92, 44, 33, 11]);


// Exercise #2
console.log("\nExercise #2 - countVowels")
function countVowels(wrd) {
    let vwl = "aeiouAEIOU";
    let cnt = [...wrd].filter(letter => vwl.includes(letter)).length;

    console.log(`${wrd}: ${cnt} vowels`);
}

// Test cases
countVowels("Winter");
countVowels("Recreation");
countVowels("VisualStudio");


// Exercise #3
console.log("\nExercise #3 - sortNumbers")
function sortNumbers(num) {
    let sortedArr = [...num].sort((a, b) => a - b);
    console.log(`Original Array: [${num}] = Sorted Array: [${sortedArr}]`);
}

// Test Cases
sortNumbers([3, 4, 1, 8, 5]);
sortNumbers([15, 3, 21, 11, 4]);
sortNumbers([65, 23, 59, 10, 5, 25, 99, 66]);

// Exercise #4
console.log("\nExercise #4 - celsiusToFahrenheit")
function celsiusToFahrenheit(cel) {
    let celNum = parseFloat(cel);
    let fahr = (celNum * 9/5) + 32;
    console.log(`${celNum.toFixed(1)} Celsius = ${fahr.toFixed(1)} Fahrenheit`);
}

//Test Cases
celsiusToFahrenheit(43);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-3);