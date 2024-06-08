import React from 'react';
import { Button } from 'flowbite-react';

const BoardItem = ({ board, onEdit, onDelete }) => (
  <div className="flex justify-between items-center p-4 border rounded">
    <div>
      <h2 className="text-xl font-semibold">{board.title}</h2>
      {/* Добавьте другие данные о доске, если нужно */}
    </div>
    <div className="flex space-x-2">
      <Button onClick={() => onEdit(board)}>Edit</Button>
      <Button color="failure" onClick={() => onDelete(board.id)}>Delete</Button>
    </div>
  </div>
);

export default BoardItem;