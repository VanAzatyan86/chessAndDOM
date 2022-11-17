let myChess=document.querySelector(".chess");
let block;
function createChess() {
    for (let i = 0; i < 8; i++) {
       for (let j = 0; j < 8; j++) {

        block=document.createElement("div");
        myChess.appendChild(block);
        if((i+j)%2==0){
            block.className = "block yellow"
        }else{
            block.className = "block brown"
        }
       }   
    }  
}

createChess()
