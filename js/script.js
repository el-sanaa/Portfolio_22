$(function () {

    let vitesse = parseInt($('#carrousel').data('vitesse')) || 4000;

    console.log(vitesse);

    let mesImages = $('#reglette figure');
    let nbImages = mesImages.length;

    let reglette = $('#reglette');
    reglette.css('width', nbImages * 100 + '%');

    function reorder() {
        mesImages.each(function (index) {
            mesImages.eq(index).css({
                order: index,
                width: 100 / nbImages + '%'
            })
        });
    }

    reorder();

    let compteurImages = 0;
    let timer1 = setInterval(carrousel, vitesse);

    function carrousel() {

        $('#reglette').animate({
            left: '-100%'
        }, 1000, function () {

            mesImages.eq(compteurImages).css('order', parseInt(mesImages.eq(compteurImages).css('order')) + nbImages);

            compteurImages++;

            $('#reglette').css('left', 0);
            if (compteurImages == nbImages) {
                compteurImages = 0;
                reorder();
            }
        });
    }

    $('#carrousel')
        .on('mouseenter', function () {
            clearInterval(timer1);
        })
        .on('mouseleave', function () {
            timer1 = setInterval(carrousel, vitesse);
        });


});