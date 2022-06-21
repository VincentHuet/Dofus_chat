
function converterChatToGoogleMap(bank, mapToVisualization, dataToVisualization){

    console.log("drawVisualization - Bank : ", bank);

    for (let i = 0; i < bank.length; i++) {
      bank[i].transaction.forEach(element => {
        let testArray = [];
        
        testArray.push(element.name);
        testArray.push(element.date);
        testArray.push(element.price / element.quantity);
        
        
        if(mapToVisualization.get(element.date) != undefined){
          let mapArray = mapToVisualization.get(element.date);
          
          mapArray[i] = element.price / element.quantity;
          
          mapToVisualization.set(element.date, mapArray);

        } else {  
          let mapArray = [];
          mapArray[i] = element.price / element.quantity;
          mapToVisualization.set(element.date, mapArray);
        }

        dataToVisualization.push(testArray);
        
      });
    }

}