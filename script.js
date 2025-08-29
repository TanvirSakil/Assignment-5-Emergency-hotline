// heart counter------------
let count = 0;
const len = document.querySelectorAll('.heartBtn').length;
for (let i = 0; i < len; i++) {

  document.querySelectorAll('.heartBtn')[i].addEventListener('click', function () {

    count++;

    document.getElementById('heartCounter').innerText = count;


  })
}


