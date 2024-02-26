class bankLevel3 {
    // seu código aqui

    constructor(name, initialAmount, locale) {
        this.name = name;
        this.balance = initialAmount;
        this.locale = locale;
    }

    addMoney(amount) {
        this.balance += amount;
    }

    removeMoney(amount) {
        this.balance -= amount;
    }

    getMoney() {
        return this.balance;
    }

    getWelcome() {
        return `Olá ${this.name} seu saldo atual é de R$ ${ this.formatNumber() }`
    }

    formatNumber() {
        return this.balance.toLocaleString(this.locale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

}
module.exports = bankLevel3;