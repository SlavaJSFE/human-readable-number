module.exports = function toReadable (number) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',]
    let arrTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',]
    if (number >= 0 && number < 21) {
        return numArr[number];
    } else if (number >= 21 && number < 100) {
        let num = number.toString().split('');
        if (number % 10 == 0) {
            return `${arrTen[num[0]]}`;
        } else {
            return `${arrTen[num[0]]} ${numArr[num[1]]}`;
        }        
    } else {
        let num = number.toString().split('');
        if (number % 100 == 0) {
            return `${numArr[num[0]]} hundred`;
        } else if (number % 10 == 0) {
            return `${numArr[num[0]]} hundred ${arrTen[num[1]]}`;
        } else {
            if (num[1] == 0) {
                return `${numArr[num[0]]} hundred ${numArr[num[2]]}`;
            } else if (num[1] == 1) {
                return `${numArr[num[0]]} hundred ${numArr[`${num[1]}${num[2]}`]}`;
            } else {
                return `${numArr[num[0]]} hundred ${arrTen[num[1]]} ${numArr[num[2]]}`;
            }            
        }
    }
}
