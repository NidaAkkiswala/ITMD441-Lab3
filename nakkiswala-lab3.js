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

minMaxAverage([2, 5, 23, 6, 9, 4, 3, 1]);
minMaxAverage([10, 15, 53, 60, 49, 14, 33, 10]);
minMaxAverage([20, 50, 45, 16, 92, 44, 33, 11]);


// Exercise #2
console.log("\nExercise #2 - countVowels")


// Exercise #3
console.log("\nExercise #3 - sortNumbers")


// Exercise #4
console.log("\nExercise #4 - celsiusToFahrenheit")