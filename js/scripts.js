/**
 * Created by Cox on 09.04.2017.
 */
$(document).ready(function () {
    var squareApplication = {
        init: function () {
            squareApplication.registerHandlers();
            $(".canvas").append("<div class='square'></div>");
            var currentSquare = $('.square');
            currentSquare.width(squareApplication.square.width).height(squareApplication.square.height);
        },
        square: {
            width: '300',
            height: '300',
            color: 'red'
        },

        changeSize: function () {
            var size = $('#Size[type=range]').val();
            $('.square').stop().animate({
                height: size,
                width: size
            });
        },
        setColor: function () {
            var color = $('#Favcolor').val();
            $('.square').css('border-color', color);
        },
        bounceSquare: function () {
            var bounce = new Bounce();
            bounce
                .translate({
                    from: {x: 0, y: 300},
                    to: {x: 0, y: 0},
                    duration: 2000,
                    stiffness: 3,
                    bounces:4
                })

                .applyTo(document.querySelectorAll(".square"));
        },
        handlers: {
            '#Size input': 'changeSize',
            '#Favcolor change': 'setColor',
            '#Bounce click': 'bounceSquare'
        },
        registerHandlers: function () {
            var that = this;
            $.each(this.handlers, function (key, value) {
                var split = key.split(" "),
                    element = split[0],
                    trigger = split[1];

                $(document).delegate(element, trigger, that[value]);
            });
        }
    };

    squareApplication.init();
});