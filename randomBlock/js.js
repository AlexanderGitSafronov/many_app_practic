
function sqere(amount){
    let rand = 50 + Math.floor(Math.random() * 100) ;
    console.log(rand);
    let str = `<div style="width:${rand}px; height:${rand}px;background-color:#000; border-radius:50%;display:inline-block;"></div>`
    console.log(str)
    for(let j=0;j<amount;j++){
        document.write(str);
    }
   
}

sqere(200)