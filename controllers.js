const countNumbersUtils = require("./utils/countNumbers")
const fewStepssUtils = require("./utils/fewSteps")

module.exports.countNumbers = async (req, res) => {
    const start = req.body.start
    const end = req.body.end
    const endSign = end < 0 ? -1 : 1
    const startSign = start < 0 ? -1 : 1

    var data = endSign * countNumbersUtils.count(Math.abs(end)) - startSign * countNumbersUtils.count(Math.abs(start)) + 1


    var startmsd = countNumbersUtils.getDigitLength(start)
    var endmsd = countNumbersUtils.getDigitLength(end)

    startmsd == 5 || endmsd == 5 ? data -= 1 : null

    return res.status(200).json({
        data: data
    })
}

module.exports.alphabetIndex = async (req, res) => {
    const text = req.body.text
    var sum = 0;
    const length = text.length
    for (let i = 0; i < length; i++) {
        let char = text[i]
        sum = sum * 26 + char.charCodeAt(0) - 'A'.charCodeAt(0) + 1
    }
    return res.status(200).json({
        data: sum
    })

}

module.exports.fewSteps = async (req, res) => {
    console.log(req.body)
    var Q = req.body.arr
    const length = Q.length
    for (let i = 0; i < length; i++) {
        let element = Q[i]
        let counter = 0
        while (element != 0) {
            const nextDivision = fewStepssUtils.getNextDivisbleNo(element)
            if (nextDivision == element) {
                element -= 1
            }
            else {
                element = nextDivision
            }
            counter += 1
        }
        Q[i] = counter
    };
    return res.status(200).json({
        data: Q
    })
}
