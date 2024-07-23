let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0= true; //PlayerX or Player0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const resetGame =()=>{
    turn0=true;
    enableBtns();
    msgContainer.classList.add("hide");
    count=0;
}

let count=0;
const draw=()=>{
    msg.innerText="It's a draw. Start a new game!"
    msgContainer.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count+=1;
        if(count==9){
            draw();
        }else{
        if(turn0){
        box.innerText="O";
        turn0=false;
        }else{
        box.innerText="X";
        turn0=true;
        }
        box.disabled=true;

        checkWinner()};
       
    });
    
});

const disableBtns= ()=>{
    for (box of boxes){
        box.disabled=true;
    }
}

const enableBtns= ()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText= `Congratulations, ${winner} is the Winner!`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if (pos1val==pos2val && pos2val==pos3val){
                console.log(`Winner ${pos1val}`);
                showWinner(pos1val);}  
         }
        }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
