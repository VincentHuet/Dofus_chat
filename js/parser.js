function parseLine(lines, currentFile, bank) {

    
/* 
    [19:09:21] 10 x [Soie Baveuse] (9 746 kamas)
    [18:28:23] Banque : + 147 948 Kamas (vente : 10 [Laine de Tengu Givrefoux]).
    [23:17:25] Vous avez obtenu 50 '[Bois de Bombu]'.
*/
    // TODO - const regex = /x \[/gi
    const regex = /\[[0-9]{2}:[0-9]{2}:[0-9]{2}\]\s.*\[.*\]/gi
    // Formatage : 
    // Regexp : \[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sVous avez obtenu\s([0-9]{1,5})\s\'\[(.*)\]\'\.
    // Replace Pattern : \tNom\t:\t$5\n\tTime \t:\t$1h$2m$3s\n\tQte\t:\t$4 

    let filteredLines = lines.filter(l => l.match(regex));

    if (filteredLines && filteredLines.length > 0) {
        let contentDiv = document.querySelector("#listFiles");

        if(contentDiv){

            let fileElem = initFileKeptLineContainer(currentFile)

            filteredLines.forEach((line) => {

                console.log(line);

                let objectRessources = lineToItem(line);

                addLineItemToContentHtml(fileElem, line, objectRessources);

                addToDataBase(bank, objectRessources);
            });

            contentDiv.appendChild(fileElem);
        }
    }
}

function lineToItem(line) {

    let item = {};

    var test = line.match(/\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sVous avez obtenu\s([0-9]{1,5})\s\'\[(.*)\]\'\./);

    // Check conteneur
    if(test != undefined && test ) {
        console.log(test);

        item = createRessourceObject(test[4], test[5], test[1], test[2], test[3], 0);
    }
    
    return item;
}