import React from 'react';

const Libro = () => {

  const book = {
    titolo: 'Il Nome della Rosa',
    numeroDiPagine: 500,
    autore: {
      nome: 'Umberto',
      cognome: 'Eco'
    }
  };


  const { titolo, autore: { cognome } } = book;

  return (
    <div>
      <h1>Dettagli del libro:</h1>
      <p>Titolo: {titolo}</p>
      <p>Autore: {cognome}</p>
    </div>
  );
};

export default Libro;
