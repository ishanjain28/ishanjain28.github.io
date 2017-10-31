
function fetch() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200 && xhr.responseText != "") {
                var body = JSON.parse(xhr.responseText);

                var d = document.getElementById("user-activity");

                d.innerHTML = `<a href=${body.url}>${body.song}</a> &nbsp;&bull;&nbsp; ${body.album} &nbsp;&bull;&nbsp; ${body.artist}`

                console.log(d.innerHTML)
            }
        }
    }

    xhr.open("GET", "https://www.ishanjain.me/monitor/lastfm", true);
    xhr.send(null);
}

fetch();
setInterval(fetch, 45 * 1000);
