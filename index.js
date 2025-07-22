import{a as g,S as L,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/",v="51422808-09cfa7462dc66736a72b15f6d",u=async(s,t=1)=>{const o=await g(b,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return{hits:o.data.hits,totalHits:o.data.totalHits}},i={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-more-btn")},w=new L(".gallery-item a",{captionsData:"alt",captionDelay:250}),h=s=>{const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:c,comments:y,downloads:f})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-img"
                src="${o}"
                alt="${e}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${r}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${c}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${y}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${f}</p>
            </li>
        </ul>
    </li>
        `).join("");i.gallery.insertAdjacentHTML("beforeend",t),w.refresh()},q=()=>{i.gallery.innerHTML=""},p=()=>{i.loader.classList.remove("hidden")},m=()=>{i.loader.classList.add("hidden")},S=()=>{i.loadBtn.classList.remove("hidden")},x=()=>{i.loadBtn.classList.add("hidden")};let d="",n=1;i.form.addEventListener("submit",async s=>{if(s.preventDefault(),q(),d=i.input.value.trim(),n=1,!d)return l.error({message:"Please enter a search query!",position:"topRight"});p();try{const{hits:t,totalHits:o}=await u(d,n);if(t.length===0)return l.error({message:`Sorry, there are no images matching your search ${d}. Please try again!`,position:"topRight"});h(t);const a=Math.ceil(o/15);n>=a?l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):S()}catch(t){l.error({title:t.message})}finally{m()}i.form.reset()});i.loadBtn.addEventListener("click",async()=>{n+=1,p();try{const{hits:s,totalHits:t}=await u(d,n);h(s),setTimeout(()=>{const a=document.querySelector(".gallery-item"),e=(a==null?void 0:a.getBoundingClientRect().height)||0;window.scrollBy({top:e*2,behavior:"smooth"})},300);const o=Math.ceil(t/15);n>o&&(x(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){l.error({title:s.message})}finally{m()}});
//# sourceMappingURL=index.js.map
