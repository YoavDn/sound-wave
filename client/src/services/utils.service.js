export const utilService = {
    randomColor,
    convertSecToMin,
    makeId,
    timeStampToStr,
    strTimeToStamp

}


function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}


function makeId(length = 9) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function convertSecToMin(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${_padTo2Digits(seconds)}`
}

function _padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}



function strTimeToStamp(strTime) {
    const timeParts = strTime.split(':')
    return (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000)
}

function timeStampToStr(timestamp) {

    const seconds = timestamp / 60000
    const minuts = Math.floor(seconds / 60)
    const secondsRemainder = (seconds % 60);
    console.log(minuts);
    return `${minuts} min ${_padTo2Digits(secondsRemainder)} sec`
}