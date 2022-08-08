import styled from '@emotion/styled';

export const Statistic = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.spacing(75)};
    padding: ${props => props.theme.spacing(10)};
    margin-right: ${props => props.theme.spacing(5)};

    text-transform: uppercase;

    border: ${props => `2px solid ${props.theme.colors.borderCardColor}`};
    border-radius: ${props => props.theme.spacing(5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};

    background-color: ${props => props.theme.colors.backgroundCardColor};
`;


export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;

    padding: 0;
    margin-top: ${props => props.theme.spacing(30)};

    list-style-type: none;
    text-align: center; 
    text-transform: lowercase;

    border: 1px solid ${props => props.theme.colors.black};
    border-right: 2px solid ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.spacing(0.5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;


export const Item = styled.li`
    padding: ${props => props.theme.spacing(5)};

    border-right: 1px solid ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.black};

    background-color: ${props => props.randomColor};
    }
`;


export const Label = styled.span`
    display: block;
    margin-top: 0;

    text-align: center;
    font-size: ${props => props.theme.spacing(4)};
    line-height: ${props => props.theme.spacing(8)};
    font-weight: 700;
    letter-spacing: 0.5px;

    color: ${props => props.theme.colors.white};
`;


export const Percentage = styled.span`
    font-weight: 700;
    font-style: italic;

    color: ${props => props.theme.colors.statisticsPercentage};
`;


//!=============== icons ==================== 
export const IconStatistic = styled.p`
    margin-top: ${props => props.theme.spacing(5)};

    svg {
        // margin-right: ${props => props.theme.spacing(3)};
        // color: ${props => props.theme.colors.iconColor};
    }
`;