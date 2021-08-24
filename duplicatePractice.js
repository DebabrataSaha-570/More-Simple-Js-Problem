var number = [2, 4, 4, 5, 5, 6, 2, 1, 12, 34, 34, 45, 45]

function removeDuplicate(numbers) {
    const unique = [];
    // for (i = 0; i < numbers.length; i++) {
    //     const element = numbers[i];
    //     if (unique.indexOf(element) == -1) {
    //         unique.push(element)
    //     }
    // }
    // ................for of loop.............. 

    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }

    return unique;
}

console.log(removeDuplicate(number))