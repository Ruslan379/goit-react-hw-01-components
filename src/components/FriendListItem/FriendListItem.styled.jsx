import styled from '@emotion/styled';


export const Item = styled.li`
    display: flex;
    align-items: center;

    padding: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(9)};
    
    border-right: 1px solid ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.black};

    background-color: ${({ friendIsOnline, theme }) => {
        switch (friendIsOnline) {
            case 'On':
                return theme.colors.backgroundOnlineColor;
            case 'Off':
                return theme.colors.backgroundOfflineColor;
            default:
                return theme.colors.backgroundDefaultColor;
        }
    }
    };
`;


export const Status = styled.span`
    margin-right: ${props => props.theme.spacing(4)};

    font-size: ${props => props.theme.spacing(4)};
    line-height: ${props => props.theme.spacing(8)};
    letter-spacing: 0.5px;

    color: ${({ friendIsOnline, theme }) => {
        switch (friendIsOnline) {
            case true:
                return theme.colors.backgroundOnlineStatusColor;
            case false:
                return theme.colors.backgroundOfflineStatusColor;
            default:
                return theme.colors.black;
        }
    }
    };
`;


export const Avatar = styled.img`
    border: 1px solid ${props => props.theme.colors.borderCardColor};
    padding: ${props => props.theme.spacing(4)};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.backgroundNameColor};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};
`;


export const Name = styled.p`
    // margin-left: ${props => props.theme.spacing(7)};
    // margin-right: ${props => props.theme.spacing(7)};
    margin: ${props => props.theme.spacing(0)} ${props => props.theme.spacing(8.5)};

    font-size: ${props => props.theme.spacing(6)};
    line-height: ${props => props.theme.spacing(6)};
    font-weight: 700;
    letter-spacing: 0.5px;

    color: ${({ friendIsOnline, theme  }) => {
        switch (friendIsOnline) {
            case true:
                return theme.colors.backgroundOnlineStatusColor;
            case false:
                return theme.colors.backgroundOfflineStatusColor;
            default:
                return theme.colors.black;
        }
    }
    };
`;