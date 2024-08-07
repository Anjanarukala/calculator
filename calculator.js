
let btns=document.querySelectorAll('button');
let string="";
let historyArray=[];
function main(input){
   if(input=='='){
      try{
         let result=eval(string);
         string=result.toString();
         historyArray.push(string);
         updateHistory();
      }
      catch{
         string="error";
      }
      document.querySelector('input').value=string;
      
   }
   else if(input=='AC'){
      string="";
      document.querySelector('input').value=string;
   }
   else if(input=='DEL'){
      string=string.slice(0,-1);
      document.querySelector('input').value=string;
   }
   else{
      string=string+input;
      document.querySelector('input').value=string;
      console.log(input)

   }
   
}
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
      if (e.target.id!=='history-btn'){
         main(e.target.innerHTML);
      }
      
    });
   });
document.addEventListener('keydown',(e)=>{
   e.preventDefault();
   if(e.key>='0' && e.key<='9'){
      main(e.key);
   }
   else if(e.key=='+' || e.key=='-' || e.key=='*' || e.key=='/'||e.key=='%'){
      main(e.key);
   }
   else if(e.key==='Enter' ||e.key=='='){
      main('=');
   }
   else if(e.key=='.'){
      main('.');

   }
   else if(e.key==='Backspace'){
      main('DEL');

   }
   else if(e.key=='Escape')
      {
      main('AC');
   }
});

let hisbtn=document.querySelector('#history-btn');
hisbtn.addEventListener('click',()=>{
   toggleHistory();
});
function updateHistory(){
   let historyDiv=document.querySelector('.history');
   historyDiv.innerHTML='';
   historyArray.forEach(entry=>{
      let span=document.createElement('span');
      span.textContent=entry;
      span.classList.add("last");
      historyDiv.appendChild(span);
   
      
   })
}
function toggleHistory(){
   let historyDiv=document.querySelector('.history');
   historyDiv.classList.toggle('show');
}
