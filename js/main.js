
// hbc -> Header Background Canvas
$(document).ready(function () {
    // No idea why the f*** this works. It's not right and shouldn't work!
    $('.nav--tab').css('width', $(window).width());
    // Weird code.^

    // headerBackground.css('background-color', "red");


    var header = document.getElementById('header--background')

    header.width = $(".header-background--container").width();
    header.height = $(".header-background--container").height();

    var hbc = header.getContext('2d');
    hbc.strokeStyle = "#000";
    hbc.lineWidth = 1;

    for (var i = 0; i < header.width; i += 15) {
        drawCross(hbc, i);
    }
    hbc.stroke();
});


function changeLayout(activeSection) {
    var sections = ['about', 'project', 'contact'];

    sections.map(function (val) {
        if (val == activeSection) {
            $('#' + activeSection).show();
        } else {
            $("#" + val).hide();
        }
    });

}

function drawCross(hbc, i) {
    hbc.moveTo(0 + i, 0);
    hbc.lineTo(10 + i, 10);
    hbc.moveTo(0 + i, 10);
    hbc.lineTo(10 + i, 0);
}