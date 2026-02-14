import{a as d,S as p,i as f}from"./assets/vendor-SPbJvfmH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(r){return d.get("https://pixabay.com/api/",{params:{key:"54610826-258ca21fce67e24d1b909df87",per_page:21,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data)}const a={galleryList:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader")};function y(r){const o=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
      <a href="${n}">
      <img src="${i}" alt="${e}"  />
      </a>
       <ul class="description-list">
      <li class="description-item"> likes <p>${t}</p> </li>
      <li class="description-item"> views <p>${s}</p></li>
      <li class="description-item"> comments <p>${c}</p></li>
      <li class="description-item"> downloads <p>${u}</p> </li>
      </ul>
      </li>
      `).join("");g(),a.galleryList.insertAdjacentHTML("beforeend",o),h.refresh()}let h=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(){a.galleryList.innerHTML=""}function L(){a.loader.classList.remove("hidden")}function b(){a.loader.classList.add("hidden")}const l=r=>{f.error({title:"Error",position:"topRight",message:r})};a.form.addEventListener("submit",S);function S(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(o===""){l("Невалидный ввод");return}L(),m(o).then(i=>{if(i.hits.length===0)return l("Sorry, there are no images matching your search query. Please try again!");y(i.hits)}).catch(i=>{l(`${i}'catch Sorry, there are no images matching your search query. Please try again!`)}).finally(()=>{b()}),r.target.reset()}
//# sourceMappingURL=index.js.map
