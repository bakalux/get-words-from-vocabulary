var URL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
var dataAjax = function (data) {
    alert("Got data!");
    console.log(data.length);
    var wordsArray = data.split("\n");
    for (var i = 0; i < 10; i++) {
        document.body.innerHTML += wordsArray[i] + "<br>";
    }

};
$.ajax({
    url: URL,
    dataType: "text",
    success: dataAjax,
    error: function (error) {
        alert(error);
    }
});