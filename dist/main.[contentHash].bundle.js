(()=>{"use strict";var e={546:(e,t,n)=>{e.exports=n.p+"520cc50bd13955f55cb2.jpg"},873:(e,t,n)=>{e.exports=n.p+"c8bb0aaccecdebb16596.jpg"},146:(e,t,n)=>{e.exports=n.p+"af5c71ba9ffcc0b8b54d.jpg"},138:(e,t,n)=>{e.exports=n.p+"9962862ef3eff6d65e5b.jpg"}},t={};function n(c){var o=t[c];if(void 0!==o)return o.exports;var l=t[c]={exports:{}};return e[c](l,l.exports,n),l.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(){var e=document.getElementById("qty").value,t=125*e;t+=" $",document.getElementById("item_in_basket").textContent=e,document.getElementById("itemqty").textContent=e,document.getElementById("card_total_price").textContent=t,0==e?(document.getElementById("item_in_basket").style.display="none",document.getElementById("empty").style.display="flex",document.getElementById("items").style.display="none"):(document.getElementById("item_in_basket").style.display="block",document.getElementById("empty").style.display="none",document.getElementById("items").style.display="flex")}var t=n(546),c=n(873),o=n(146),l=n(138);n.p="/some-custom-public-path",function(){document.getElementById("up").onclick=function(){document.getElementById("qty").value++},document.getElementById("down").onclick=function(){document.getElementById("qty").value>0&&document.getElementById("qty").value--},document.querySelector(".humberger").onclick=function(){document.querySelector(".navbar").classList.toggle("open_navbar"),document.querySelector(".navbar").classList.toggle("close_navbar")};var t=!1;e(),document.querySelector(".basket").onclick=function(){t?(document.querySelector(".cart").style.display="none",t=!1):(document.querySelector(".cart").style.display="flex",t=!0)},document.getElementById("submit").onclick=function(){e()},document.getElementById("delete").onclick=function(){document.getElementById("qty").value=0,e()}}(),document.getElementById("img1").onclick=function(){document.getElementById("center").style.display="flex",document.getElementById("container").style.opacity="0.2"},document.getElementById("close").onclick=function(){document.getElementById("center").style.display="none",document.getElementById("container").style.opacity="1"};var m=[t,c,o,l],d=0;document.getElementById("full_screen").src=m[d],document.getElementById("more").onclick=function(){console.log(d),d++,d%=m.length,document.getElementById("full_screen").src=m[d]},document.getElementById("less").onclick=function(){console.log(d),--d<0&&(d=3),document.getElementById("full_screen").src=m[d]},document.getElementById("thumbnail3").onclick=function(){d=+document.getElementById("thumbnail3").getAttribute("index"),document.getElementById("full_screen").src=m[d]},document.getElementById("thumbnail2").onclick=function(){d=+document.getElementById("thumbnail2").getAttribute("index"),document.getElementById("full_screen").src=m[d]},document.getElementById("thumbnail1").onclick=function(){d=+document.getElementById("thumbnail1").getAttribute("index"),document.getElementById("full_screen").src=m[d]},document.getElementById("thumbnail4").onclick=function(){d=+document.getElementById("thumbnail4").getAttribute("index"),document.getElementById("full_screen").src=m[d]};var u=[t,c,o,l],i=0;document.getElementById("img1").src=u[i],document.getElementById("res_less").onclick=function(){console.log(i),--i<0&&(i=3),document.getElementById("img1").src=u[i]},document.getElementById("res_more").onclick=function(){console.log(i),i++,i%=u.length,document.getElementById("img1").src=u[i]}})()})();