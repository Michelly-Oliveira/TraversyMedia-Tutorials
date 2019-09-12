// Only display cards after some input
document.getElementById('output').style.visibility = 'hidden';

let weightOption = 0;

// Get input
var select = document.querySelector('select');
select.addEventListener('change', selectList);
document.getElementById('lbsInput').addEventListener('input', converter);

function selectList(e) {
    let option = e.target.value;

    switch(option) {
        case 'g':
            weightOption = 1;
            break;
        case 'kg':
            weightOption = 2;
            break;
        case 'oz':
            weightOption = 3;
            break;
        case 'lbs':
            weightOption = 4;
            break;
    }
}

function converter(e) {
    let weight = e.target.value;
    document.getElementById('output').style.visibility = 'visible';

    document.getElementById('gramsOutput').style.visibility = 'visible';
    document.getElementById('kgOutput').style.visibility = 'visible';
    document.getElementById('ozOutput').style.visibility = 'visible';
    document.getElementById('lbsOutput').style.visibility = 'visible';

    // Convert grams and show in the card
    if(weightOption === 1) {
        document.getElementById('gramsOutput').style.visibility = 'hidden';
        document.getElementById('kgOutput').innerHTML = (weight/1000);
        document.getElementById('ozOutput').innerHTML = (weight/28.35);
        document.getElementById('lbsOutput').innerHTML = (weight/453.592);
    }
    // Convert kg and show in the card
    else if(weightOption === 2) {
        document.getElementById('gramsOutput').innerHTML = (weight*1000);
        document.getElementById('kgOutput').style.visibility = 'hidden';
        document.getElementById('ozOutput').innerHTML = (weight*35.274);
        document.getElementById('lbsOutput').innerHTML = (weight*2.205);
    }
    // Convert oz and show in the card
    else if(weightOption === 3) {
        document.getElementById('gramsOutput').innerHTML = (weight*28.35);
        document.getElementById('kgOutput').innerHTML = (weight/35.274);
        document.getElementById('ozOutput').style.visibility = 'hidden';
        document.getElementById('lbsOutput').innerHTML = (weight/16);
    }
    // Convert pounds and show in the card
    else if(weightOption === 4) {
        document.getElementById('gramsOutput').innerHTML = (weight/0.0022046);
        document.getElementById('kgOutput').innerHTML = (weight/2.2046);
        document.getElementById('ozOutput').innerHTML = (weight*16);
        document.getElementById('lbsOutput').style.visibility = 'hidden';
    }
}