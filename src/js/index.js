import '../css/main.scss';
import basket from './basket';
import img from '../imgs/image-product-1.jpg';
import img2 from '../imgs/image-product-2.jpg';
import img3 from '../imgs/image-product-3.jpg';
import img4 from '../imgs/image-product-4.jpg';

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

var imgs = [img, img2, img3, img4];
var state = 0;
document.getElementById('full_screen').src = imgs[state];

document.getElementById('more').onclick = function() {
  console.log(state);
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

document.getElementById('thumbnail3').onclick = function() {
  state = +document.getElementById('thumbnail3').getAttribute('index');
  document.getElementById('full_screen').src = imgs[state];
};
document.getElementById('thumbnail2').onclick = function() {
  state = +document.getElementById('thumbnail2').getAttribute('index');
  document.getElementById('full_screen').src = imgs[state];
};
document.getElementById('thumbnail1').onclick = function() {
  state = +document.getElementById('thumbnail1').getAttribute('index');
  document.getElementById('full_screen').src = imgs[state];
};
document.getElementById('thumbnail4').onclick = function() {
  state = +document.getElementById('thumbnail4').getAttribute('index');
  document.getElementById('full_screen').src = imgs[state];
};
