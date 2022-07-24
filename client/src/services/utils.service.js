

export const utilService = {
    randomColor,
    convertSecToMin,
    makeId,
    timeStampToStr,
    strTimeToStamp,
    getAverageRGB,
}


function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = {
        r: 0,
        g: 0,
        b: 0
      }, // for non-supporting envs
      canvas = document.createElement('canvas'),
      context = canvas.getContext && canvas.getContext('2d'),
      data, width, height,
      i = -4,
      length,
      rgb = {
        r: 0,
        g: 0,
        b: 0
      },
      count = 0;
  
    if (!context) {
      return defaultRGB;
    }
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    context.drawImage(imgEl, 0, 0);
  
    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */
      alert('x');
      return defaultRGB;
    }
    length = data.data.length;
    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }
    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
  
    console.log('rgb = ', rgb)
    return rgb;
  }
  
//   (async function() {
//     let blob = await fetch(imgEl).then(r => r.blob());
//     let dataUrl = await new Promise(resolve => 
//     {
//       let reader = new FileReader();
//       reader.onload = () => resolve(reader.result);
//       reader.readAsDataURL(blob);
//     });
  
//     // In order to use the data url, we need to create an img and wait for it to load
//     let img = document.createElement('img');
//     document.body.appendChild(img);
//     img.onload = function(e) {
//       var rgb = getAverageRGB(img);
      
//       let rgbText = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
//       document.body.style.backgroundColor = rgbText;
//       document.querySelector("#rgb").innerText = rgbText;
//     }
//     img.src = dataUrl;
  
//   })();


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
    return `${minuts} min ${_padTo2Digits(secondsRemainder)} sec`
}


