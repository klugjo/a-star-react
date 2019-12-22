interface ICell {
  status: 'Empty' | 'Blocked' | 'Searched';
}

interface IGridProps {
  grid: Array<Array<ICell>>
}

const App: React.FC<IGridProps> = ({ grid }) => {
  return (
    <div className="grid-root">
      <table className="grid-table">
        {grid.map(row => <tr>
          {row.map(cell => <td className={}>
            
          </td>)}
        </tr>)}
      </table>
    </div>
  );
}