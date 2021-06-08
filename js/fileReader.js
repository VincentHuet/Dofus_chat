document.addEventListener("DOMContentLoaded", () => {
    
    
    function fileReader(oFiles, nFiles, nBytes) {
        for (let nFileId = 0; nFileId < nFiles; nFileId++) {
            nBytes += oFiles[nFileId].size;
            //console.log("oFiles[nFileId] : ", oFiles[nFileId]);

            let currentFile = oFiles[nFileId];

            if (currentFile) {
                let reader = new FileReader();

                reader.onload = (e) => {

                    let ct = e.target.result;   
                    let lines = ct.split('\n');
            
                    // TODO
                    //    const regex = /x \[/gi
                    const regex = /\[[0-9]{2}:[0-9]{2}:[0-9]{2}\]\sVous avez obtenu\s[0-9]{1,5}\s\'\[.*\]\'\./gi



                    // Formatage : 
                    // Regexp : \[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sVous avez obtenu\s([0-9]{1,5})\s\'\[(.*)\]\'\.
                    // Replace Pattern : \tNom\t:\t$5\n\tTime \t:\t$1h$2m$3s\n\tQte\t:\t$4 
            
                    let filteredLines = lines.filter(l => l.match(regex));
            
                    if (filteredLines && filteredLines.length > 0) {
                        let contentDiv = document.querySelector("#listFiles");
            
                        if (contentDiv) {
            
                            let fileName = currentFile.name;
            
                            // TODO : traitement
                            let fileDate = fileName;
            
                            let fileElem = document.createElement("div");
                            fileElem.classList.add("file");
                            fileElem.textContent = fileDate;
            
                            filteredLines.forEach((line) => {
                                let lineElem = document.createElement("div");
                                lineElem.classList.add("chatlog-line");

                                //fileElem.appendChild(line);

                                var test = line.match(/\[([0-9]{2}):([0-9]{2}):([0-9]{2})\]\sVous avez obtenu\s([0-9]{1,5})\s\'\[(.*)\]\'\./);
                                
                                lineElem.textContent = line + "\tNom\t:\t".concat(test[5]).concat("\n\tTime \t:\t").concat(test[1]).concat("h").concat(test[2]).concat("m").concat(test[3]).concat("s").concat("\n\tQte\t:\t").concat(test[4]);
                                fileElem.appendChild(lineElem);
            
                            });
            
                            listFiles.appendChild(fileElem);
            
                        }
                    }
                };

                reader.readAsText(currentFile);
            } else {
                alert("Failed to load file");
            }
        }


    }
    
    
    
    
    
    // code
    function updateSize(evt) {
        let nBytes = 0,
            oFiles = evt.target.files,
            nFiles = oFiles.length;

            fileReader(oFiles, nFiles, nBytes);

        let sOutput = nBytes + " bytes";
        // optional code for multiples approximation
        const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
        for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
            sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
        }
        // end of optional code
        document.querySelector("#fileNum").innerHTML = nFiles;
        document.querySelector("#fileSize").innerHTML = sOutput;
    }

    let uploadInput = document.querySelector("#chatFileUploadInput");
    if (uploadInput) {
        uploadInput.addEventListener("change", updateSize, false);
    }

});
