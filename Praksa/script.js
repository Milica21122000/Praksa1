const boxg=document.querySelector('.g-box');
const boxb=document.querySelector('.b-box');
const boxr=document.querySelector('.r-box');
const boxy=document.querySelector('.y-box');



const getRandomBox=()=>{
    const boxes=[
        boxg,
        boxb,
        boxr,
        boxy
    ];
    return boxes[parseInt(Math.random() * boxes.length)];
};

const sekvence=[getRandomBox()];
let sekvencaToGuess=[...sekvence];


const flash = box =>{
    return new Promise(resolve =>{
        box.className+=' active';
        setTimeout(()=>{
         box.className=box.className.replace(
            ' active',
            ''
            );
            setTimeout(()=>{
            resolve();
            },250);
        },1000);
    });

};

let canClick=false;


const boxClicked = boxClicked =>{
    if (!canClick) return;
    const expectedBox = sekvencaToGuess.shift();
    if(expectedBox===boxClicked){
        if(sekvencaToGuess.length===0){
            sekvence.push(getRandomBox());
            sekvencaToGuess=[...sekvence];
            startFlashing();
            alert('Congradulations!');
            
        }
    } else{
        
        alert('You have lost!');
    }
};


const startFlashing= async() => {
    canClick=false;
    for(const box of sekvence){
        await flash(box);
        }
        canClick=true;
}
startFlashing();

