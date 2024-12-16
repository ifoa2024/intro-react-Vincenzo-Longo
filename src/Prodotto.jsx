import React from 'react';

const ProductInfo = () => {
  const prodotto = {
    nome: 'Smartphone',
    prezzo: 599,
    categoria: 'Elettronica',
    marca: 'MarcaX',
    disponibilita: 'In stock',
  };

  const { nome, prezzo, ...altriDettagli } = prodotto;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Dettagli del prodotto:</h1>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Prezzo:</strong> {prezzo} €</p>
      <h2>Altri dettagli:</h2>
      <ul>
        {Object.entries(altriDettagli).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
