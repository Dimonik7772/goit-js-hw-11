import{a as u,S as p,i as d}from"./assets/vendor-SPbJvfmH.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(r){return u.get("https://pixabay.com/api/",{params:{key:"54610826-258ca21fce67e24d1b909df87",per_page:21,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const a={galleryList:document.querySelector(".gallery"),form:document.querySelector(".form"),span:document.querySelector(".loader")};function m(r){return r.map(({webformatURL:i,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:c})=>`<li class="gallery-item">
      <a href="${o}">
      <img src="${i}" alt="${n}"  />
      </a>
       <ul class="description-list">
      <li class="description-item"> likes <p>${e}</p> </li>
      <li class="description-item"> views <p>${t}</p></li>
      <li class="description-item"> comments <p>${s}</p></li>
      <li class="description-item"> downloads <p>${c}</p> </li>
      </ul>
      </li>
      `).join("")}const y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(){a.galleryList.innerHTML=""}function g(){a.span.classList.remove("hidden")}function L(){a.span.classList.add("hidden")}const l=r=>{d.error({title:"Error",position:"topRight",message:r})};a.form.addEventListener("submit",b);function b(r){r.preventDefault();const i=r.target.elements["search-text"].value.trim();if(h(),i===""){l("Невалидный ввод");return}g(),f(i).then(o=>{if(o.hits.length===0)return l("Sorry, there are no images matching your search query. Please try again!");a.galleryList.insertAdjacentHTML("beforeend",m(o.hits)),y.refresh()}).catch(o=>l("Sorry, there are no images matching your search query. Please try again!")).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
