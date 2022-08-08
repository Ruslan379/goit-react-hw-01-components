import styled from '@emotion/styled';

export const Statistic = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    padding: 40px;
    margin-right: 20px;

    text-transform: uppercase;

    border: 2px solid rgb(61, 61, 61);
    border-radius: 20px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);

    background-color: rgb(254, 255, 221);
`;


export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    /* width: 300px; */

    margin-top: 440px;

    list-style-type: none;
    text-align: center; 
    text-transform: lowercase;

    border: 1px solid rgb(0, 0, 0);
    border-right: 2px solid rgb(0, 0, 0);
    border-radius: 2px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;


export const Item = styled.li`
    /* display: block; */
    padding: 20px;

    border-right: 1px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
    // background-color: rgb(199, 199, 199);

    background-color: ${props => props.randomColor};
    }
`;


export const Label = styled.span`
    display: block;
    margin-top: 0;

    text-align: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0.5px;

    color: #ffffff;
`;


export const Percentage = styled.span`
    font-weight: 700;
    font-style: italic;

    color: #ffe8c5;
`;