let turn = 'o'

let xMoves = [];
let oMoves = [];
const blocks = [1,2,3,4,5,6,7,8,9]

const handleClick = (num) => {
    const element = document.getElementById(`block-${num}`)
    turn = turn === "x" ? "o" : "x";
    if(turn === "x"){
        xMoves.push(Number(num))
    }else{
        oMoves.push(Number(num))
    }
    element.innerHTML = turn;

    if(isWinner()){
        alert(`${turn} wins`)

        setTimeout(()=>{
            reset();
        },10000)
    }
}

const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

const reset = () => {
    blocks.forEach((e)=> {
        const element = document.getElementById(`block-${e}`)
        element.innerHTML = "";
    })
    xMoves = []
    oMoves = []

}

const isWinner = () => {

    return winningCombos.reduce((bool, a)=>{
        // console.log(a)
        const moves = xMoves.filter((e)=>{
            return a.includes(e)
        })
        // console.log(moves)
        if(moves.length > 2){
            bool = true;
        }

        return bool

    }, false)
}


