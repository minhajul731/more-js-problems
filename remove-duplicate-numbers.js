const numbers = [1, 5, 7, 10, 11, 12, 16, 5, 10, 1, 18, 17];

function duplicateNumbers(numbers) {
    let unique = [];
    for (const number of numbers) {
        // console.log(number);
        if (unique.indexOf(numbers) == -1) {
            unique.push(number);
        }
    }
    return unique;

    /* 
        for (let i = 0; i < numbers.length; i++) {
            if (unique.indexOf(numbers) == -1) {
                unique.push(numbers);
            }
        }
        return unique; */

}

const uniqueNumber = duplicateNumbers(numbers);
console.log(uniqueNumber);