// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', cards: [{ id: 1, text: 'Task 1' }, { id: 2, text: 'Task 2' }] },
    { id: 2, title: 'In Progress', cards: [{ id: 3, text: 'Task 3' }] },
    { id: 3, title: 'Done', cards: [{ id: 4, text: 'Task 4' }] }
  ]);

  const draggedItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (e, columnId, cardId) => {
    draggedItem.current = { columnId, cardId };
  };

  const handleDragOver = (e, columnId, cardId) => {
    e.preventDefault();
    dragOverItem.current = { columnId, cardId };
  };

  const handleDragEnd = () => {
    const { columnId: fromColumnId, cardId: fromCardId } = draggedItem.current;
    const { columnId: toColumnId, cardId: toCardId } = dragOverItem.current;

    if (fromColumnId !== toColumnId || fromCardId !== toCardId) {
      const updatedColumns = columns.map(column => {
        if (column.id === fromColumnId) {
          const updatedCards = column.cards.filter(card => card.id !== fromCardId);
          return { ...column, cards: updatedCards };
        }
        if (column.id === toColumnId) {
          const targetIndex = column.cards.findIndex(card => card.id === toCardId);
          const updatedCards = [...column.cards];
          updatedCards.splice(targetIndex, 0, columns.find(col => col.id === fromColumnId).cards.find(card => card.id === fromCardId));
          return { ...column, cards: updatedCards };
        }
        return column;
      });

      setColumns(updatedColumns);
    }

    draggedItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div className="App">
      <h1>Trello Board</h1>
      <div className="board">
        {columns.map(column => (
          <div key={column.id} className="column">
            <h2>{column.title}</h2>
            <div className="cards">
              {column.cards.map(card => (
                <div key={card.id}
                  draggable
                  onDragStart={e => handleDragStart(e, column.id, card.id)}
                  onDragOver={e => handleDragOver(e, column.id, card.id)}
                  onDragEnd={handleDragEnd}
                  className="card">{card.text}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
