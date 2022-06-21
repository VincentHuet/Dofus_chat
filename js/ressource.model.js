function createRessourceObject(quantity, name, heures, minutes, seconds, price, date) {
    let vRessourceObject = {};

    vRessourceObject.quantity = quantity;
    vRessourceObject.name = name; 
    vRessourceObject.heures = heures;
    vRessourceObject.minutes = minutes;
    vRessourceObject.seconds = seconds;
    vRessourceObject.price = price;

    vRessourceObject.date = date.setHours(heures, minutes, seconds);

    return vRessourceObject;
}
