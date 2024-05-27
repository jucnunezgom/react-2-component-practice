export default function Child({ name, addMessage, setName }) {
  const sendMessage = () => {
    addMessage("Hello from Child");
  };

  const changeName = () => {
    setName("New child name");
  };

  return (
    <div>
      {name}
      <br />
      <button onClick={sendMessage}>Enviar mensaje</button>
      <button onClick={changeName}>Cambiar Nombre</button>
    </div>
  );
}
