export default function Square({ value, onSquareClick, isWinningSquare }) {
  const className = `square ${value ? 'clicked' : ''} ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''} ${isWinningSquare ? 'winner' : ''}`;
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
