// heart counter------------
let count = 0;
const len = document.querySelectorAll('.heartBtn').length;
for (let i = 0; i < len; i++) {

  document.querySelectorAll('.heartBtn')[i].addEventListener('click', function () {

    count++;

    document.getElementById('heartCounter').innerText = count;


  })
}


// call button function-----

let coins = 100;
const coinTotal = document.getElementById('coinCount');


const buttons = document.getElementsByClassName('callBtn');


for (const button of buttons) {
  button.addEventListener('click', function () {

    const card = this.closest('.card');
    const serviceName = card.getElementsByClassName('serviceTitle')[0].innerText;
    const serviceNum = card.getElementsByClassName('serviceNumber')[0].innerText;


    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }


    coins -= 20;
    coinTotal.innerText = coins;


    alert(' 📞Calling ' + serviceName + " at " + serviceNum);

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById('callHistory');
    const newAdd = document.createElement('div');
    const newAdd2 = document.createElement('div');
    const newAdd3 = document.createElement('div');

    newAdd.className = 'flex justify-between items-center  p-3'
    newAdd2.className = 'mx-3 mt-4 '



    newAdd2.innerHTML = ` <strong>${serviceName}</strong><br>
          Number: ${serviceNum}`;

    newAdd3.innerHTML = ` ${time}`;

    callHistory.appendChild(newAdd);
    newAdd.appendChild(newAdd2);
    newAdd.appendChild(newAdd3);




  });
}
clearHistoryBtn.addEventListener("click", function () {
  callHistory.innerHTML = ""; // remove all history
});


// -----copy button function

let copyCount = 0;
const copyButtons = document.getElementsByClassName('copyBtn');

for (const copyButton of copyButtons) {
  copyButton.addEventListener('click', function () {

    const card = this.closest('.card');

    const serviceNum = card.getElementsByClassName('serviceNumber')[0].innerText;
    alert('Number copied: ' + serviceNum);

    navigator.clipboard.writeText(serviceNum);

    copyCount++;
    document.getElementById('copyCounter').innerText = copyCount;


  })

}

