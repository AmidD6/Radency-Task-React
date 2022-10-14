import React from 'react';
import './App.css';
import { CreateNote } from './components/Buttons/CreateNote';
import { TableCategoryComponent } from './components/TableCategory/TableCategoryComponent';
import { TableMainComponent } from './components/TableMain/TableMainComponent';

function App() {
  return (
    <div id="App" className='container'>
      <TableMainComponent />
      <CreateNote />
      <TableCategoryComponent />
    </div>
  );
}

export default App;
