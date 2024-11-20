# Front-end Style Guide

## Layout

Designerna var gjorda med dessa två mått i bredd.

- Mobile: 375px
- Desktop: 1440px

## Colors

- Lila (`#A638F6`)
- Mörk lila (`#2D2039`)
- Svart (`#16111A`)

![Se bild på färgerna här =>](./design/colors.png)

## Typography

### Body Copy

- Font size (quote): 28px

### Font

- Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Weights: 800



document.getElementById('getAdviceBtn').addEventListener('click', async () => {
     
         
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            document.getElementById('advice-id').innerText = `ADVICE #${data.slip.id}`;
            document.getElementById('adviceText').innerText = `"${data.slip.advice}"`;
           
            
    
        
});
