function calculateTotal(values) {
    return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function bankLevel1(values) {
    let totalWallet = calculateTotal(values);
    return totalWallet;
}

module.exports = bankLevel1;