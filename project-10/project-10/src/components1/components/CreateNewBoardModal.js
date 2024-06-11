// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CreateBoardModal = ({ onClose, onCreate, initialData = {} }) => {
//   const [title, setTitle] = useState(initialData.title || '');
//   const [selectedIcon, setSelectedIcon] = useState(initialData.icon || 'icon1'); // замените на реальные иконки
//   const [selectedBackground, setSelectedBackground] = useState(initialData.background || 'none');

//   useEffect(() => {
//     if (initialData) {
//       setTitle(initialData.title || '');
//       setSelectedIcon(initialData.icon || 'icon1');
//       setSelectedBackground(initialData.background || 'none');
//     }
//   }, [initialData]);

//   const handleSubmit = async () => {
//     if (!title) return alert('Title is required');

//     try {
//       if (initialData.id) {
//         const response = await axios.put(`/api/boards/${initialData.id}`, {
//           title,
//           icon: selectedIcon,
//           background: selectedBackground,
//         });
//         onCreate(response.data);
//       } else {
//         const response = await axios.post('/api/boards', {
//           title,
//           icon: selectedIcon,
//           background: selectedBackground,
//         });
//         onCreate(response.data);
//       }
//       onClose();
//     } catch (error) {
//       console.error('Failed to save board', error);
//     }
//   };

//   return (
//     <div className="modal">
//       <h2>{initialData.id ? 'Edit Board' : 'Create New Board'}</h2>
//       <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
//       <div>
//         <h3>Icons</h3>
//         <input type="radio" name="icon" value="icon1" checked={selectedIcon === 'icon1'} onChange={() => setSelectedIcon('icon1')} />
//         <input type="radio" name="icon" value="icon2" onChange={() => setSelectedIcon('icon2')} />
//         {/* добавьте другие иконки */}
//       </div>
//       <div>
//         <h3>Backgrounds</h3>
//         <input type="radio" name="background" value="none" checked={selectedBackground === 'none'} onChange={() => setSelectedBackground('none')} />
//         <input type="radio" name="background" value="background1" onChange={() => setSelectedBackground('background1')} />
//         {/* добавьте другие фоны */}
//       </div>
//       <button onClick={handleSubmit}>{initialData.id ? 'Save' : 'Create'}</button>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default CreateBoardModal;

// // import React, { useState } from "react";
// // import { Modal, Button, Form, Input } from "flowbite-react";

// // const CreateBoardModal = ({ show, onClose }) => {
// //   const [title, setTitle] = useState("");
// //   const [icon, setIcon] = useState("default-icon");
// //   const [background, setBackground] = useState("no-background");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (title.trim() === "") {
// //       alert("Title is required");
// //       return;
// //     }
// //     // Отправка данных на бэкэнд
// //     onClose();
// //   };

// //   return (
// //     <Modal show={show} onClose={onClose}>
// //       <Modal.Header>Create New Board</Modal.Header>
// //       <Modal.Body>
// //         <Form onSubmit={handleSubmit}>
// //           <Form.Group>
// //             <Form.Label>Title</Form.Label>
// //             <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
// //           </Form.Group>
// //           <Form.Group>
// //             <Form.Label>Icons</Form.Label>
// //             <div className="icons">
// //               <Input type="radio" name="icon" value="icon1" checked={icon === "icon1"} onChange={(e) => setIcon(e.target.value)} />
// //               <Input type="radio" name="icon" value="icon2" checked={icon === "icon2"} onChange={(e) => setIcon(e.target.value)} />
// //             </div>
// //           </Form.Group>
// //           <Form.Group>
// //             <Form.Label>Backgrounds</Form.Label>
// //             <div className="backgrounds">
// //               <Input type="radio" name="background" value="no-background" checked={background === "no-background"} onChange={(e) => setBackground(e.target.value)} />
// //               <Input type="radio" name="background" value="background1" checked={background === "background1"} onChange={(e) => setBackground(e.target.value)} />
// //             </div>
// //           </Form.Group>
// //           <Button type="submit">Create</Button>
// //         </Form>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // };

// // export default CreateBoardModal;


import React, { useState } from 'react';
import { Modal, Button, TextInput, Label, Radio } from 'flowbite-react';

const CreateBoardModal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('default-icon');
  const [background, setBackground] = useState('no-background');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    onCreate({ id: Date.now(), title, icon, background });
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Create New Board</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="title">Title</Label>
            <TextInput
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label>Icons</Label>
            <div className="flex">
              <Radio
                id="icon1"
                name="icon"
                value="icon1"
                checked={icon === 'icon1'}
                onChange={(e) => setIcon(e.target.value)}
              />
              <Label htmlFor="icon1">Icon 1</Label>
              <Radio
                id="icon2"
                name="icon"
                value="icon2"
                checked={icon === 'icon2'}
                onChange={(e) => setIcon(e.target.value)}
              />
              <Label htmlFor="icon2">Icon 2</Label>
            </div>
          </div>
          <div className="mb-4">
            <Label>Backgrounds</Label>
            <div className="flex">
              <Radio
                id="no-background"
                name="background"
                value="no-background"
                checked={background === 'no-background'}
                onChange={(e) => setBackground(e.target.value)}
              />
              <Label htmlFor="no-background">No Background</Label>
              <Radio
                id="background1"
                name="background"
                value="background1"
                checked={background === 'background1'}
                onChange={(e) => setBackground(e.target.value)}
              />
              <Label htmlFor="background1">Background 1</Label>
            </div>
          </div>
          <Button type="submit">Create</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateBoardModal;
