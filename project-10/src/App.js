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

// src/App.js
// import React from 'react';
// import { Button } from 'flowbite-react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="text-3xl font-bold underline">
//           Welcome to My App
//         </h1>
//         <Button>Click me</Button>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
};

export default App;
