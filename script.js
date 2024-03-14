function removeElement(element) {
    element.remove();
}

function choosePet(element) {
    alert(`You are looking for a ${element.value}`);
}

var pettingsNum1 = document.querySelector('#pettings-num-pepper');

function petIncrease1() {
    pettingsNum1.textContent++;
}


var pettingsNum2 = document.querySelector('#pettings-num-bruce');

function petIncrease2(){
    pettingsNum2.textContent++;
}

var pettingsNum3 = document.querySelector('#pettings-num-oscar');

function petIncrease3(){
    pettingsNum3.textContent++;
}