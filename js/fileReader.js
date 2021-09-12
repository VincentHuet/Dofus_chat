// var bank = new Map();
var bank = [];

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

                    parseLine(lines, currentFile, bank);

                    updateBankValues();
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
