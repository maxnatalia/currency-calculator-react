import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";

function App() { 
  return (
    <>
      <Clock/>
      <Form />
      <Container title="Pola oznaczone * są wymagane." />
    </>
  );
};

export default App;

