import React from "react";

const books = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las Reliquias de la Muerte",
];

export default function SecondComponent() {
  return (
    <div>
      <h2>Listado de libros</h2>
      <ul>
        {books.length === 0 && <p>No hay libros disponibles</p>}
        {books.length >= 1 &&
          books.map((book, idx) => {
            return <li key={idx}>{book}</li>;
          })}
      </ul>
    </div>
  );
}
