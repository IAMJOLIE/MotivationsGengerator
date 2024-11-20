

const button = document.getElementById('getAdviceBtn');
button.addEventListener('click', motivationAdvice);


async function motivationAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('advice-id').innerText = `ADVICE #${data.slip.id}`;
    document.getElementById('adviceText').innerText = `"${data.slip.advice}"`;
}


window.onload = function (){
    motivationAdvice();
}
         
   
   
    




