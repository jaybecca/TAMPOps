"use strict";
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.getElementById("blogGrid"),input=document.getElementById("blogSearch"),button=document.getElementById("blogSearchButton"),clear=document.getElementById("blogClearSearch"),select=document.getElementById("blogCategory"),count=document.getElementById("resultsCount");
 if(!grid)return;
 const cards=[...grid.querySelectorAll(".blog-card")];
 const norm=v=>String(v||"").trim().toLowerCase();
 const cats=[...new Set(cards.map(c=>c.querySelector(".blog-category")?.textContent.trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
 cats.forEach(cat=>{const o=document.createElement("option");o.value=cat;o.textContent=cat;select.appendChild(o)});
 function render(){const q=norm(input?.value),cat=norm(select?.value||"all");let shown=0;cards.forEach(card=>{const category=norm(card.querySelector(".blog-category")?.textContent),text=norm(card.textContent);const ok=(cat==="all"||category===cat)&&(!q||text.includes(q));card.hidden=!ok;if(ok)shown++});if(count)count.textContent=(q||cat!=="all")?`Showing ${shown} of ${cards.length} articles`:`Showing all ${cards.length} articles`;let empty=grid.querySelector(".blog-no-results");if(!shown){if(!empty){empty=document.createElement("div");empty.className="blog-no-results";empty.innerHTML='<h3>No articles found</h3><p>Try another search term or choose a different topic.</p>';grid.appendChild(empty)}}else if(empty)empty.remove();if(clear)clear.hidden=!q}
 button?.addEventListener("click",e=>{e.preventDefault();render()});input?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();render()}});select?.addEventListener("change",render);clear?.addEventListener("click",()=>{input.value="";render();input.focus()});render();
});
