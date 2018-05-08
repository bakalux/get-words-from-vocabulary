var URL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
var dataAjax = function (data) {
    alert("Got data!");
    console.log(data.length);
    var wordsArray = data.split("\n");
    var firstWords = "";
    for (var i = 0; i < 1000; i++) {
        firstWords += wordsArray[i] + " ";
    }
    document.body.innerHTML += firstWords;
};
$.ajax({
    url: URL,
    dataType: "text",
    success: dataAjax,
    error: function (error) {
        alert(error);
    }
});