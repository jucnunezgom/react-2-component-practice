import React from "react";

export default function MyComponent() {
  const name = "Inés";
  const repository = "https://github.com/inesmaariao/component-practice";
  const student = {
    name: "Juan Carlos",
    lastName: "Nuñez",
    mobile: "123456789",
    linkedinProfile: "https://www.linkedin.com/in/jucnunezgom/",
  };

  console.log(student);

  return (
    <div>
      <hr />
      <p>Este es mi primer componente</p>
      <h2>Temas de React</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <hr />
      <h2>Datos del docente</h2>
      <p>Nombre: {name}</p>
      <p>Repository:</p>
      <p>{repository}</p>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Nombre: {student.name}</p>
      <p>Apellido: {student.lastName}</p>
      <p>Celular: {student.mobile}</p>
      <p>Perfil de LinkedIn:</p>
      <p>{student.linkedinProfile}</p>
    </div>
  );
}
