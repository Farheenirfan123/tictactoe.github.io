let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turn0 = true // playerx , player0

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

]

const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetButton = () => {
    turn0 = true;
    enableBox();
    msgContainer.classList.add('hide');
}

boxes.forEach((box)=>{
    box.addEventListener('click', ()=> {
        if(turn0){
            box.innerText = '0';
            turn0 = false
            box.style.color = 'green'
        } else {
            box.innerText = 'x';
            turn0 = true
            box.style.color = 'white'
        }
        box.disabled = true

        checkwinner();
    })

    
   
    const disabledBox = () => {
        for (box of boxes) {
            box.disabled = true;
        }
    } 

    const showWinner = (winner) => {
        msg.innerText = `Congratualations, winner is ${winner} `;
        msgContainer.classList.remove('hide');
        disabledBox();
    }

    const checkwinner = () => {
        for (let patterns of winPatterns) {
            let pos1val = boxes[patterns[0]].innerText;
            let pos2val = boxes[patterns[1]].innerText;
            let pos3val = boxes[patterns[2]].innerText;

            if(pos1val != '' && pos2val != '' && pos3val != ''){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log('winner', pos1val)
                    showWinner(pos1val)
                }
            }

        }
    }
   
})
resetbtn.addEventListener('click', resetButton);
newgamebtn.addEventListener('click', enableBox)