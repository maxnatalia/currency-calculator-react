import styled from "styled-components";

export const FormContainer = styled.form`
    border-radius: 15px;
    border-style: double;
    border-color: ${({ theme }) => theme.color.darkGreen};
    padding: 20px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.color.lightGreen};
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.lightGreen};
    border-style: none;
`;

export const Legend = styled.legend`
    border-radius: 15px;
    border-style: double;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.darkGreen};
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.lightGreen};
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
    cursor: pointer;
    
    &:hover {
        filter: brightness(130%);
    }
`;

export const Button = styled.button`
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.color.darkGreen};
    border-radius: 15px;
    padding: 10px;
    border-style: none;
    color: ${({ theme }) => theme.color.lightGreen};;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(130%);
    }
`;