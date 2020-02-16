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