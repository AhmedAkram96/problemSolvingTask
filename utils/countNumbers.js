
module.exports.getDigitLength = (n) => {
    var po = 1;
    while (parseInt(Math.abs(n) / po) > 9)
        po = po * 10;

    return parseInt(Math.abs(n) / po);
}

module.exports.count = (n) => {

    if (n < 5)
        return n;
    if (n >= 5 && n < 10)
        return n - 1;
    var po = 1;
    while (parseInt(n / po) > 9)
        po = po * 10;
    var msd = parseInt(n / po);

    if (msd != 5)
        return this.count(msd) * this.count(po - 1) + this.count(msd) + this.count(n % po);
    else
        return this.count(msd * po - 1);
}

