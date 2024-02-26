function calculateTotalAmount(items) {
    return items.reduce((acc, item) => acc + item.value, 0);
}

function findMostExpensiveItemDescription(items) {
    if (items.length === 0) return null;
    let mostExpensiveItem = items[0];
    for (const item of items) {
        if (item.value > mostExpensiveItem.value) {
            mostExpensiveItem = item;
        }
    }
    return mostExpensiveItem.description;
}

function getItemCount(items) {
    return items.length;
}

function bankLevel2(items) {
    return {
        totalAmount: calculateTotalAmount(items),
        mostExpensiveItemDescription: findMostExpensiveItemDescription(items),
        itemCount: getItemCount(items),
    };
}

module.exports = bankLevel2;
