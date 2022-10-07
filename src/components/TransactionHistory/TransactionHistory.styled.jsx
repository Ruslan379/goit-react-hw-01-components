import styled from '@emotion/styled';

export const TransactionsHistory = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.spacing(75)};
    padding: ${props => props.theme.spacing(10)};
    margin-right: ${props => props.theme.spacing(5)};

    border: ${props => `2px solid ${props.theme.colors.borderCardColor}`};
    border-radius: ${props => props.theme.spacing(5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};

    background-color: ${props => props.theme.colors.backgroundCardColor};
`;


export const ItemHistory = styled.table`
    border-collapse: collapse;
    text-transform: capitalize;

    // text-indent: 34px;
    // text-indent: 5em each-line;

    margin-top: ${props => props.theme.spacing(7.7)};
    text-align: center;
    font-size: ${props => props.theme.spacing(3)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;


export const TableTh = styled.th`
    text-align: center;
    padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(7.5)};
    border: 1px solid ${props => props.theme.colors.borderTable};
    background-color: ${props => props.theme.colors.backgroundNameColor};
`;


export const TableTd = styled.td`
    text-align: center;
    padding: ${props => props.theme.spacing(1.2)};
    border: 1px solid ${props => props.theme.colors.borderTable};
    background-color: ${props => props.theme.colors.backgroundTable};
`;