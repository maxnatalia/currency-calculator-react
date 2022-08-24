import "./style.css";

const Result = ({ result }) => (
  <p className="result">Kwota po przeliczeniu:&nbsp;<br />
    {result !== undefined && (
      <>
        <strong>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Result;