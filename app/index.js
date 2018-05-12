var axios = require('axios');
var lineArr;
var domainEndWords = [];

getData('domain_zones.txt');

function getData() { //this will read file and send information to other function
    var fs = require('fs');

    fs.readFile('app/domain_zones.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        intoArray(data);
    });
}

function intoArray(lines) {
    lineArr = lines.split('\n');
}

function checkForDomainEnd(wordsArray) {
    for (var i = 0; i < (lineArr.length - 1); i++) {
        for (var j = 0; j < wordsArray.length; j++) {
            if (wordsArray[j].endsWith(lineArr[i]) && ((wordsArray[j].length - lineArr[i].length) > 0)) {
                var wordWithDot = (wordsArray[j].substr(0, wordsArray[j].length - lineArr[i].length) + "." + lineArr[i]).toLowerCase();
                domainEndWords.push(wordWithDot);
            }
        }
    }
    console.log('Domain words are');
    for (i = 0; i < domainEndWords.length; i++) {
        console.log(domainEndWords[i]);
    }
}


var urlForDomains = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';

function dataAjax(data) {
    console.log("Got data!");
    console.log(data.length);
    console.log(typeof data);
    var wordsArray = data.split("\n");
    checkForDomainEnd(wordsArray);
}


axios({
        method: 'get',
        url: urlForDomains,
        responseType: 'text'
    })
    .then(function (response) {
        console.info(Object.getOwnPropertyNames(response));
        dataAjax(response.data);
    });

/*
var urlTopWords = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt';
axios({
    method: 'get',
    url: urlTopWords,
    responseType: 'text'
})
.then(function(response){
    console.info(Object.getOwnPropertyNames(response));
    var mostFrequentwords = intoArray(response.data);
    console.log('most frequent word is' + mostFrequentwords[0]);
}); */