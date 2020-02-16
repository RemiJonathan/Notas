$('.btn-info').click(function () {
    let elementID = $(this).attr('id');
    const plainBox = $('#plain');

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
            break;
        case 'enc_art2':
            break;
        case 'enc_art3':
            break;
    }
});