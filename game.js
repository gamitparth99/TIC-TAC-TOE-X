let board=[];
let currentPlayer="X";

let score={
X:0,
O:0
};

const boardDiv=document.getElementById("board");
const status=document.getElementById("status");

function startGame(){

document.getElementById("nameX").innerText=
document.getElementById("playerX").value || "Player X";

document.getElementById("nameO").innerText=
document.getElementById("playerO").value || "Player O";

createBoard();
}

function createBoard(){

boardDiv.innerHTML="";
board=[];

for(let i=0;i<9;i++){

board[i]="";

let cell=document.createElement("div");
cell.classList.add("cell");

cell.dataset.index=i;

cell.onclick=()=>move(cell);

boardDiv.appendChild(cell);
}

status.innerText="Player X Turn";
}

function move(cell){

let i=cell.dataset.index;

if(board[i]!="") return;

board[i]=currentPlayer;

cell.innerText=currentPlayer;

checkWin();

currentPlayer=currentPlayer==="X"?"O":"X";

status.innerText="Player "+currentPlayer+" Turn";
}

function checkWin(){

fetch("checkWin.php",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({board:board})

})

.then(r=>r.json())
.then(data=>{

if(data.winner){

score[data.winner]+=3;

document.getElementById("score"+data.winner)
.innerText=score[data.winner];

winParticles();

setTimeout(()=>{

alert(data.winner+" Wins");

createBoard();

},300);

}

});
}