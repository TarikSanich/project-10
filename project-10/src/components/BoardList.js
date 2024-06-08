// // src/components/BoardList.js
// import React from 'react';
// import BoardItem from './BoardItem';

// const BoardList = ({ boards, onEdit, onDelete }) => (
//   <div className="space-y-4">
//     {boards.map((board) => (
//       <BoardItem key={board.id} board={board} onEdit={onEdit} onDelete={onDelete} />
//     ))}
//   </div>
// );

// export default BoardList;

import React from 'react';

const BoardList = ({ boards }) => {
  return (
    <ul>
      {boards.map((board) => (
        <li key={board.id} className="p-2 border-b">
          {board.title}
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
