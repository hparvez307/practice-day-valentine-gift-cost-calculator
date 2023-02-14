
// function get input value
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const value = parseInt(inputValue);
    return value;
}

// function for get inner text of an element
function getInnerText(id) {
    const innerText = document.getElementById(id).innerText;
    const text = parseInt(innerText);
    return text;
}

// function for set inner text 
function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}


// function for total cost 
function total() {
    const chocolateTotalCost = getInnerText('chocolate');
    const roseTotalCost = getInnerText('rose');
    const diaryTotalCost = getInnerText('diary');
    const totalCost = chocolateTotalCost + roseTotalCost + diaryTotalCost;
    setInnerText('total', totalCost);
    setInnerText('all-total', totalCost);
}

// chocolate total cost calculate
document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const kitkatQuantity = getInputValue('kitkat-quantity');
    const kitkatTotal = getInnerText('chocolate');
    const cost = kitkatQuantity * 200;
    const totalCost = kitkatTotal + cost;
    setInnerText('chocolate', totalCost);
    document.getElementById('kitkat-quantity').value = '';
    total();
})



// rose total cost calculate 
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const roseQuantity = getInputValue('rose-quantity');
    const toalCost = getInnerText('rose');
    const cost = roseQuantity * 100;
    const totalCost = toalCost + cost;
    setInnerText('rose', totalCost);
    document.getElementById('rose-quantity').value = '';
    total();
})


// diary total cost calculate
document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const diaryQuantity = getInputValue('diary-quantity');
    const previousTotalCost = getInnerText('diary');
    const cost = diaryQuantity * 100;
    const totalCost = previousTotalCost + cost;
    setInnerText('diary', totalCost);
    document.getElementById('diary-quantity').value = "";
    total();
})

// clear button handle

document.getElementById('clear').addEventListener('click', function () {
    setInnerText('diary', '00');
    setInnerText('rose', '00');
    setInnerText('chocolate', '00');
    setInnerText('total', '00');
    setInnerText('all-total', "00");
})

// promo code calculator 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = getInputValue("promo-code");
    const promo = parseInt(promoCode);
    if (promo === 101) {
        const total = getInnerText('total');
        const discount = total * 0.1;
        const cost = total - discount;
        setInnerText('all-total', cost);
    }
    else {
        alert('incorrect promo code, please enter a promo code');
    }

})



