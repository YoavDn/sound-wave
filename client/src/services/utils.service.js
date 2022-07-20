
var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

function convertSecToMin(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${_padTo2Digits(seconds)}`
    }

function _padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}

export const utilService = {
    randomColor,
    convertSecToMin,
}