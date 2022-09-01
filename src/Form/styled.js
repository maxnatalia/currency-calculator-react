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

export const Paragraph = styled.p`
    text-align: center;
    font-size: 18px;
`;

export const Loader = styled.div`
    max-width: 1000px;
    padding: 60px 40px;
    margin: 20px auto;
    border-style: double;
    border-color: ${({ theme }) => theme.color.darkGreen};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.lightGreen};
    display: flex;
    justify-content: center;
`;

export const ElementLoader = styled.div`
    border: 10px solid ${({ theme }) => theme.color.darkGreen};
    border-top: 10px solid ${({ theme }) => theme.color.lightGreen};
    border-radius: 50%;
    min-width: 60px;
    min-height: 60px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        from { 
            transform: rotate(0deg); 
        }
        to { 
            transform: rotate(360deg); 
        }
    }
`;

export const StyledLink = styled.span`
    cursor: pointer;
    color: ${({ theme }) => theme.color.darkGreen};

    &:hover {
        filter: brightness(120%);
    }
`;