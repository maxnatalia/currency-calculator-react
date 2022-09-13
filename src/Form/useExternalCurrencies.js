import { useEffect, useState } from "react";
import axios from "axios";

export const useExternalCurrencies = () => {
    const statusRequest = {
        pending: "pending",
        success: "success",
        error: "error",
    };

    const [rates, setRates] = useState([]);
    const [date, setDate] = useState();
    const [status, setStatus] = useState(statusRequest.pending);

    const src = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(src); 
                setDate(response.data.date);
                setRates(response.data.rates);
                setStatus(() => statusRequest.success);
            } catch (error) {
                setStatus(() => statusRequest.error);
                console.error("Something bad happened!", error);
            }
        };
        setTimeout(getData, 3000);
    });

    return { rates, date, status, statusRequest };
};

