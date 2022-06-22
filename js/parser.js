function parseLine(lines, currentFile, bank) {

    let fileName = currentFile.name;
    
    let date = fileName.match(/.*chat-([0-9]{2})-([0-9]{2})-([0-9]{4}).*\.txt/);
    let dateFichier = new Date(date[3],date[2],date[1]);
    let dateAsString = dateFichier.toJSON().substring(0, 10);

    console.log(    "Date du fichier : ", fileName); 
    // console.log(    "Date du fichier toDateString : ", dateFichier.toJSON().substring(0, 10));

    let regexList = [
                        {
                            "nom" : "achat",
                            "filtre" : /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\s(.{1,3})x\s[(.*)]\s\((.*)\skamas\)/gi,
                            "capture" : /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\s(.{1,3})x\s[(.*)]\s\((.*)\skamas\)/
                        },
                        {
                            "nom" : "vente",
                            "filtre" : /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sBanque\s:\s\+\s(.*)\sKamas\s\(vente\s:\s(.{1,3})\s\[(.*)\]\).*/gi,
                            "capture" : /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sBanque\s:\s\+\s(.*)\s(.{1,3})\sKamas\s\(vente\s:\s(.{1,3})\s\[(.*)\]\).*/
                            ///\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sBanque\s:\s\+\s(.*)\sKamas\s\(vente\s:\s(.{1,3})\s\[(.*)\]\).*/gi
                        }
                    ];

    console.log(regexList);

    regexList.forEach((regex) => {

        let filteredLines = lines.filter(l => l.match(regex.filtre));

        if (filteredLines && filteredLines.length > 0) {
            let contentDiv = document.querySelector("#listFiles");

            if (contentDiv) {

                let fileElem = initFileKeptLineContainer(fileName);
                
                filteredLines.forEach((line) => {

                    let objectRessources = lineToItem(line, regex.capture, dateFichier);

                    objectRessources.dateAsString = dateAsString;
                    
                    addLineItemToContentHtml(fileElem, line, objectRessources);

                    addToDataBase(bank, objectRessources);
                });

                contentDiv.appendChild(fileElem);
            }
        }
    });
}

function lineToItem(line, regexp, date) {

    let item = {};
    var test = line.match(regexp);

    // Check conteneur
    if (test != undefined && test) {
        item = createRessourceObject(test[6], test[7], test[1], test[2], test[3], test[4].concat(test[5]), date);
    }

    return item;
}
