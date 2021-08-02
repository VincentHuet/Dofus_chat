function createRessourceObject(quantity, name, heures, minutes, seconds, price) {
    let vRessourceObject = {};

    vRessourceObject.quantity = quantity;
    vRessourceObject.name = name; 
    vRessourceObject.heures = heures;
    vRessourceObject.minutes = minutes;
    vRessourceObject.seconds = seconds;
    vRessourceObject.price = price;

    return vRessourceObject;
}
