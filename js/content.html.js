function initFileKeptLineContainer(fileName){
    
    let fileElem = document.createElement("div");
    fileElem.classList.add("file");
    fileElem.textContent = fileName;

    return fileElem;
}

function addLineItemToContentHtml(fileElem, line, objectRessources){

    let lineElem = document.createElement("div");
    lineElem.classList.add("chatlog-line");

    lineElem.textContent = line + "\n\tNom\t:\t".concat(objectRessources.name)
                                                .concat(" - \tTime \t:\t").concat(objectRessources.heures).concat("h")
                                                .concat(objectRessources.minutes).concat("m")
                                                .concat(objectRessources.seconds).concat("s")
                                                .concat(" - \tQte\t:\t").concat(objectRessources.quantity)
                                                .concat(" - \tPrice\t:\t").concat((new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'Eur' }).format(objectRessources.price)).replace('€','K'));

    fileElem.appendChild(lineElem);
}
