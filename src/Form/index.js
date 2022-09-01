import React, { useState } from "react";
import Result from "../Result";
import { currencies } from "./currencies";
import {Button, Fieldset, FormContainer, Input, InputSelect, Legend, Title} from "./styled";

const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const date = "2022-07-28";

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;
        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };
    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator walutowy</Legend>
                <label><Title>Kwota w PLN*:</Title>
                    <Input
                        onChange={({ target }) => setAmount(target.value)}
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
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}>
                        {currencies.map(currency => (
                            <option
                                key={currency.short} value={currency.short}>
                                {currency.name}
                            </option>
                        ))};
                    </InputSelect>
                </label>
                <label>
                    <Title>Data pobrania kursu:</Title>
                    <Input name="date" value={date} readOnly />
                </label>
                <Result result={result} />
                <Button>Policz teraz!</Button>
            </Fieldset>
        </FormContainer>
    )
};

export default Form;
