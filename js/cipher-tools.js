$('.btn-info').click(function () {
    let elementID = $(this).attr('id');
    const plainBox = $('#plain');
    const cipherBox = $('#cipher');

    console.log(elementID + " selected");

    switch (elementID) {
        case 'war':
            let warText = $('#war_text').val();
            plainBox.val(warText);
            break;
        case 'inv':
            let invText = $('#inv_text').val();
            plainBox.val(invText);
            break;
        case 'don':
            let donText = $('#don_text').val();
            plainBox.val(donText);
            break;
        case 'enc_art1':
            let enc_art1Text = $('#enc_art1_ci').val();
            cipherBox.val(enc_art1Text);
            break;
        case 'enc_art2':
            let enc_art2Text = $('#enc_art2_ci').val();
            cipherBox.val(enc_art2Text);
            break;
        case 'enc_art3':
            let enc_art3Text = $('#enc_art3_ci').val();
            cipherBox.val(enc_art3Text);
            break;
    }
});

$('#parse_plain').click(function () {
    buildFrequencyArray($('#plain').val());
});

$('#parse_cipher').click(function () {
    buildFrequencyArray($('#cipher').val());
});

function buildFrequencyArray(inputText) {
    const inputArray = inputText.split('');
    let outputArray = {
        'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0,
        'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0,
        's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
    };

    for (let i = 0; i < inputArray.length; i++) {
        let desiredLetter = inputArray[i].toLowerCase();
        if (typeof outputArray[desiredLetter] !== 'undefined') {
            outputArray[desiredLetter]++;
        }
    }

    console.log(outputArray);
    return outputArray;
}