$(document).ready(function () {

    const fallbackText = 'Your converted text will appear here';
    const convertedText = $('.converted-text');
    const textInput = $('.text-input');

    textInput.on('input', function() {
        let firstRendition = textInput.val().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        let secondRendition = firstRendition.replace(/\'/g, ' ');
        convertedText.text(firstRendition);
        convertedText.text(secondRendition);

        if (!textInput.val()) {
            convertedText.text(fallbackText); 
        }
    });

    if (!convertedText.val()) {
        convertedText.text(fallbackText);
    }

    $('.clear-button').on('click', () => {
        textInput.val('');
        convertedText.text(fallbackText);
    });
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    if ($(element).text()) {
        $('.copy-button').text('copied!');
        setTimeout(function() { 
            $('.copy-button').text('Copy All');
        }, 1000);
    }
}
