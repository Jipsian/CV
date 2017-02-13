/*Animation skills*/
$(function() {
    var divs = $(".skills");
    divs.not("#skill1").hide();
    $("a").click(function() {
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

/*Me contacter*/
$(document).ready(function() {
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Veuillez saisir votre prénom.'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Veuillez saisir votre nom.'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Veuillez saisir une adresse E-mail.'
                  },
                  emailAddress: {
                      message: 'Veuillez saisir une adresse valide.'
                  }
              }
          },
          comment: {
              validators: {
                    stringLength: {
                      min: 10,
                      max: 500,
                      message:'Veuillez saisir un message comprenant 10 à 500 caractères.'
                  },
                  notEmpty: {
                      message: 'Veuillez saisir un message.'
                  }
                  }
              }
          }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow");
              $('#contact_form').data('bootstrapValidator').resetForm();

          e.preventDefault();

          var $form = $(e.target);

          var bv = $form.data('bootstrapValidator');

          $.post($form.attr('action'), $form.serialize(), function(result) {
          }, 'json');
      });
});
