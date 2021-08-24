// remove duplicate item from an array

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'gabul', 'abul', 'habul', 'dabul']

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element)
    // }
    for (const element of names) {  //( for of loop )
        console.log(element)
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)

// task : do same thing for array of numbers and with for of loop . 

