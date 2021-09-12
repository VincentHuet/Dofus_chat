function parseLine(lines, currentFile, bank) {


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

                let fileElem = initFileKeptLineContainer(currentFile)

                filteredLines.forEach((line) => {

                    let objectRessources = lineToItem(line, regex.capture);

                    addLineItemToContentHtml(fileElem, line, objectRessources);

                    addToDataBase(bank, objectRessources);
                });

                contentDiv.appendChild(fileElem);
            }
        }
    });
}

function lineToItem(line, regexp) {

    let item = {};
    var test = line.match(regexp);

    // Check conteneur
    if (test != undefined && test) {
        item = createRessourceObject(test[6], test[7], test[1], test[2], test[3], test[4].concat(test[5]));
    }

    return item;
}