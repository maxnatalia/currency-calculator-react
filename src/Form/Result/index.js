import { Paragraph } from "./styled";

const Result = ({ result }) => (
  <Paragraph>Kwota po przeliczeniu:&nbsp;<br />
    {result !== undefined && (
      <>
        <strong>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
          {result.targetAmount.toFixed(2)}&nbsp;{result.externalCurrency}
        </strong>
      </>
    )}
  </Paragraph>
);

export default Result;