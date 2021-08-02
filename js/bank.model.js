function addToDataBase(ressources, objectRessources) {

    if(ressources[objectRessources.name] != undefined && ressources[objectRessources.name] != null){
        ressources[objectRessources.name].push(objectRessources);
    } else {
        ressources[objectRessources.name] = [];
        ressources[objectRessources.name].push(objectRessources);
    }
}
