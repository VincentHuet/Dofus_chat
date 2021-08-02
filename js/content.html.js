function initFileKeptLineContainer(currentFile){

    let fileName = currentFile.name;

    let fileElem = document.createElement("div");
    fileElem.classList.add("file");
    fileElem.textContent = fileName;

    return fileElem;
}

function addLineItemToContentHtml(fileElem, line, objectRessources){

    let lineElem = document.createElement("div");
    lineElem.classList.add("chatlog-line");

    lineElem.textContent = line + "\n\tNom\t:\t".concat(objectRessources.name).
                            concat("\n\tTime \t:\t").concat(objectRessources.heures).concat("h")
                                                    .concat(objectRessources.minutes).concat("m")
                                                    .concat(objectRessources.seconds).concat("s")
                                                    .concat("\n\tQte\t:\t").concat(objectRessources.quantity)
                                                    .concat("\n\Price\t:\t").concat(objectRessources.price);
    

    fileElem.appendChild(lineElem);
}
