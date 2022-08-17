import "./style.css";

const Form = ({title}) => (

    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walutowy</legend>
            <p>
                <label><span className="form__labelText">Kwota w PLN*:</span><input className="form__field"
                    type="number" step="0.01" min="0" name="amount" required autofocus
                    placeholder="wpisz kwotę w PLN" />
                </label>
            </p>
            <label><span className="form__labelText">Wybierz walutę*:</span>
                <select className="form__field form__field--select" name="currency" required>
                    <option selected></option>
                    <option value="EUR">EUR-euro</option>
                    <option value="USD">USD-dolar amerykański</option>
                    <option value="CHF">CHF-frank szwajcarski</option>
                </select>
            </label>
            <p>
                <label>
                    <span className="form__labelText">Data pobrania kursu:</span><input className="form__field" name="date"
                        readonly value="2022-07-28" />
                </label>
            </p> 
        </fieldset>
    </form>
);

export default Form;