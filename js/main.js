
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

    hbc.font = "150px Arial ";

    hbc.textAlign = "center";

    hbc.fillStyle = "#fff";
    hbc.fillText("ISHAN JAIN", header.width / 2, header.height / 1.6);
    hbc.strokeStyle = "grey";
    for (var rows = 0; rows < header.height; rows += 12) {

        for (var cols = 0; cols < header.width; cols += 12) {

            hbc.moveTo(-5 + cols, -5 + rows);

            hbc.lineTo(8 + cols, 8 + rows);

            hbc.moveTo(-5 + cols, 8 + rows);

            hbc.lineTo(8 + cols, -5 + rows);

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

    $(".header-background--container").css('background-color', "black");

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