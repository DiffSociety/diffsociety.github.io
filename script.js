
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll("[data-copy-target]").forEach(button=>{
 button.addEventListener("click",async()=>{
  const target=document.getElementById(button.dataset.copyTarget);
  const status=document.getElementById(button.dataset.copyStatus);
  if(!target)return;
  try{
   await navigator.clipboard.writeText(target.textContent);
   button.textContent="Copied!";
   if(status)status.textContent="BBCode copied to your clipboard. You can now paste it into osu!.";
   setTimeout(()=>{button.textContent="Copy BBCode";},1800);
  }catch(e){
   const range=document.createRange();range.selectNodeContents(target);
   const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
   if(status)status.textContent="Your browser blocked automatic copying. The code is selected; press Ctrl+C to copy it.";
  }
 });
});
