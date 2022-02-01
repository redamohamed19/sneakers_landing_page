import '../css/main.scss';
import basket from './basket';

__webpack_public_path__ = '/some-custom-public-path';

basket();
document.getElementById('img1').onclick = function() {
  document.getElementById('center').style.display = 'flex';
  document.getElementById('container').style.opacity = '0.2';
};

document.getElementById('close').onclick = function() {
  document.getElementById('center').style.display = 'none';
  document.getElementById('container').style.opacity = '1';
};

var imgs = [
  '520cc50bd13955f55cb2.jpg',
  'c8bb0aaccecdebb16596.jpg',
  'af5c71ba9ffcc0b8b54d.jpg',
  '9962862ef3eff6d65e5b.jpg'
];
var state = 0;
//document.getElementById('full_screen').src = imgs[state];

document.getElementById('more').onclick = function() {
  state++;
  state = state % imgs.length;
  document.getElementById('full_screen').src = imgs[state];
};
document.getElementById('less').onclick = function() {
  console.log(state);
  state--;
  state < 0 ? (state = 3) : state;

  document.getElementById('full_screen').src = imgs[state];
};
