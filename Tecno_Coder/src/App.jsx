import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="font-sans">
      <div className="bg-gray-100 shadow-lg">
        <div className="container mx-auto p-4 md:max-w-2xl"> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NavBar />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div>
    </div>
  );
}

export default App;
