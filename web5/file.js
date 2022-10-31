function calc() {
    let width = Number(document.getElementById('width').value);
    let height = Number(document.getElementById('height').value);

    if (!(width <= 0 || height <= 0)) {
        document.getElementById('area').innerHTML = (height * width).toString();
        document.getElementById('perimeter').innerHTML = (2 * (width + height)).toString();
        document.getElementById('diagonal').innerHTML = (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))).toString();
    }
}


// function changeImage(arrayNumber) {
//     let pictures = ['pictures/1.JPG', 'pictures/2.JPG', 'pictures/3.JPG'];
//     let img = document.querySelector("#mainImage");
//     img.setAttribute("src", pictures[arrayNumber]);
// }

function showPicture(path) {
    document.getElementById("big_picture").getElementsByTagName("img").item(0).src = path.src;
}

function pictureGeneration() {
    let photoSrcArray = ['pictures/1.jpg',
        'pictures/2.jpg',
        'pictures/3.jpg',];
    let smallPicturesBlock = document.getElementById("small_pictures");
    for (let photoSrc of photoSrcArray) {
        let img = document.createElement("img");
        img.src = photoSrc;
        img.setAttribute('onclick', "showPicture(this)");
        smallPicturesBlock.appendChild(img);
    }
    let img = document.createElement("img");
    img.src = photoSrcArray[0];
    document.getElementById("big_picture").appendChild(img);
}

function ukrToEng(element) {
    const pairs = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y',
        'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
        'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '\'', 'ю': 'yu',
        'я': 'ya', ' ': ' ', 'Enter': '<br>', '?': '?', '!': '!', '.': '.', ',': ',', '-': '-',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z', 'И': 'Y',
        'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S',
        'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '\'', 'Ю': 'Yu',
        'Я': 'Ya'
    }

    return pairs[element];
}

const transliterate = document.forms.transliterateForm;

transliterate.addEventListener('input', event => {
    let el = document.getElementById('input_ukr').value;
    document.getElementById('output_eng').innerHTML = el.split('').map((char) => ukrToEng(char)).join('');
})

// function transliterate() {
//     const pairs = {
//         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'b', 'ж': 'zh', 'з': 'z', 'и': 'y',
//         'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',
//         'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '\'', 'ю': 'yu',
//         'я': 'ya', ' ': ' ', 'Enter': '<br>', '?': '?', '!': '!', '.': '.', ',': ',', '-': '-',
//     }
//
//     let text = document.querySelector('.i-1').value;
//     let result = "";
//     for (let j = 0; j < text.length; j++) {
//         let letter = text[j];
//         if (pairs[letter] !== undefined) {
//             result += pairs[letter];
//         } else {
//             if (pairs[letter.toLowerCase()]) {
//                 let currentLetter = pairs[letter.toLowerCase()];
//                 result += pairs[letter].toUpperCase();
//                 for (let i = 1; i < currentLetter.length; i++) {
//                     result += currentLetter[i];
//                 }
//             }
//         }
//     }
//     document.querySelector('.out-1').innerHTML = result;
// }
//
// document.querySelector('.i-1').oninput = transliterate;

function calcWeekday() {

    const days = {
        '1': 'Monday', '2': 'Tuesday', '3': 'Wednesday', '4': 'Thursday',
        '5': 'Friday', '6': 'Saturday', '0': 'Sunday'
    }

    const myDate = new Date(document.querySelector('.dateInput').value);
    let day = myDate.getDate();
    let month = myDate.getMonth() + 1;
    let year = myDate.getFullYear();

    let a = Math.floor((14 - month) / 12);
    let y = year - a;
    let m = month + 12 * a - 2;
    let weekday = Math.floor((day + y + Math.floor(y / 4) - Math.floor(y / 100) + y / 400 + Math.floor((31 * m) / 12))) % 7;

    document.querySelector('.weekday-out').innerHTML = days[weekday].toString();
}

