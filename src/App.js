import React from 'react';
import './App.css';

function App() {
  // Definiere eine Variable für den aktuellen Tag oder eine einfache Begrüßung
  const greeting = 'Hallo, heute ist ein schöner Tag!';
  const zahl1 = 3;
  const zahl2 = 5;

  return (
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      <h3>{zahl1} + {zahl2} = {zahl1 + zahl2}</h3> {/* Beispiel für eine einfache Berechnung */}
    </>
  );
}

export default App;

