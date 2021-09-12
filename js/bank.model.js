
function logBank(){
    console.log(typeof bank);

    console.log(bank);

    console.log(bank.keys);
}

function addToDataBase(ressources, objectRessources) {

    if(!ressources) {
        ressources = [];
    }
    let exist = ressources.find(r => r.name === objectRessources.name);

    if(exist){
        exist.transaction.push(objectRessources);
    } else {

        let nouvelleRessource = {
            averagePrice : 0,
            name : objectRessources.name,
            transaction : [objectRessources]
        }

        ressources.push(nouvelleRessource);

    }
}

function updateBankValues(){

    bank.map(item => {
        let sum = item.transaction.reduce((acc, cur) =>{
            acc += Number(cur.price) / Number(cur.quantity);
            return acc;
        }, 0);

        item.averagePrice = Math.floor(sum / item.transaction.length);
    });

    console.log(bank);
};