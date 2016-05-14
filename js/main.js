/**
 * Created by Ishan Jain on 18/04/2016.
 */

function getJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', true);
    xobj.setRequestHeader("X-Mashape-Key", "j2rbmAvhvimshrTJkUHtmBEceNbgp1WJRG6jsnVVTDboDxcAIR");
    xobj.overrideMimeType("application/json");
    xobj.onload = function () {
        if (xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function changeColor() {
    var colors = ["#f78822", "#4a742c", "#e12828", "#FEC202", "#DA2021", "#527AC0", "#13ACD8", "#689550", "#E53059", "#6E4C96"], currentColor = Math.floor(Math.random() * (colors.length - 1)), backgroundBlock = document.getElementById("backgroundBlock"), actionbtn = document.getElementById("actionbtn");
    actionbtn.style.backgroundColor = colors[currentColor];
    backgroundBlock.style.backgroundColor = colors[currentColor];

}

function showJSON() {
    getJSON(function (response) {
        var properJSON = JSON.parse(response), quote = document.getElementById("quote"), author = document.getElementById("author");
        quote.innerHTML = properJSON.quote;
        author.innerHTML = "<i>-" + properJSON.author + "</i>";
        changeColor();
    });
}

function newQuote() {
    showJSON();

}
function tweet() {
    var quoteTweetable = document.getElementById("quote").innerHTML.split(" ").join("%20");
    
    var link = "https://twitter.com/intent/tweet?text=" + quoteTweetable, tbtn = document.getElementById("tbtn");
    
    tbtn.setAttribute("href", link);
}
