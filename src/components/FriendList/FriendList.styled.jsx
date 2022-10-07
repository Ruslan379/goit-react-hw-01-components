import styled from '@emotion/styled';

export const FriendsList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.spacing(75)};
    padding: ${props => props.theme.spacing(10)};
    margin-right: ${props => props.theme.spacing(5)};

    /* text-transform: uppercase; */

    border: ${props => `2px solid ${props.theme.colors.borderCardColor}`};
    border-radius: ${props => props.theme.spacing(5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};

    background-color: ${props => props.theme.colors.backgroundCardColor};
`;


export const StatList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0;
    margin-top: ${props => props.theme.spacing(9)};

    list-style-type: none;
    text-align: center; 

    border: 1px solid ${props => props.theme.colors.black};
    border-right: 2px solid ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.spacing(0.5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;

