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
