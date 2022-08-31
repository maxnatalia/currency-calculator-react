import styled from "styled-components";

export const FormContainer = styled.form`
    border-radius: 15px;
    border-style: double;
    border-color:#49504e;
    padding: 20px;
    margin-top: 20px;
    background-color: #ebebeb;
`;

export const Fieldset = styled.fieldset`
    background-color: #ebebeb;
    border-style: none;
`;

export const Legend = styled.legend`
    border-radius: 15px;
    border-style: double;
    padding: 20px;
    background-color: #49504e;
    font-size: 30px;
    font-weight: 700;
    color: #d6d9db;
    text-align: center;
`;

export const Title = styled.span`
    display: inline-block;
    width: 100%;
    margin-right: 5px;
    max-width: 250px;
`;

export const Input = styled.input`
    border-radius: 15px;
    border-width: 2px;
    padding: 10px;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const InputSelect = styled.select`
    border-radius: 15px;
    border-width: 2px;
    padding: 10px;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    &:hover {
        background-color: hsl(163, 5%, 80%);
    }
`;

export const Button = styled.button`
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    background-color: #49504e;
    border-radius: 15px;
    padding: 10px;
    border-style: none;
    color: #d6d9db;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        background-color: hsl(163, 5%, 40%);
    }

    &:active {
        background-color: hsl(163, 5%, 50%);
    }
`;