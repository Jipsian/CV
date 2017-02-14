/*Animation skills*/

$(function() {
    var divs = $(".skills");
    divs.not("#skill1").hide();
    $(".catSkills").click(function() {
        divs.filter(":visible").hide();
        $($(this).attr("href")).show();
        return false;
    });
});


/*Animations PortFolio*/

$(function() {
    var filterList = {
        init: function() {
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function() {
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        top: -30
                    }, 500, 'easeOutQuad');
                },
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: -40
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );
        }
    };
    filterList.init();
});


/*Modale ML*/

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus();
});


/* Ancres */

$('.anchor').click(function() {
    var id = $(this).attr("href");
    var offset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: offset
    }, 'slow');
    return false;
});
