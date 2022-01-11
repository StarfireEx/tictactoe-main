import "./tictactoe.css"
import {GrClose} from 'react-icons/gr';
import {BiCircle} from 'react-icons/bi';
const TicTacToe = ({ socket, room, username }) => {
    const playTurn = (i, j) => {
        if(room.players?.[room.playerTurn].username === username) {
            
            console.log(room.players?.[room.playerTurn].username);
            if(room.playerTurn === 'player1') 
                socket.emit('play-turn', {position: [i, j], roomId: room.roomId, player: 'player1'});
                
            else 
                socket.emit('play-turn', {position: [i, j], roomId: room.roomId, player: 'player2'});
        }
    }

    const getIcon = (cell) => {
        if(cell === 'X') 
            return <GrClose/>
        else if(cell === 'O') 
            return <BiCircle/>
        return "";
    }

    return (
        <div className="tic-tac-toe">
            <div className="head">Welcome To MyTicTacToe</div>
            <div className="underline"/><br></br>

             <div className="title">Room ID <span>{room.roomId}</span></div><br></br>
            <div className="box"><div className="versus">
                {room.players?.player1.username} Versus
                {room.players?.player2.username}
                <p className="win">{room.gameOver && `Game Over ${room.players[room.winner].username} won`}</p>
            </div>

</div><br></br>


            <div className="board">
                {room.board?.map((row, i) => {
                    return (
                        <div className="board-row" key={i}>
                            {row.map((cell, j) => {
                                return (
                                    <div
                                        className="board-cell"
                                        key={j}
                                        value={cell}
                                        onClick={() => playTurn(i, j)}
                                    >
                                        {getIcon(cell)}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div><br></br>
            <div className="turn">{room.players?.[room.playerTurn].username}'s turn</div>

<div className="turn">TURN {room.turns}</div>

        </div>
    );
};

export default TicTacToe;
