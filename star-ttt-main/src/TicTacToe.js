const TicTacToe = ({socket, room}) => {
	return (
		<div className="cont">
            <h1>
                Joined Room with ID : {room.roomId}
            </h1>
            <p className="versus">{room.players?.player1.username}  <b>versus</b>  {room.players?.player2.username}</p>
        </div>	
	);
}

export default TicTacToe;