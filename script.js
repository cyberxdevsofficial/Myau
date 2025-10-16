
let KB = null;
let lang = 'en';
function appendMessage(text, from){
  const chatEl=document.getElementById('chat');
  const div=document.createElement('div');
  div.className='msg '+(from==='user'?'user':'bot');
  const bub=document.createElement('div');bub.className='bubble';bub.textContent=text;
  div.appendChild(bub);chatEl.appendChild(div);chatEl.scrollTop=chatEl.scrollHeight;
}
document.getElementById('lang').addEventListener('change',e=>{lang=e.target.value;});
document.getElementById('inputForm').addEventListener('submit',e=>{
  e.preventDefault(); const q=document.getElementById('userInput').value.trim(); if(!q) return;
  appendMessage(q,'user'); appendMessage('Searching...','bot'); setTimeout(()=>{
    const msgs=document.querySelectorAll('.msg.bot .bubble'); const last=msgs[msgs.length-1];
    if(last && last.textContent==='Searching...') last.parentElement.remove();
    appendMessage('This is a demo reply. Knowledge base loaded from knowledge.json in real app.','bot');
  },200);
});
appendMessage('Hello! I am Anuga AI V3 — offline bilingual assistant.','bot');
