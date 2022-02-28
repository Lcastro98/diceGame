function viewsArrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('datoInput'),
    gamer = [].map.call(inputsValues, function(dataInput){
        arrayInput.push(dataInput.value);
    });
    arrayInput.forEach(function(inputsValuesData){
        console.log(inputsValuesData);
    })
}
