module.exports.getNextDivisbleNo = (n) => {
    var smallestMax = n

    for (let i = 1; i * i <= n; i++)
        if (n % i == 0)
            smallestMax = Math.min(smallestMax, parseInt(n / i));

    return smallestMax;
}