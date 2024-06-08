// src/components/Sidebar.js
import React, { useState } from 'react';
import LogoComponent from './LogoComponent';
import CreateNewBoardButton from './CreateNewBoardButton';
import BoardList from './BoardList';
import HelpModal from './HelpModal';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  const [boards, setBoards] = useState([
    // пример данных о досках
    { id: 1, title: 'Board 1' },
    { id: 2, title: 'Board 2' },
  ]);

  const handleEditBoard = (board) => {
    // логика редактирования доски
    console.log('Editing board:', board);
  };

  const handleDeleteBoard = (boardId) => {
    // логика удаления доски
    setBoards(boards.filter((board) => board.id !== boardId));
  };

  return (
    <div className="p-4 w-64 border-r">
      <LogoComponent />
      <CreateNewBoardButton />
      <BoardList boards={boards} onEdit={handleEditBoard} onDelete={handleDeleteBoard} />
      <HelpModal />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import LogoComponent from './LogoComponent';
// import CreateNewBoardButton from './CreateNewBoardButton';
// import CreateBoardModal from './CreateBoardModal';
// import BoardList from './BoardList';
// import HelpModal from './HelpModal';
// import LogoutButton from './LogoutButton';

// const Sidebar = () => {
//   const [boards, setBoards] = useState([
//     { id: 1, title: 'Board 1' },
//     { id: 2, title: 'Board 2' },
//   ]);

//   const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
//   const [showHelpModal, setShowHelpModal] = useState(false);

//   const handleCreateBoard = (newBoard) => {
//     setBoards([...boards, newBoard]);
//   };

//   return (
//     <aside className="p-4 w-64 border-r sidebar">
//       <LogoComponent />
//       <CreateNewBoardButton onClick={() => setShowCreateBoardModal(true)} />
//       <BoardList boards={boards} />
//       <button onClick={() => setShowHelpModal(true)}>Need Help</button>
//       <LogoutButton />
//       <CreateBoardModal show={showCreateBoardModal} onClose={() => setShowCreateBoardModal(false)} onCreate={handleCreateBoard} />
//       <HelpModal show={showHelpModal} onClose={() => setShowHelpModal(false)} />
//     </aside>
//   );
// };

// export default Sidebar;
