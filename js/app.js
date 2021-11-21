function memory(extra, price) {
    const extramemory = document.getElementById('memory-charge');
    if (extra == true) {
        extramemory.innerText = price;

    }
    else {
        extramemory.innerText = price;

    }

    calculate()

}


document.getElementById('8GB-memory').addEventListener('click', function () {
    memory(false, 0)

});
document.getElementById('16GB-memory').addEventListener('click', function () {
    memory(true, 180);


});
/* ------------------------------
                      total Calculation
----------------------------------------- */
function calculate() {
    let total = document.getElementById('Total-Price');
    const oldPrice = document.getElementById('sub-total');
    const newPrice = oldPrice.innerText;
    const DeliveryCharge = document.getElementById('delivary-charge');
    const newCharege = DeliveryCharge.innerText;
    const extrastroge = document.getElementById('extra-stroge')
    const newStorge = extrastroge.innerText;
    const extramemory = document.getElementById('memory-charge');
    const newMemory = extramemory.innerText;
    const subtotal = parseInt(newPrice) + parseInt(newCharege) + parseInt(newMemory) + parseInt(newStorge);
    total.innerText = subtotal;
    /* Bonus part */
    let totals = document.getElementById('total');
    totals.innerText = subtotal;
};
/*-----------------------------
                               stroge
--------------------------------------- ---------------- */

function stroge(ssd) {
    let extraStroge = document.getElementById('extra-stroge');
    if (ssd == '1TB') {
        extraStroge.innerText = 180;
    }
    else if (ssd == '512GB') {
        extraStroge.innerText = 100;

    }
    else {
        extraStroge.innerText = 0;
    }
    calculate();
}

document.getElementById('256GB-SSD').addEventListener('click', function () {
    stroge('256GB');
});
document.getElementById('512GB-SSD').addEventListener('click', function () {
    stroge('512GB');
});
document.getElementById('1TB-SSD').addEventListener('click', function () {
    stroge('1TB');
});
/*------------------------------------------
                          Deliver-Cost 
            -------------------------------------------------*/
function delivery(emargancey) {
    let delivaryCharge = document.getElementById('delivary-charge');
    if (emargancey == true) {
        delivaryCharge.innerText = 20;

    }
    else {
        delivaryCharge.innerText = 0;

    }

    calculate()

}

document.getElementById('regular-delivery').addEventListener('click', function () {

    delivery(false);
});
document.getElementById('emergency-delivery').addEventListener('click', function () {

    delivery(true);
});
/* Copne Code */
function copneCode() {
    let copneField = document.getElementById('copne-field');
    let copneValue = copneField.value;
    if (copneValue == 'stevekaku') {
        let previousTotal = document.getElementById('total');
        let discountTotal = previousTotal.innerText;
        let newTotal = parseFloat(discountTotal) - parseFloat(discountTotal) * 0.20;
        copneField.value = '';
        previousTotal.innerText = newTotal;
    }

};

document.getElementById('copne-code').addEventListener('click', function () {
    copneCode();
});