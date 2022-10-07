import styled from '@emotion/styled';


export const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.spacing(75)};
    padding: ${props => props.theme.spacing(10)};
    margin-right: ${props => props.theme.spacing(5)};
    margin-left: ${props => props.theme.spacing(5)};

    border: ${props => `2px solid ${props.theme.colors.borderCardColor}`};
    border-radius: ${props => props.theme.spacing(5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};

    background-color: ${props => props.theme.colors.backgroundCardColor};
`;


export const Description = styled.div`
    text-align: center;
`;


export const Avatar = styled.img`
    border: 1px solid ${props => props.theme.colors.borderCardColor};
    padding: ${props => props.theme.spacing(3.75)};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.backgroundNameColor};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;


export const Name = styled.p`
    margin-top: ${props => props.theme.spacing(8)};
    font-size: ${props => props.theme.spacing(8)};
    line-height: ${props => props.theme.spacing(6)};
    font-weight: 700;
    letter-spacing: 0.5px;

    svg {
        margin-right: ${props => props.theme.spacing(3)};
        color: ${props => props.theme.colors.iconColor};
    }
`;


export const Tag = styled.p`
    margin-top: ${props => props.theme.spacing(9)};;
    font-size: ${props => props.theme.spacing(5)};
    line-height: ${props => props.theme.spacing(6)};
    font-weight: 500;
    letter-spacing: 0.5px;
    
    color: ${props => props.theme.colors.blueTag};

    svg {
        margin-right: ${props => props.theme.spacing(2)};
        color: ${props => props.theme.colors.iconColor};
    }
`;


export const Location = styled.p`
    margin-top: ${props => props.theme.spacing(6)};

    font-size: ${props => props.theme.spacing(5)};
    line-height: ${props => props.theme.spacing(7)};
    font-weight: 700;
    letter-spacing: 0.5px;

    color: ${props => props.theme.colors.redLocation};

    svg {
        margin-right: ${props => props.theme.spacing(2)};
        color: ${props => props.theme.colors.iconColor};
    }
`;


export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;

    margin-top: ${props => props.theme.spacing(12.5)};
    padding: 0;

    list-style-type: none;
    text-align: center; 

    border: 1px solid ${props => props.theme.colors.black};
    border-right: 2px solid ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.spacing(0.5)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;


export const Item = styled.li`
    padding: ${props => props.theme.spacing(5)};

    border-right: 1px solid ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.black};

    background-color: ${props => props.theme.colors.backgroundDefaultColor};
`;


export const Label = styled.span`
    display: block;
    margin-top: 0;

    text-align: center;
    font-size: ${props => props.theme.spacing(4)};
    line-height: ${props => props.theme.spacing(8)};
    font-weight: 700;
    letter-spacing: 0.5px;

    color: ${props => props.theme.colors.greenLabel};
`;

export const Quantity = styled.span`
    font-style: italic;

    color: ${props => props.theme.colors.redQuantity};
`;