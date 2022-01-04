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
var showed = false;
document.querySelector('.basket').onclick = function() {
  console.log(showed);
  if (!showed) {
    document.querySelector('.cart').style.display = 'flex';
    showed = true;
  } else {
    document.querySelector('.cart').style.display = 'none';
    showed = false;
  }
};
