import Square from './Square';

export default function Board({ squares, onPlay, winningLine }) {
  const isWinningSquare = index => winningLine.includes(index);

  return (
    <>
      {[0, 3, 6].map(row =>
        <div className="board-row" key={row}>
          {[0, 1, 2].map(col => {
            const i = row + col;
            return (
              <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => onPlay(i)}
                isWinningSquare={isWinningSquare(i)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
