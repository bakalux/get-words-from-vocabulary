var URL = "https://api.datamuse.com/words?ml=ringing+in+the+ears&max=25";
var dataAjax = function (data) {
    alert("Got data!");
    console.log(data);
    for (var i = 0; i < 10; i++) {
        console.log(data[i].word);
        document.body.innerHTML += data[i].word + "<br>";
    }
};
$.ajax({
    url: URL,
    dataType: "json",
    success: dataAjax,
    error: function (error) {
        alert(error);
    }
});