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
setBasket();
document.querySelector('.basket').onclick = function() {
  if (!showed) {
    document.querySelector('.cart').style.display = 'flex';
    showed = true;
  } else {
    document.querySelector('.cart').style.display = 'none';
    showed = false;
  }
};

document.getElementById('submit').onclick = function() {
  setBasket();
};
document.getElementById('delete').onclick = function() {
  document.getElementById('qty').value = 0;
  setBasket();
};

function setBasket() {
  var qtyprushared = document.getElementById('qty').value;
  var totalprice = qtyprushared * 125;
  totalprice += ' $';
  document.getElementById('itemqty').textContent = qtyprushared;
  document.getElementById('card_total_price').textContent = totalprice;
  if (qtyprushared == 0) {
    document.getElementById('empty').style.display = 'flex';
    document.getElementById('items').style.display = 'none';
  } else {
    document.getElementById('empty').style.display = 'none';
    document.getElementById('items').style.display = 'flex';
  }
}
