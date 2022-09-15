import React, { useState } from "react";
import Result from "./Result";
import { Button, Fieldset, FormContainer, Input, InputSelect, Title, Paragraph, ElementLoader, Loader, StyledLink } from "./styled";
import { useExternalCurrencies } from "./useExternalCurrencies";

const Form = () => {
    
    const [externalCurrency, setExternalCurrency] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const { rates, status, date } = useExternalCurrencies();

    const amountChange = ({ target }) => setAmount(target.value);
    const externalCurrencyChange = ({ target }) => setExternalCurrency(target.value);

    const calculateResult = (externalCurrency) => {
        const rate = rates[externalCurrency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            externalCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(externalCurrency, amount);
    };

    if (status === "pending") {
        return (
            <>
                <Loader>
                    <ElementLoader />
                </Loader>
                <Loader>
                    <Paragraph>Trwa pobieranie danych...może to potrwać kilka sekund⏳</Paragraph>
                </Loader>
            </>
        )
    } if (status === "error") {
        return (
            <Loader>
                <Paragraph>Coś poszło nie tak...spróbuj za chwilę⌚</Paragraph>
            </Loader>
        )
    }
    return (
        <>
            <FormContainer onSubmit={onFormSubmit}>
                <Fieldset>
                    <label><Title>Kwota w PLN*:</Title>
                        <Input
                            value={amount}
                            onChange={amountChange}
                            type="number"
                            step="0.01"
                            min="0"
                            name="amount"
                            required
                            autoFocus
                            placeholder="wpisz kwotę w PLN" />
                    </label>
                    <label><Title>Wybierz walutę*:</Title>
                        <InputSelect
                            name="currency"
                            required
                            value={externalCurrency}
                            onChange={externalCurrencyChange}
                        >
                            {Object.keys(rates).map((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))};
                        </InputSelect>
                    </label>
                    <label>
                        <Title>Data pobrania kursu:</Title>
                        <Input name="date" value={date} readOnly />
                    </label>
                    <label>
                        <Title>Aktualny kurs waluty {externalCurrency}:</Title>
                        <Input name="rate" value={(1 / rates[externalCurrency]).toFixed(5) + " PLN"} readOnly />
                        <Paragraph>Kursy walut zostały pobrane z {" "}
                            <StyledLink as="a" href="https://exchangerate.host/" target="_blank" rel="noopener noreferrer">
                                exchangerate.host
                            </StyledLink>
                        </Paragraph>
                    </label>
                    <Result result={result} />
                    <Button>Policz teraz!</Button>
                </Fieldset>
            </FormContainer>
        </>
    )
};

export default Form;
