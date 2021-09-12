
function logBank(){
    console.log(typeof bank);

    console.log(bank);

    console.log(bank.keys);
}

function addToDataBase(ressources, objectRessources) {

    if(ressources[objectRessources.name] != undefined && ressources[objectRessources.name] != null){
        ressources[objectRessources.name].transaction.push(objectRessources);
    } else {
        ressources[objectRessources.name] = {"averagePrice" : 0};
        
        ressources[objectRessources.name].name = objectRessources.name;

        ressources[objectRessources.name].transaction = [];
        ressources[objectRessources.name].transaction.push(objectRessources);
    }
}

function updateBankValues(){

    //const map = new Map(Object.entries(bank));

    // for (let item of bank) {
    //     let sum = 0;
    //     item.transaction.forEach((price) => {
    //         sum = sum + price;
    //     })
    //     item.averagePrice = sum / item.transaction.length;

    //     console.log(item);
    // };

    console.log(bank);
}