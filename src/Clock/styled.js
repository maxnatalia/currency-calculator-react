import styled from "styled-components";

export const ElementClock = styled.div`
    border-style: double;
    border-color: ${({ theme }) => theme.color.darkGreen};
    border-radius: 15px;
    padding: 20px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.lightGreen};
    font-size: 18px;
    margin-top: 10px;
    display: flex;
    justify-content: right;
    font-family: 'Courier New', Courier, monospace;
`;