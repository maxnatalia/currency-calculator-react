import "./style.css";
import React, { useState } from "react";
import Result from "../Result";
import Button from "../Button";

const Form = () => {

    const currencies = [
        {
            id: 1,
            name: "Euro",
            short: "EUR",
            rate: 4.7552
        },
        {
            id: 2,
            name: "Dolar amerykański",
            short: "USD",
            rate: 4.6916
        },
        {
            id: 3,
            name: "Frank szwajcarski",
            short: "CHF",
            rate: 4.8739
        },
    ];

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
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walutowy</legend>
                <label><span className="form__labelText">Kwota w PLN*:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__field"
                        type="number"
                        step="0.01"
                        min="0"
                        name="amount"
                        required
                        placeholder="wpisz kwotę w PLN" />
                </label>
                <label><span className="form__labelText">Wybierz walutę*:</span>
                    <select
                        className="form__field form__field--select"
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
                    </select>
                </label>
                <label>
                    <span className="form__labelText">Data pobrania kursu:</span>
                    <input className="form__field" name="date" value={date} readOnly />
                </label>
                <Result result={result} />
            </fieldset>
            <Button />
        </form>
    )
};
export default Form;
