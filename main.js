getData('domain_zones.txt');
var lineArr;

function getData() { //this will read file and send information to other function
    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            var lines = xmlhttp.responseText; //*here we get all lines from text file*

            intoArray(lines); //here we call function with parameter "lines*"                   
        }
    }

    xmlhttp.open("GET", "domain_zones.txt", true);
    xmlhttp.send();
}

function intoArray(lines) {
    // splitting all text data into array "\n" is splitting data from each new line
    //and saving each new line as each element*

    lineArr = lines.split('\n');
    console.log(lineArr[100]);
    //just to check if it works output lineArr[index] as below
}
var domainEndWords = [];

function checkForDomainEnd(wordsArray) {
    for (var i = 300; i < 400; i++) {
        for (var j = 0; j < wordsArray.length; j++) {
            if (wordsArray[j].endsWith(lineArr[i])) {
                domainEndWords += wordsArray[j] + " ";
            }
        }
    }
    document.write("domain words are " + domainEndWords);
}



var URL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';

var dataAjax = function (data) {
    alert("Got data!");
    console.log(data.length);
    var wordsArray = data.split("\n");
    checkForDomainEnd(wordsArray);
    console.log(wordsArray[10]);
    console.log(lineArr[50]);




};

$.ajax({
    url: URL,
    dataType: "text",
    success: dataAjax,
    error: function (error) {
        alert(error);
    }
});