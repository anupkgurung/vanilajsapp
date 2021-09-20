var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-input");
var output = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click",function(){
    var inputTxt = txtArea.value;
    fetchData(inputTxt)
})

function fetchData(queryText){
    fetch(constructURL(queryText))
        .then(response => response.json())
        .then(json => {
            var translatedvalue = json.contents.translated;
            output.innerText = translatedvalue;
        })
        .catch(function(error){
            console.log("Error occured" + error)
            console.log(error.statusCode);
        })
}
function constructURL(queryText){
    //return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+queryText ;
    var serverURL =  url +"?text="+queryText;
    console.log(encodeURI(serverURL))
    return encodeURI(serverURL);
}



