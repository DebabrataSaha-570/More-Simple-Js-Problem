function animalCount(miles) {
    const animalInfirst10Miles = 10;
    const animalInSecond10Miles = 50
    const animalInRestMiles = 100;
    if (miles <= 10) {
        const first10 = miles * animalInfirst10Miles;
        return first10;
    }
    else if (miles > 10 && miles <= 20) {
        const first10 = 10 * animalInfirst10Miles;
        const restMiles = miles - 10;
        const second10 = restMiles * animalInSecond10Miles;
        const total = first10 + second10;
        return total;
    }
    else {
        const first10 = 10 * animalInfirst10Miles;
        const second10 = 10 * animalInSecond10Miles;
        const restMiles = miles - 20;
        const third = restMiles * animalInRestMiles;
        const total = first10 + second10 + third;
        return total;
    }
}
console.log(animalCount(21))