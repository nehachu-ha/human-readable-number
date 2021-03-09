module.exports = function toReadable (number) {
    // const num = {
    //     0: 'zero',
    //     1: 'one',
    //     2: 'two',
    //     3: 'three',
    //     4: 'four',
    //     5: 'five',
    //     6: 'six',
    //     7: 'seven',
    //     8: 'eight',
    //     9: 'nine',
    //     10: 'ten',
    //     11: 'eleven',
    //     12: 'twelve',
    //     13: 'thirteen',
    //     14: 'fourteen',
    //     15: 'fifteen',
    //     16: 'sixteen',
    //     17: 'seventeen',
    //     18: 'eighteen',
    //     19: 'nineteen',
    //     20: 'twenty',
    //     30: 'thirty',
    //     40: 'forty',
    //     50: 'fifty',
    //     60: 'sixty',
    //     70: 'seventy',
    //     80: 'eighty',
    //     90: 'ninety',
    //     100: 'hundred'
    // };
    //
    // let numLength = number.toString().length;
    // let numArr = number.toString().split('');
    //
    // if (numLength === 1) {
    //     return num[number];
    // }
    //
    // if (numLength === 2) {
    //     if (num[number]) {
    //         return num[number];
    //     } else return num[numArr[0] + 0] + ' ' + num[numArr[1]];
    // }
    //
    // if (numLength === 3) {
    //     if (num[number]) {
    //         return 'one ' + num[number];
    //     } else if (numArr[1] === 0 && numArr[2] === 0) {
    //         return num[numArr[0]] + ' hundred';
    //     } else if (numArr[1] === 0){
    //         return num[numArr[0]] + ' hundred ' + num[numArr[2]];
    //     } else return num[numArr[0]] + ' hundred ' + (num[numArr[1] + numArr[2]] || num[numArr[1] + 0] + ' ' + num[numArr[2]]);
    // }

    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number === 0) return "zero";
    if (number < 20) return ones[number];

    if (number < 100)
        return (
            tens[parseInt(number / 10)] + (number % 10 !== 0 ? " " : "") + ones[number % 10]
        );

    let numString = number.toString();

    if (numString[1] === "0" && numString[2] === "0")
        return ones[numString[0]] + " hundred";
    else
        return (
            ones[numString[0]] + " hundred " + toReadable(parseInt(numString[1] + numString[2]))
        );
}
