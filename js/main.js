
$(document).ready(function () {
    // var svg = document.querySelector('svg');

    // var pt = svg.createSVGPoint();

    // function cursorPoint(evt) {
    //     pt.x = evt.clientX; pt.y = evt.clientY;

    //     return pt.matrixTransform(svg.getScreenCTM().inverse());

    // }

    // svg.addEventListener('mousemove', function (evt) {
    //     console.log(document.elementFromPoint(cursorPoint(evt).x, cursorPoint(evt).y));
    // }, false);
    var width = $(window).width();
    $('.nav--tab').css('width', width);

    $('.hobby-heading').css('border-bottom', '1px solid #000');

});
function aboutLayout() {
    $('.about').css('display', 'flex');

}
function projectLayout() {
    $('.about').css('display', 'none');
    $('.project').css('height', '72vh');
    $('.header-background--container').css('height', '18vh');


}

function contactLayout() {
    $('.about').css('display', 'none');
    $('.header-background--container').css('height', '35vh');
    $('.contact').css('height', '55vh');
}