var axios = require('axios');
var domainEndOtherWords = [];
var domainZones = [];
var wordsArray = [];
var domainEndPopularWords = [];
var urlForDomains = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
getPopularWords();
getData('domain_zones.txt');
axios({
        method: 'get',
        url: urlForDomains,
        responseType: 'text'
    })
    .then(function (response) {
        dataAjax(response.data);
    });


function getData() { //this will read file and send information to other function
    var fs = require('fs');

    fs.readFile('app/domain_zones.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log('Loaded domain zones!');
        domainZones = data.split('\n');
    });
}


function checkForDomainEnd(wordsArray, finalDomains) {
    for (var i = 0; i < (domainZones.length - 1); i++) {
        for (var j = 0; j < wordsArray.length; j++) {
            if (wordsArray[j].toLowerCase().endsWith(domainZones[i].toLowerCase()) && ((wordsArray[j].length - domainZones[i].length) > 0)) {
                var wordWithDot = (wordsArray[j].substr(0, wordsArray[j].length - domainZones[i].length) + "." + domainZones[i]).toLowerCase();
                finalDomains.push(wordWithDot);
            }
        }
    }

    console.log('Domain words are');
    for (i = 0; i < finalDomains.length; i++) {
        console.log(finalDomains[i]);
    }
    console.log('Found ' + finalDomains.length + ' domains');
}

function dataAjax(data) {
    console.log("Loaded vocabulary!");
    wordsArray = data.split("\n");
    console.log('Computing data for popular words');
    checkForDomainEnd(popularWords, domainEndPopularWords);
    writeInFile(domainEndPopularWords, 'popular_words_domains.txt');
    /*console.log("Computing data for other words...");
    checkForDomainEnd(wordsArray, domainEndOtherWords);
    writeInFile(domainEndOtherWords, "domains.txt");*/
}

function writeInFile(finalDomains, domainsFile) {
    var fs = require('fs');
    var stream = fs.createWriteStream(domainsFile);
    stream.once('open', function (fd) {
        for (i = 0; i < finalDomains.length; i++) {
            stream.write(finalDomains[i] + " \n");
        }
        stream.end();
    });
}

function getPopularWords() { //this will read file and send information to other function
    var fs = require('fs');

    fs.readFile('app/10000_popular_words.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log('Loaded popular words!');
        popularWords = data.split('\n');
    });
}