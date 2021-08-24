/*
    chairWood = 3cft / chair ; 
    table = 10cft / table; 
    bed = 50cft / bed; 
*/

function woodCalculator(charQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = charQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;

}

const firstOption = woodCalculator(0, 0, 1)
console.log(firstOption)