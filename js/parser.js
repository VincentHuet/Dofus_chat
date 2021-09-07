function parseLine(lines, currentFile, bank) {


    let regexList = [
                    /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\s(.{1,3})x\s[(.*)]\s\((.*)\skamas\)/gi,
                    /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sBanque\s:\s\+\s(.*)\sKamas\s\(vente\s:\s(.{1,3})\s\[(.*)\]\)/gi
                    ];

    console.log(regexList);

    regexList.forEach((regex) => {

        console.log('Regexp : ', regex);

        let filteredLines = lines.filter(l => l.match(regex));

        console.log('Regexp : ', regex);

        if (filteredLines && filteredLines.length > 0) {
            let contentDiv = document.querySelector("#listFiles");

            if (contentDiv) {

                let fileElem = initFileKeptLineContainer(currentFile)

                filteredLines.forEach((line) => {

                    console.log(line);

                    let regexp = /\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sVous avez obtenu\s([0-9]{1,5})\s\'\[(.*)\]\'\./;

                    let objectRessources = lineToItem(line, regexp);

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
        console.log(test);

        item = createRessourceObject(test[4], test[5], test[1], test[2], test[3], 0);
    }

    return item;
}