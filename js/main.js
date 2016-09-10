
function initialize() {

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();

}

function resizeCanvas() {

    var header = document.getElementById('header--background');

    header.width = $(".header-background--container").width();

    header.height = $(".header-background--container").height();

    redraw();

}

function redraw() {

    var header = document.getElementById('header--background');

    var hbc = header.getContext('2d');

    hbc.font = "150px Arial";

    hbc.textAlign = "center";

    hbc.fillText("ISHAN JAIN", header.width / 2, header.height / 1.6);

    for (var rows = 0; rows < header.height; rows += 15) {

        for (var cols = 0; cols < header.width; cols += 15) {

            hbc.moveTo(0 + cols, 0 + rows);

            hbc.lineTo(10 + cols, 10 + rows);

            hbc.moveTo(0 + cols, 10 + rows);

            hbc.lineTo(10 + cols, 0 + rows);

        }

    }

    hbc.stroke();

}

// hbc -> Header Background Canvas

$(document).ready(function () {

    // why is this working?

    $('.nav--tab').css('width', $(window).width());

    // Weird code.^^^

    var header = document.getElementById('header--background');

    var hbc = header.getContext('2d');

    initialize();

    // headerBackground.css('background-color', "red");

    hbc.strokeStyle = "#000";

    hbc.lineWidth = 1;

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