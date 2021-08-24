
/* sundor boner lokaloy theke prothom 10 mile porjonto gore 10 ta kore animal ache. 10 mile theke 20 mile porjonto proti mile e gore 50 ta kore animal ache. 20 mile er por theke puro bon e proti mile e 100 ta kore animal ache. 

ekhon amake joto mile ei boluk na keno toto mile e mot koto ta animal ache ta hishab kore ber korte hobe. 

*/

// simple  solution 

function animalCount(miles) {
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if (miles > 10 && miles <= 20) {
        const count2 = 100 + (miles - 10) * 50
        return count2;
    }
    else if (miles > 20) {
        count3 = 100 + 500 + (miles - 20) * 100
        return count3
    }
}

console.log(animalCount(21))

// another solution 

function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles > 10 && miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const RestDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
        return totalAnimals;

    }

}

console.log(animalCount(21))

