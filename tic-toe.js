
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newgamem_btn = document.querySelector("#newgm_btn");
let msg_container = document.querySelector(".msg_container")
let msg = document.querySelector("#msg")

let turn = true; //playerX, player
const winPatterns = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];
let resetgm =()=>{
    turn = true;
    anbbtnbox();
    msg_container.classList.add("hide")
    

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
        {console.log("button was clicked");
           if(turn)
           {
            box.innerText ="0";
            turn=false;
           }
           else{
            box.innerText ="X";
            turn =true;
           }
           box.disabled=true;
     checkwin();

        })
})
let disbtnbox =  () => {
    for(let box of boxes){
        box.disabled =true;
    }
}
let anbbtnbox =  () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}
let showwinner =(winner)=>{
msg.innerText =`congratulations , winner is ${winner}`;
msg_container.classList.remove("hide");
disbtnbox();
}
let checkwin =()=>{
    for (let pattern of winPatterns){
       
        // console.log(pattern [0], pattern [1], pattern [2]);
        // console.log(
         let pos1Val  =boxes[pattern[0]].innerText;
         let pos2Val  =boxes[pattern[1]].innerText;
         let pos3Val  =boxes[pattern[2]].innerText;
            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos1Val);
                    showwinner(pos1Val);
                }

            }
                
        // )
    }
}
newgamem_btn.addEventListener("click",resetgm);
resetBtn.addEventListener("click",resetgm);