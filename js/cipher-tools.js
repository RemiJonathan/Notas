/*************
 * LISTENERS *
 *************/

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

    $('#plainCanvasHolder').slideDown(500);

    removeAllData(plainChart);

    generateDataSet(buildFrequencyArray($('#plain').val()), plainChart);
    updateMixedChart(buildFrequencyArray($('#plain').val()), buildFrequencyArray($('#cipher').val()), $('#slide_factor').val());

});

$('#parse_cipher').click(function () {

    $('#cipherCanvasHolder').slideDown(500);

    removeAllData(cipherChart);

    generateDataSet(buildFrequencyArray($('#cipher').val()), cipherChart);
    updateMixedChart(buildFrequencyArray($('#plain').val()), buildFrequencyArray($('#cipher').val()), $('#slide_factor').val());

    decaeserBy();
});

$('#slide_factor').on('input', function () {
    updateMixedChart(buildFrequencyArray($('#plain').val()), buildFrequencyArray($('#cipher').val()), $('#slide_factor').val());
    decaeserBy();
});


/**
 *
 * @param inputText: String
 * @returns {{a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number, z: number}}
 */
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

    return outputArray;
}

function generateDataSet(inputArray, chart) {
    for (let key in inputArray) {
        addData(chart, key.toUpperCase(), inputArray[key]);
    }

    chart.update();
}

function updateMixedChart(plainChartArray, cipherChartArray, bias) {
    removeAllData(mixedChart);

    console.log(plainChartArray);
    console.log(cipherChartArray);

    for (let key in plainChartArray) {
        addDataMixed(mixedChart, key, 1, plainChartArray[key]);
    }

    cipherChartArray = cycleArray(cipherChartArray, bias);

    for (let key in cipherChartArray) {
        addDataMixed(mixedChart, key.toUpperCase(), 0, cipherChartArray[key]);
    }
    mixedChart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
}

function removeAllData(chart) {
    for (let i = 0; i < 26; i++) {
        removeData(chart);
    }
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
}

function addDataMixed(chart, label, index, data) {
    if (index === 0) chart.data.labels.push(label);
    chart.data.datasets[index].data.push(data);
}

function cycleArray(arr, cycles) {
    for (let i = 0; i < cycles; i++) {
        let obj = {};
        key = Object.keys(arr)[0];
        obj[key] = Object.keys(arr).map(function (k) {
            return arr[k];
        })[0];
        delete arr[key];
        arr[key] = obj[key];
    }
    return arr;
}

function decaeserBy() {
    str = document.getElementById("cipher").value;
    offset = 0 - document.getElementById("slide_factor").value;
    document.getElementById("decipher_output").textContent = str.replace(/[a-z]/gi, c => String.fromCharCode((x = c.charCodeAt(), a = x & 96, x - a + n + 129) % 26 - ~a), n = +offset);
    document.getElementById("changed_letter").textContent = ('A').replace(/[a-z]/gi, c => String.fromCharCode((x = c.charCodeAt(), a = x & 96, x - a + n + 129) % 26 - ~a), n = +offset);
}