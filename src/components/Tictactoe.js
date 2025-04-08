import Board from "./Board";
import {useState} from "react";



function Tictactoe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState();

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board
                tiles = {tiles}
            />
        </div>
    );
}

export default Tictactoe;




