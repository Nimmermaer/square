/**
 * Created by Cox on 09.04.2017.
 */
window.onload = function () {
    document.getElementById('Size').addEventListener('change', function () {
        square.height = this.value;
        draw(square);
    });
    document.getElementById('Size').addEventListener('change', function () {
        square.width = this.value;
        draw(square);
    });
    document.getElementById('Favcolor').addEventListener('change', function () {
        square.borderColor = this.value;
        draw(square);
    });

    function draw(square) {
        if (document.getElementsByClassName('square').length > 0) {
            document.getElementsByClassName('square')[0].setAttribute('style', 'width:' + square.width + 'px; height:' + square.height + 'px');

            document.getElementsByClassName('square')[0].style.borderColor = square.borderColor;
            console.log(document.getElementsByClassName('square'));
        } else {
            var div = document.createElement('div');
            div.className = 'square';
            div.style.width = square.width;
            div.style.height = square.height;
            div.style.borderColor = square.color;
            var canvas = document.getElementsByClassName('canvas');
            canvas[0].appendChild(div);
        }

    }

}
