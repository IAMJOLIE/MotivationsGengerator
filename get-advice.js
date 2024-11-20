import fetch from "node-fetch";



    async function getAdvice() {
        
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            return(`Advice #${data.slip.id} : ${data.slip.advice}`);
          
    }

 console.log (await getAdvice());

