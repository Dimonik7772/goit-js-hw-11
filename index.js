import{a as p,S as f,i as m}from"./assets/vendor-SPbJvfmH.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function y(r){return p.get("https://pixabay.com/api/",{params:{key:"54610826-258ca21fce67e24d1b909df87",per_page:21,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const a={galleryList:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader")};function h(r){const i=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:u,downloads:d})=>`<li class="gallery-item">
      <a href="${e}">
      <img src="${n}" alt="${t}"  />
      </a>
       <ul class="description-list">
      <li class="description-item"> likes <p>${s}</p> </li>
      <li class="description-item"> views <p>${c}</p></li>
      <li class="description-item"> comments <p>${u}</p></li>
      <li class="description-item"> downloads <p>${d}</p> </li>
      </ul>
      </li>
      `).join("");a.galleryList.insertAdjacentHTML("beforeend",i),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){a.galleryList.innerHTML=""}function L(){a.loader.classList.remove("hidden")}function b(){a.loader.classList.add("hidden")}const l=r=>{m.error({title:"Error",position:"topRight",message:r})};a.form.addEventListener("submit",S);function S(r){r.preventDefault();const i=r.target.elements["search-text"].value.trim();if(g(),i===""){l("Невалидный ввод");return}L(),y(i).then(o=>{if(o.hits.length===0)return l("Sorry, there are no images matching your search query. Please try again!");h(o.hits)}).catch(o=>{l(`${o}'catch Sorry, there are no images matching your search query. Please try again!`)}).finally(()=>{b()}),r.target.reset()}
//# sourceMappingURL=index.js.map
