(()=>{var e={735:()=>{const e=["gif","jpg","jpeg","png"],t=document.querySelector("#avatar"),o=document.querySelector(".ad-form-header__preview img"),r=document.querySelector("#images"),n=document.querySelector(".ad-form__photo");t.addEventListener("change",(()=>{const r=t.files[0],n=r.name.toLowerCase();if(e.some((e=>n.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{o.src=e.result})),e.readAsDataURL(r)}})),r.addEventListener("change",(()=>{n.textContent="";const t=document.querySelector(".ad-form-header__preview img").cloneNode(),o=r.files[0],a=o.name.toLowerCase();if(e.some((e=>a.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{t.src=e.result,n.appendChild(t)})),e.readAsDataURL(o)}}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}(()=>{"use strict";const e="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",t='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',r={lat:35.6895,lng:139.69171},n=[52,52],a=[26,52],c=[40,40],l=[20,40],u=document.querySelector("main"),s=document.querySelector("#error").content.querySelector(".error"),i=document.querySelector("#success").content.querySelector(".success"),d=e=>{const t="error"===e?s.cloneNode(!0):i.cloneNode(!0);u.append(t);const o=e=>{"Escape"===e.key&&r(t)},r=e=>{document.removeEventListener("keydown",o),e.remove(),e=null},n=e=>{e.addEventListener("click",(()=>{r(e)}))};document.addEventListener("keydown",o);const a=t.querySelector(".error__button");a&&n(a),n(t)},p=(e,t="GET",o=null)=>fetch(e,{method:t,body:o?new FormData(o):null}).then((e=>{if(e.ok)return e.json();throw new Error(`${e.status} ${e.statusText}`)})),m=document.querySelector("#address"),f=document.querySelector(".ad-form"),y=()=>{f.reset()},v={palace:1e4,flat:1e3,house:5e3,bungalow:0},h={1:["none","none","block","none"],2:["none","block","block","none"],3:["block","block","block","none"],100:["none","none","none","block"],DEFAULT:[]},_=document.querySelector("#title"),S=document.querySelector("#type"),g=document.querySelector("#price"),q=document.querySelectorAll("#capacity option"),w=document.querySelector("#room_number"),b=document.querySelector("#timein"),E=document.querySelector("#timeout"),k=document.querySelector("#capacity"),x=document.querySelector(".ad-form__reset"),C=(e,t)=>{k.value=t,"100"===t&&(k.value="0"),e.forEach(((e,o)=>{e.style.display=h[t][o]}))},T=(e=1)=>{C(q,e),g.placeholder=v.flat},A=document.querySelector(".ad-form"),V=document.querySelector(".map__filters"),F=document.querySelectorAll("select"),$=document.querySelectorAll("#housing-features"),D=[F,document.querySelectorAll("input"),document.querySelector("textarea"),document.querySelectorAll("button"),$],N={wifi:"popup__feature--wifi",dishwasher:"popup__feature--dishwasher",parking:"popup__feature--parking",washer:"popup__feature--washer",elevator:"popup__feature--elevator",conditioner:"popup__feature--conditioner"},I=document.querySelector("#card").content.querySelector(".popup"),U={palace:"Дворец",flat:"Квартира",house:"Дом",bungalow:"Бунгало",DEFAULT:"Не установлено"};let j,P,R=null;const z=()=>{R.eachLayer((e=>{e.removable&&R.removeLayer(e)})),R.setView(r,9.4),L.tileLayer(e,{attribution:t}).addTo(R),R.eachLayer((e=>{e.mainPin&&R.removeLayer(e)})),M()},M=()=>{P=L.icon({iconUrl:"img/main-pin.svg",iconSize:n,iconAnchor:a}),j=L.marker(r,{draggable:!0,icon:P}),j.mainPin=!0,j.addTo(R),j.on("moveend",(e=>{var t,o;t=(o=e.target.getLatLng()).lat.toFixed(5)+", "+o.lng.toFixed(5),m.value=t}))},G=e=>{var t;t=e,R.eachLayer((e=>{e.removable&&R.removeLayer(e)})),t.forEach((e=>{const t=L.icon({iconUrl:"img/pin.svg",iconSize:c,iconAnchor:l}),o=L.marker({lat:e.location.lat,lng:e.location.lng},{icon:t});o.removable=!0,o.addTo(R).bindPopup((e=>{const t=I.cloneNode(!0);var o,r,n;return t.querySelector(".popup__title").textContent=e.offer.title,t.querySelector(".popup__text--address").textContent=e.offer.address,t.querySelector(".popup__text--price").textContent=`${e.offer.price}₽/ночь`,t.querySelector(".popup__type").textContent=U[e.offer.type],t.querySelector(".popup__text--capacity").textContent=`${e.offer.rooms} комнаты для ${e.offer.guests} гостей`,t.querySelector(".popup__text--time").textContent=`Заезд после ${e.offer.checkin}, выезд до ${e.offer.checkout}`,o=t.querySelector(".popup__features"),r=e.offer.features,o.innerHTML=" ",r[0]?r.forEach((e=>{const t=document.createElement("li");t.classList.add("popup__feature"),t.classList.add(N[e]),o.append(t)})):o.remove(),n=t.querySelector(".popup__features"),e.offer.features||n.remove(),t.querySelector(".popup__description").textContent=e.offer.description,((e,t)=>{const o=e.querySelector(".popup__photo");t.forEach((t=>{const r=o.cloneNode();r.src=t,e.append(r)})),o.remove()})(t.querySelector(".popup__photos"),e.offer.photos),t.querySelector(".popup__avatar").src=e.author.avatar,t})(e),{keepInView:!0})}))},O=document.querySelector("#housing-type"),W=document.querySelector("#housing-price"),H=document.querySelector("#housing-rooms"),B=document.querySelector("#housing-guests"),J=document.querySelector("#housing-features"),K=document.querySelector(".map__filters"),Q={any:()=>!0,low:e=>e.offer.price<1e4,middle:e=>e.offer.price<5e4&&e.offer.price>1e4,high:e=>e.offer.price>5e4};let X=null;const Y=()=>{O.value="any",W.value="any",H.value="any",B.value="any",J.querySelectorAll("input").forEach((e=>{e.checked=!1})),X()};o(735);const Z=()=>{[Y,z,y,T].forEach((e=>e()))};A.classList.add("ad-form--disabled"),V.classList.add("map__filters--disabled"),D.forEach((e=>{e.disabled=!0})),p("https://22.javascript.pages.academy/keksobooking/data","GET").then((o=>{R=L.map("map-canvas").on("load",(()=>{A.classList.remove("ad-form--disabled"),V.classList.remove("map__filters--disabled"),D.forEach((e=>{e.disabled=!1}))})).setView(r,9.4),L.tileLayer(e,{attribution:t}).addTo(R),M(),(e=>{f.addEventListener("submit",(t=>{t.preventDefault(),p("https://22.javascript.pages.academy/keksobooking","POST",t.target).then((()=>{d("success"),e()})).catch((()=>{d("error")}))}))})(Z),((e,t)=>{const o=e=>"any"===O.value||e.offer.type===O.value,r=e=>(0,Q[W.value])(e),n=e=>"any"===H.value||e.offer.rooms===Number(H.value),a=e=>"any"===B.value||e.offer.guests===Number(B.value),c=e=>[...J.querySelectorAll("input:checked")].every((t=>e.offer.features.includes(t.value))),l=((e,t,o)=>{let r;return function(){clearTimeout(r),r=setTimeout((()=>{r=null,e.apply(null)}),500)}})((()=>{const l=[o,r,n,a,c].reduce(((e,t)=>e.filter(t)),t).slice(0,10);e(l)}));X=l,K.addEventListener("change",l),e(t)})(G,o)})).catch((()=>{(e=>{const t=document.createElement("div");t.classList.add(".custom__error_message"),t.textContent="Ошибка получения данных",document.body.append(t),setTimeout((()=>{t.remove()}),3e3)})()})),_.addEventListener("invalid",(()=>{_.validity.valueMissing?_.setCustomValidity("Обязательное поле"):_.setCustomValidity("")})),_.addEventListener("input",(()=>{const e=_.value.length;e<30?_.setCustomValidity("Ещё "+(30-e)+" симв."):e>100?_.setCustomValidity("Удалите лишние "+(e-100)+" симв."):_.setCustomValidity(""),_.reportValidity()})),S.addEventListener("change",(e=>{g.placeholder=v[e.target.value]})),g.addEventListener("input",(()=>{const e=g.value,t=v[S.value];var o;g.min=t,e<t?(o=t,g.setCustomValidity(`Минимальная цена ${o}`)):g.setCustomValidity(""),g.reportValidity()})),b.addEventListener("change",(()=>{E.selectedIndex=b.selectedIndex})),E.addEventListener("change",(()=>{b.selectedIndex=E.selectedIndex})),w.addEventListener("input",(e=>{C(q,e.target.value)})),g.placeholder=v.flat,T(),x.addEventListener("click",(e=>{e.preventDefault(),T()}))})()})();
//# sourceMappingURL=main.bundle.js.map