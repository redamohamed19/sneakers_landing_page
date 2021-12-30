import '../css/main.scss';
__webpack_public_path__ = '/some-custom-public-path';

document.getElementById('up').onclick = function() {
  document.getElementById('qty').value++;
};
document.getElementById('down').onclick = function() {
  if (document.getElementById('qty').value > 0) {
    document.getElementById('qty').value--;
  }
};
document.querySelector('.humberger').onclick = function() {
  document.querySelector('.navbar').classList.toggle('open_navbar');
  document.querySelector('.navbar').classList.toggle('close_navbar');
};
