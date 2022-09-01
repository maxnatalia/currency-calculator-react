import styled from "styled-components";

export const StyledHeader = styled.header`
    border-radius: 15px;
    border-style: double;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.darkGreen};
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.lightGreen};
    display: flex;
    justify-content: center;
    margin-top: 20px;
    text-align: center;
`;