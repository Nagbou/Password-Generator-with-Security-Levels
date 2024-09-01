// disabled input
var input = document.getElementById('pwd_input');
input.disabled = true;
//

function showHide() {
    if (input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
}

function getRandomLetter() {
    var randomCharCode = Math.floor(Math.random() * 26) + 97; // ASCII code for 'a' is 97
    var randomLetter = String.fromCharCode(randomCharCode);
    return randomLetter;
}

function getRandomChar() {
    var randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt === 1) {
        var randomCharCode = Math.floor(Math.random() * 10) + 48;
    } else {
        var randomCharCode = Math.floor(Math.random() * 26) + 97; // ASCII code for 'a' is 97
    }
    var randomChar = String.fromCharCode(randomCharCode);
    return randomChar;
}

function getRandomSymb() {
    var randomInt = Math.floor(Math.random() * 3) + 1;
    if (randomInt === 1) {
        var randomCharCode = Math.floor(Math.random() * 30) + 33;
    } else {
        var randomCharCode = Math.floor(Math.random() * 26) + 97; // ASCII code for 'a' is 97
    }
    var randomChar = String.fromCharCode(randomCharCode);
    return randomChar;
}

var pwdInput = document.getElementById('pwd_input')
function weakPwd() {
    var loadingBox = document.getElementById('loading_box');
    var pourcentage = Math.floor(Math.random() * (32 - 5 + 1)) + 5;
    loadingBox.classList.add('loading_box_white');
    loadingBox.style.width = pourcentage + '%';
    count = 0;
    function updateCount() {
        count++;
        counter.textContent = count + '%';
        if (count < pourcentage) {
            setTimeout(updateCount, 30); // Update count every 50 milliseconds
        }
    }
    updateCount();
    input.type = "password"
    pwdInput.value = ""
    i = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
    for (var k = 0; k < i; k++) {
        pwdInput.value += getRandomLetter();
    }
}

function medPwd() {
    var pourcentage = Math.floor(Math.random() * (63 - 34 + 1)) + 34;
    var loadingBox = document.getElementById('loading_box');
    loadingBox.classList.add('loading_box_white')
    loadingBox.style.width = pourcentage + '%';
    count = 0;
    function updateCount() {
        count++;
        counter.textContent = count + '%';
        if (count < pourcentage) {
            setTimeout(updateCount, 30); // Update count every 50 milliseconds
        }
    }
    updateCount();
    input.type = "password"
    pwdInput.value = ""
    i = Math.floor(Math.random() * (13 - 9 + 1)) + 9;
    for (var k = 0; k < i; k++) {
        pwdInput.value += getRandomChar();
    }
}

function strongPwd() {
    var pourcentage = Math.floor(Math.random() * (87 - 67 + 1)) + 67;
    var loadingBox = document.getElementById('loading_box');
    loadingBox.classList.add('loading_box_white')
    loadingBox.style.width = pourcentage + '%';
    count = 0;
    function updateCount() {
        count++;
        counter.textContent = count + '%';
        if (count < pourcentage) {
            setTimeout(updateCount, 30); // Update count every 50 milliseconds
        }
    }
    updateCount();
    input.type = "password"
    pwdInput.value = ""
    i = Math.floor(Math.random() * (19 - 9 + 1)) + 9;
    for (var k = 0; k < i; k++) {
        pwdInput.value += getRandomSymb();
    }
}

function copy() {
    pwdInput = document.getElementById('pwd_input');
    pwdInputValue = pwdInput.value;
    if (pwdInputValue === "") {
        alert("Generate a password first")
    } else {
        navigator.clipboard.writeText(pwdInputValue);
        var copyIcon = document.querySelector(".fa-copy")
        console.log(copyIcon);
        copyIcon.classList.remove("fa-copy")
        copyIcon.classList.add("fa-solid");
        copyIcon.classList.add("fa-clipboard-check");
        var durationInSeconds = 0.2; // Duration in seconds
        var durationInMilliseconds = durationInSeconds * 1000; // Convert to milliseconds
        setTimeout(function () {
            copyIcon.classList.remove("fa-solid");
            copyIcon.classList.remove("fa-clipboard-check");
            copyIcon.classList.add("fa-copy")
        }, durationInMilliseconds);
    }
}
// loading animation
const counter = document.querySelector('.pourcentage');
let count = 0;
//