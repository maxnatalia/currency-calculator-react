import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import Form from "./Form";

function App() {
  return (
    <>
      <Header title="Kalkulator walutowy" />

      <Container title="Pola oznaczone * są wymagane." />
      <Form />
      <Button />
      <Container title="Wynik: N/A" />
    </>



  );
};
export default App;

