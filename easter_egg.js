document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var input = document.getElementById('easterEgg');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var inputValue = input.value.toLowerCase();

        if (inputValue === 'aliens are real') {
            var iframe = document.createElement('iframe');
            iframe.src = 'space-invaders-master/index.html';
            iframe.width = '800';
            iframe.height = '800';
            iframeContainer.innerHTML = '';
            iframeContainer.appendChild(iframe);
        } else if (inputValue === 'aliens arent real') {
            window.alert('You probably are just a hater');
        } else {
            window.alert('Invalid keyphrase. Try again.');
        }
    });
});