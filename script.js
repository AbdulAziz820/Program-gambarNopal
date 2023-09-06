const tampilBesar = document.querySelector('.tampil-gambar img');
const container = document.querySelector('.container');
const thumbGambar = document.querySelectorAll('.thumbs img');

container.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        tampilBesar.src = e.target.src;
    };

    tampilBesar.classList.add('fade');

    setTimeout(function () {
        tampilBesar.classList.remove('fade');
    }, 700);

    thumbGambar.forEach(function (th) {
        th.className = 'thumb'
    });

    e.target.classList.add('active');
});