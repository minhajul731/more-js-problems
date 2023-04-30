function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWoodQuantity = 3;
    const perTableWoodQuantity = 10;
    const perBedWoodQuantity = 50;

    let chairWood = chairQuantity * perChairWoodQuantity;
    let tableWood = tableQuantity * perTableWoodQuantity;
    let bedWood = bedQuantity * perBedWoodQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const woodNeed = woodQuantity(10, 5, 3);
console.log('Total Wood Need: ', woodNeed);