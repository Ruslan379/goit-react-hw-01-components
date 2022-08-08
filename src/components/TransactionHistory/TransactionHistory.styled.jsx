import styled from '@emotion/styled';

export const TransactionsHistory = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    padding: 40px;
    margin-right: 20px;

    border: 2px solid rgb(61, 61, 61);
    border-radius: 20px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);

    background-color: rgb(254, 255, 221);
`;


export const ItemHistory = styled.table`
    border-collapse: collapse;
    text-transform: capitalize;
    text-align: center;
    font-size: 12px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;


export const TableTh = styled.th`
    padding: 5px;
    border: 1px solid #2a2a2a;
    background-color: rgb(205, 232, 255);
`;


export const TableTd = styled.td`
    padding: 5px;
    border: 1px solid #2a2a2a;
    background-color: rgb(250, 250, 235);
`;