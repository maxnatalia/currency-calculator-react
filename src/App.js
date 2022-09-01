import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
    <>
      <Clock />
      <Header title="Kalkulator walutowy"></Header>
      <Form />
      <Container title="Pola oznaczone * są wymagane." />
    </>
  );
};

export default App;

